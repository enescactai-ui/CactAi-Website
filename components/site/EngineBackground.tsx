"use client";

import { Bounds, OrbitControls, useAnimations, useBounds, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import * as THREE from "three";

function Engine({ onAssembled }: { onAssembled: () => void }) {
  const { scene, animations } = useGLTF("/models/v8_engine.glb");
  // Own clone so this canvas and the fullscreen one never share one object.
  const model = useMemo(() => scene.clone(true), [scene]);
  const { actions, names } = useAnimations(animations, model);

  // Play the build animation exactly once. Kept independent of `onAssembled`
  // so a re-render (e.g. when assembly finishes) can't restart the build.
  useEffect(() => {
    model.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.isMesh) {
        const mats = Array.isArray(m.material) ? m.material : [m.material];
        mats.forEach((x) => {
          const mat = x as THREE.MeshStandardMaterial;
          if (mat && "emissive" in mat) {
            mat.emissive = new THREE.Color("#0c5a34");
            mat.emissiveIntensity = 0.32;
          }
        });
      }
    });

    const clip = animations[0];
    const action = names.length ? actions[names[0]] : null;
    if (action && clip) {
      action.reset();
      action.setLoop(THREE.LoopOnce, 1);
      action.clampWhenFinished = true;
      action.setEffectiveTimeScale(Math.max(1, clip.duration / 3));
      action.play();
    }
    return () => {
      if (action) action.stop();
    };
  }, [model, actions, names, animations]);

  // Separate one-shot timer to notify the parent once the build finishes.
  useEffect(() => {
    const t = setTimeout(onAssembled, 3400);
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

export default function EngineBackground({ paused = false }: { paused?: boolean }) {
  const [assembled, setAssembled] = useState(false);
  const handleAssembled = useCallback(() => setAssembled(true), []);

  return (
    <Canvas
      dpr={1}
      frameloop={paused ? "never" : "always"}
      camera={{ fov: 38, position: [5, 1.5, 8] }}
      gl={{ antialias: true }}
    >
      <color attach="background" args={["#06120c"]} />
      <hemisphereLight args={["#cdfbe6", "#08170e", 1.2]} />
      <directionalLight position={[6, 10, 6]} intensity={3} />
      <pointLight position={[-7, 4, -5]} intensity={200} color="#52b788" />
      <Suspense fallback={null}>
        <Bounds fit clip margin={1.7}>
          <Engine onAssembled={handleAssembled} />
          <Fitter assembled={assembled} />
        </Bounds>
      </Suspense>
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.5}
        enableRotate={false}
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
}

useGLTF.preload("/models/v8_engine.glb");
