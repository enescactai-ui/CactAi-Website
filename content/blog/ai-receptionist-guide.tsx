import {
  Callout,
  Em,
  H2,
  H3,
  Lead,
  LI,
  P,
  Prose,
  Quote,
  Strong,
  UL,
} from "@/components/blog/Prose";

export default function AiReceptionistGuidePost() {
  return (
    <Prose>
      <Lead>
        I 2024 lød AI-telefonbots som robotter. I 2026 er de så naturlige
        at de fleste danske kunder ikke opdager forskellen. Her er hvad
        teknologien faktisk kan — og om det giver mening for dit firma.
      </Lead>

      <H2>Hvad en AI receptionist FAKTISK er</H2>

      <P>
        En AI receptionist er et software-system der svarer telefonen for
        dig. Den taler dansk med naturlig prosodi, forstår hvad kunden
        ringer om, booker tider direkte i din kalender, og sender SMS-
        bekræftelse. Den arbejder 24/7, bliver aldrig syg, og koster
        mindre end ét månedligt løn-tilskud til en menneskelig receptionist.
      </P>

      <P>
        Teknologien bagved er kombinationen af tre komponenter:
        tale-til-tekst (Whisper eller Deepgram), et sprog-model (typisk
        GPT-4 eller Claude) der forstår intent, og tekst-til-tale
        (ElevenLabs eller Cartesia) der laver det naturlige danske svar
        tilbage.
      </P>

      <H2>Hvad den IKKE er</H2>

      <P>
        Lad mig være ærlig om begrænsningerne, så du ikke bliver overrasket.
      </P>

      <UL>
        <LI>
          <Strong>Den er ikke et hverv:</Strong> AI'en er ikke en
          erstatning for menneskelig dømmekraft i komplekse situationer.
          Den kan ikke vurdere en sur kunde og spille terapeut.
        </LI>
        <LI>
          <Strong>Den er ikke fejlfri:</Strong> ~5% af opkald har stadig
          små misforståelser. De fleste handler om accent (jysk vs sjællandsk
          eller udenlandske kunder).
        </LI>
        <LI>
          <Strong>Den er ikke usynlig:</Strong> Loven kræver at den oplyser
          den er AI ved samtalens start (EU AI Act art. 50). Det skræmmer
          ~10% af kunder væk i opstart, men de fleste vænner sig.
        </LI>
      </UL>

      <Callout title="Vigtigt om EU AI Act">
        Pr. 2026 SKAL alle AI-systemer der interagerer med mennesker
        oplyse at de er AI ved samtalens start. Det er ikke en
        anbefaling — det er lov. Bureauer der sælger dig "skjult AI" er
        både uærlige og ulovlige.
      </Callout>

      <H2>Hvad det koster i Danmark 2026</H2>

      <P>
        Prismodellen varierer voldsomt. Her er hvad vi ser i markedet:
      </P>

      <UL>
        <LI>
          <Strong>DIY (Synthflow, Vapi):</Strong> 250-1.500 kr/md i
          platform-fees. Du skal selv konfigurere prompts, integrationer,
          kalendere. Tidsforbrug: 20-40 timer initial setup.
        </LI>
        <LI>
          <Strong>White-label bureauer (inkl. os):</Strong> 1.500-5.500
          kr/md alt-inklusiv. Vi konfigurerer, vedligeholder og tilpasser
          som dit firma vokser.
        </LI>
        <LI>
          <Strong>Enterprise (Aircall, RingCentral AI add-ons):</Strong>
          6.000-15.000 kr/md. Overkill for håndværkere — bygget til
          callcenter-skala.
        </LI>
      </UL>

      <P>
        Til reference: en dansk receptionist med social arbejdsgiverafgift
        og 5-ugers ferie koster ~32.000-42.000 kr/md. AI er 5-10× billigere
        og dækker døgnet — ikke kun 8-16.
      </P>

      <H2>Hvornår investere i en AI receptionist?</H2>

      <P>
        Det her er den vigtigste sektion. AI receptionist er IKKE for
        alle håndværkere. Det giver mening i specifikke scenarier.
      </P>

      <H3>Investér når du har:</H3>

      <UL>
        <LI>
          Mere end 5-10 missede opkald per uge (du kan tjekke det i din
          telefon-app).
        </LI>
        <LI>
          Job-værdi over 3.000 kr per opgave (ROI på AI er hurtig hvis ét
          ekstra missed opkald per måned ville være dækket).
        </LI>
        <LI>
          Solo-business eller lille team (3-5 personer) hvor ingen kan
          tage telefonen mens de arbejder.
        </LI>
        <LI>
          Kunder der ringer "lige nu" i stedet for at booke online — typisk
          akut-services (VVS, EL, lås, tag).
        </LI>
      </UL>

      <H3>Vent når du har:</H3>

      <UL>
        <LI>
          Mindre end 20 opkald per uge total (manuelt håndtering er stadig
          billigere).
        </LI>
        <LI>
          Et kontor-team der allerede tager opkald (medarbejdere er bedre
          end AI i 2026 — de er bare dyrere).
        </LI>
        <LI>
          Komplekse services hvor hver opgave kræver tilbud (AI er bedst
          til simple bookings, ikke til 30-min konsulent-samtaler).
        </LI>
      </UL>

      <Quote>
        Hvis du misser 1 lead om ugen til 8.000 kr i tabt omsætning, har
        du tabt 32.000 kr om måneden. AI receptionist til 3.000 kr/md
        betaler sig 10× tilbage hvis den fanger bare HALVDELEN af de
        missede opkald.
      </Quote>

      <H2>Integration med dit eksisterende setup</H2>

      <P>
        En god AI receptionist plugger ind i din eksisterende stack — ikke
        det modsatte. Hvad du allerede har:
      </P>

      <UL>
        <LI>Google Kalender eller Outlook → AI booker direkte ind</LI>
        <LI>SMS via Twilio → AI sender bekræftelser automatisk</LI>
        <LI>CRM (HubSpot, Pipedrive, GoHighLevel) → Lead-data flyder ind</LI>
        <LI>Regnskab (Billy, e-conomic) → Faktura kan auto-genereres</LI>
        <LI>Telefon-nummer → Du beholder dit eget, AI sidder bag</LI>
      </UL>

      <P>
        Du behøver IKKE skifte system. AI'en sidder ovenpå det du allerede
        bruger.
      </P>

      <Callout title="Vil du have et konkret tilbud?">
        Send os et estimat af hvor mange opkald du får om ugen + din
        gennemsnitlige job-værdi. Vi laver en business case på 24 timer
        der viser om det giver mening for dit firma — eller om du skal
        spare pengene.
      </Callout>
    </Prose>
  );
}
