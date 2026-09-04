"use client";

import { Bounds, OrbitControls, useAnimations, useBounds, useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

type Anchor = { id: string; mesh: string };

const ASSEMBLY_SECONDS = 2.6;

function Engine({ onAssembled }: { onAssembled: () => void }) {
  const { scene, animations } = useGLTF("/models/v8_engine.glb");
  // Own clone so the teaser canvas and this one never fight over one object.
  const model = useMemo(() => scene.clone(true), [scene]);
  const { actions, names } = useAnimations(animations, model);

  useEffect(() => {
    model.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.isMesh) {
        const mats = Array.isArray(m.material) ? m.material : [m.material];
        mats.forEach((x) => {
          const mat = x as THREE.MeshStandardMaterial;
          if (mat && "emissive" in mat) {
            mat.emissive = new THREE.Color("#0c5a34");
            mat.emissiveIntensity = 0.3;
          }
        });
      }
    });
  }, [model]);

  useEffect(() => {
    const clip = animations[0];
    const action = names.length ? actions[names[0]] : null;
    if (action && clip) {
      const timeScale = Math.max(1, clip.duration / ASSEMBLY_SECONDS);
      action.reset();
      action.setLoop(THREE.LoopOnce, 1);
      action.clampWhenFinished = true;
      action.setEffectiveTimeScale(timeScale);
      action.play();
    }
    return () => {
      if (action) action.stop();
    };
  }, [actions, names, animations]);

  useEffect(() => {
    const t = setTimeout(onAssembled, ASSEMBLY_SECONDS * 1000 + 150);
    return () => clearTimeout(t);
  }, [onAssembled]);

  return <primitive object={model} />;
}

function Fitter({ assembled }: { assembled: boolean }) {
  const bounds = useBounds();
  useEffect(() => {
    if (assembled) bounds.refresh().clip().fit();
  }, [assembled, bounds]);
  return null;
}

function Projector({ anchors, assembled }: { anchors: Anchor[]; assembled: boolean }) {
  const scene = useThree((s) => s.scene);
  const camera = useThree((s) => s.camera);
  const size = useThree((s) => s.size);
  const positions = useRef<{ id: string; pos: THREE.Vector3 }[]>([]);
  const v = useMemo(() => new THREE.Vector3(), []);

  useEffect(() => {
    if (!assembled) return;
    scene.updateWorldMatrix(true, true);
    positions.current = anchors.map((a) => {
      const obj = scene.getObjectByName(a.mesh);
      const pos = new THREE.Vector3();
      if (obj) new THREE.Box3().setFromObject(obj).getCenter(pos);
      return { id: a.id, pos };
    });
  }, [assembled, anchors, scene]);

  useFrame(() => {
    for (const p of positions.current) {
      v.copy(p.pos).project(camera);
      const x = (v.x * 0.5 + 0.5) * size.width;
      const y = (-v.y * 0.5 + 0.5) * size.height;
      const show = v.z < 1;
      const dot = document.getElementById(`mdot-${p.id}`);
      const line = document.getElementById(`ln-${p.id}`);
      if (dot) {
        dot.style.transform = `translate(${x}px, ${y}px)`;
        dot.style.opacity = show ? "1" : "0";
      }
      if (line) {
        line.setAttribute("x2", String(x));
        line.setAttribute("y2", String(y));
        line.style.opacity = show ? "0.85" : "0";
      }
    }
  });

  return null;
}

export default function EngineCanvas({ anchors }: { anchors: Anchor[] }) {
  const [assembled, setAssembled] = useState(false);

  /*
   *  Paa touch-enheder droppes device pixel ratio til 1 og antialias slaas
   *  fra. Ved DPR 1.5 med MSAA rasteres omkring 740k pixels paa en
   *  390x844-skaerm, ved DPR 1 uden MSAA er det 329k og ingen
   *  multisample-resolve. Cirka 2,5 gange mindre fill rate.
   *
   *  Sikkert mod hydration mismatch: komponenten SSR'er aldrig, den
   *  indlaeses med dynamic + ssr:false.
   */
  const coarse =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;

  return (
    <Canvas
      /*
       *  Uden fallback kaster R3F naar der ikke kan oprettes en
       *  WebGL-kontekst, fx aeldre iOS Safari, GPU-blocklists eller
       *  haardede firmaopsaetninger. Komponenten ligger paa forsiden, saa
       *  kastet bobler op til app/error.tsx og ERSTATTER hele forsiden med
       *  fejlsiden. Suspense fanger indlaesning, ikke fejl.
       */
      fallback={
        <div className="flex h-full w-full items-center justify-center px-6 text-center font-mono text-xs uppercase tracking-[0.18em] text-white/50">
          Din browser understøtter ikke 3D-visning
        </div>
      }
      dpr={coarse ? 1 : [1, 1.5]}
      camera={{ fov: 38, position: [5, 1.5, 8] }}
      gl={{ antialias: !coarse, powerPreference: "high-performance" }}
      performance={{ min: 0.5 }}
    >
      <color attach="background" args={["#06120c"]} />

      <hemisphereLight args={["#cdfbe6", "#08170e", 1.4]} />
      <directionalLight position={[6, 10, 6]} intensity={3.6} />
      <pointLight position={[-7, 4, -5]} intensity={230} color="#52b788" />

      <Suspense fallback={null}>
        <Bounds fit clip margin={1.6}>
          <Engine onAssembled={() => setAssembled(true)} />
          <Fitter assembled={assembled} />
        </Bounds>
        <Projector anchors={anchors} assembled={assembled} />
      </Suspense>

      <OrbitControls
        makeDefault
        autoRotate={assembled}
        autoRotateSpeed={0.4}
        enablePan={false}
        enableZoom
        minDistance={2}
        maxDistance={22}
        minPolarAngle={0.35}
        maxPolarAngle={2.35}
      />
    </Canvas>
  );
}

useGLTF.preload("/models/v8_engine.glb");
