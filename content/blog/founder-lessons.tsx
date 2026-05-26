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

export default function FounderLessonsPost() {
  return (
    <Prose>
      <Lead>
        Jeg er 19, dansker, og driver et marketing-bureau for håndværkere
        fra et lille kontor i Greve. Her er den ærlige historie om hvorfor
        jeg startede CactAi — og 5 ting jeg har lært i mit første år.
      </Lead>

      <H2>Hvorfor jeg startede</H2>

      <P>
        Jeg blev træt af at se danske håndværker-firmaer betale 8.000-15.000
        kr/md til bureauer der ikke leverede. Min familie kender mange selvstændige
        — VVS'ere, malere, små rengøringsfirmaer. De fortalte alle samme
        historie: "Vi har prøvet marketing. Det virker ikke for os."
      </P>

      <P>
        Det stemte ikke. Marketing virker for ALLE brancher — også
        håndværkere. Problemet var ikke marketing. Problemet var, at
        bureauerne ikke havde noget reelt incitament til at gøre arbejdet
        ordentligt. De fik betalt forud, hver måned, uanset om kunden
        fik nye jobs eller ej.
      </P>

      <P>
        Da jeg læste Alex Hormozis bog "$100M Offers", faldt brikkerne
        på plads. Han skrev: <Em>"Hvis du kan eliminere risikoen for
          kunden, har du allerede solgt."</Em> Det inspirerede mig til at
        bygge CactAi omkring pay-per-show modellen — du betaler kun når
        kunden faktisk møder op.
      </P>

      <Quote attribution="Alex Hormozi, $100M Offers">
        Hvis du kan eliminere risikoen for kunden, har du allerede solgt.
      </Quote>

      <H2>Lektion 1: Cold calling virker — men ikke som du tror</H2>

      <P>
        Jeg startede med at ringe 200 håndværkere om dagen fundet via
        Google Maps. Konvertering: 0,5%. Det var 1 møde per dag, hvilket
        lød fint på papiret.
      </P>

      <P>
        Men de møder var skidt-kvalitet. De fleste var ikke beslutningstagere.
        Halvdelen var folk der svarede uden rigtig at vide hvem jeg var.
        Mit close-rate var elendigt.
      </P>

      <P>
        Det jeg lærte: kvalitet over kvantitet. Bedre at lave 30 målrettede
        opkald om dagen til folk jeg har researchet (firmastørrelse, type,
        areal) end 200 til en bred liste. Min nuværende konvertering er
        4-7% på warm outreach — 10× bedre med 7× færre opkald.
      </P>

      <H2>Lektion 2: Folk køber af mennesker, ikke logos</H2>

      <P>
        Mit første website var pænt, professionelt og fuldstændigt
        upersonligt. Det havde stock-billeder af "AI tech" og vage løfter
        om "innovative løsninger". Det fik mig 0 kunder på 3 måneder.
      </P>

      <P>
        Da jeg tilføjede min historie — at jeg var 19, solo, ny på markedet
        — steg conversion-raten. Folk responderede især på, at jeg var ÆRLIG
        om mine begrænsninger: ingen big team, ingen 10-årig track record,
        ingen falske testimonials.
      </P>

      <Callout title="Counter-intuitiv lære">
        At være TYDELIG om hvad du IKKE er, gør at folk stoler på det
        du ER. Mit site siger ÉN ting: vi laver ÉT ting godt
        (lead-generation for håndværkere). Det filterer alle de forkerte
        leads væk — og lander de RIGTIGE.
      </Callout>

      <H2>Lektion 3: Sig nej til 80% af leads</H2>

      <P>
        I min første måned sagde jeg JA til hver eneste lead der ringede.
        Resultat: 4 dårligt fittede kunder der drænede min tid på
        support-spørgsmål, ad-hoc requests og frustration.
      </P>

      <P>
        Nu siger jeg nej til ~75% af de leads der booker møder. Hvis de
        ikke er håndværkere. Hvis deres job-værdi er for lav til at PPSA
        giver mening. Hvis de "shopper rundt" hos 5 bureauer samtidig.
        Hvis de spørger om jeg kan "lave det billigere".
      </P>

      <P>
        Det føles vildt at sige nej til betalende kunder. Men kvaliteten
        på de tilbageværende deals er meget højere — og jeg får tid til
        at servicere dem ordentligt.
      </P>

      <H2>Lektion 4: Skriftlig garanti er det stærkeste salgsargument</H2>

      <P>
        Når jeg pitcher PPSA og siger "vi har 14-dages garanti — 5 fremmødte
        møder eller fuld refund af setup", er det altid det moment hvor
        prospekten læner sig frem. Det er som om alle deres tidligere
        bureau-skuffelser ophobes i ét lille øjeblik, og garantien er
        antidoten.
      </P>

      <P>
        Jeg har aldrig været nødt til at refundere endnu. Men bare det
        at <Em>tilbyde</Em> det fjerner 80% af friktion på lukke-mødet. Folk
        køber sikkerhed mere end de køber produkter.
      </P>

      <H2>Lektion 5: HHX + YouTube er undervurderet</H2>

      <P>
        Jeg læser HHX sideløbende med at jeg driver CactAi. Det giver mig
        den formelle business-uddannelse — afsætning, virksomhedsøkonomi,
        international handel. Det praktiske lærer jeg fra YouTube, mentorships
        og bøger.
      </P>

      <P>
        Skolen lærer mig hvordan ting <Em>burde</Em> fungere ifølge teorien.
        YouTube lærer mig hvordan ting <Em>faktisk</Em> fungerer i 2026.
        Begge dele er nødvendige. De fleste 19-årige bureau-foundere
        skipper enten skolen (mangler fundament) eller skipper det praktiske
        (føler de skal vente på de "rigtige kvalifikationer"). Begge er fejl.
      </P>

      <Callout title="Næste skridt for CactAi">
        Vi er på 1 betalende kunde lige nu (Solrød Rengøring). Målet for
        2026 er 12 kunder fordelt på 4-5 brancher. Vi tager kun 1 kunde
        per by — så hvis du er i Greve, Roskilde, Køge eller København
        Syd og vil have eksklusivitet, så skynd dig.
      </Callout>

      <P>
        Hvis du vil følge med i CactAi's rejse, hold øje med denne blog.
        Jeg skriver om hvad jeg lærer undervejs — også når jeg fejler.
      </P>
    </Prose>
  );
}
