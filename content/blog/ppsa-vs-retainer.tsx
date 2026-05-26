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

export default function PpsaVsRetainerPost() {
  return (
    <Prose>
      <Lead>
        Der er to fundamentalt forskellige måder at betale et marketing-bureau
        på. Den ene gør bureauet rigt uanset om du får kunder. Den anden gør
        det modsatte. Her er forskellen — uden bullshit.
      </Lead>

      <H2>Sådan virker en månedsretainer</H2>

      <P>
        Klassisk retainer: du betaler 8.000-25.000 kr/md til et bureau, og
        de "kører dine ads". Du har ingen kontrol over hvad de bruger
        tiden på. Du får en PDF-rapport én gang om måneden med tal du ikke
        helt forstår, og som regel ender det med "vi har optimeret kampagnen
        — næste måned bliver bedre."
      </P>

      <P>
        Problemet er ikke at bureauer er onde. Problemet er <Em>incitamentet</Em>.
        Når du har betalt forud, har bureauet ingen reel grund til at
        levere — de har allerede pengene. Deres mål er at fastholde dig
        som kunde længe nok til at det er rentabelt, ikke at levere
        så meget at du bliver vild med dem.
      </P>

      <Callout title="Real talk">
        Jeg har talt med håndværkere der har brugt 9.000 kr/md i 11 måneder
        hos et københavnsk bureau. Resultat: 4 møder. Det er 24.750 kr per
        møde — før annonceforbrug. Det er ikke en marketing-strategi, det
        er en abonnementsfælde.
      </Callout>

      <H2>Sådan virker pay-per-show (PPSA)</H2>

      <P>
        PPSA står for "Pay Per Show Appointment" — du betaler kun når en
        kvalificeret kunde faktisk møder op. Møder de ikke op? Du betaler
        0 kr. Booker vi en lead der ikke passer din målgruppe? 0 kr.
      </P>

      <P>
        Modellen er enkel: vi laver ads, screener leads telefonisk, og
        booker kun de der vil møde op. Du betaler en setup-fee én gang
        (5.000-7.500 kr) plus per fremmødt møde (500-4.500 kr afhængigt
        af job-værdi). Plus ad-spend direkte til Meta — det går aldrig
        gennem os.
      </P>

      <H3>Hvorfor det her er bedre for ALLE</H3>

      <UL>
        <LI>
          <Strong>For dig:</Strong> Du kan kun tabe setup-fee, og vi
          refunderer den hvis vi ikke leverer 5 fremmødte på 14 dage.
        </LI>
        <LI>
          <Strong>For os:</Strong> Vi tjener kun penge når vi faktisk
          præsterer. Det tvinger os til at sortere skraldet fra og kun
          sende dig folk der seriøst overvejer dit produkt.
        </LI>
        <LI>
          <Strong>For algoritmen:</Strong> Vi har incitament til at slå
          PAUSE på ads der ikke konverterer — i stedet for at lade dem
          køre fordi det "ser ud af noget" på rapporten.
        </LI>
      </UL>

      <H2>Den ærlige sammenligning</H2>

      <P>
        Begge modeller har deres sted. Her er hvornår hver giver mening.
      </P>

      <H3>Retainer giver mening når...</H3>

      <UL>
        <LI>
          Du har et brand-building behov (gentagne visninger, awareness,
          ikke direct response).
        </LI>
        <LI>
          Du sælger noget med lang sales cycle (B2B SaaS, enterprise
          deals, ikke håndværker-jobs).
        </LI>
        <LI>
          Du har in-house marketing der skal koordineres med bureauet på
          ugentlig basis.
        </LI>
      </UL>

      <H3>PPSA giver mening når...</H3>

      <UL>
        <LI>
          Du sælger en service med høj job-værdi (5.000+ kr per opgave).
        </LI>
        <LI>Du har kapacitet til at tage flere kunder ind — det nytter
          ikke at få 10 nye leads hvis du ikke kan nå dem.
        </LI>
        <LI>
          Du er træt af at betale for "indsats" og vil betale for
          resultater.
        </LI>
      </UL>

      <Quote attribution="Ahmet, ejer af Solrød Rengøring">
        Det første jeg tænkte var "det her er for godt til at være sandt".
        Det andet jeg tænkte efter to uger var "okay, hvorfor gør INGEN
        ANDRE det her?"
      </Quote>

      <H2>Hvad det her betyder for dig konkret</H2>

      <P>
        Hvis du er håndværker i Danmark med en gennemsnitlig job-værdi
        over 5.000 kr og kapacitet til 5-10 ekstra møder/md, er PPSA
        matematisk overlegen. Du betaler kun for resultater. Du kan ikke
        tabe mere end setup-fee. Vi har samme incitament som dig.
      </P>

      <P>
        Hvis du er enterprise-SaaS med 12-måneders sales cycles og brand
        som primær KPI, så er en retainer-bureau formentlig bedre for
        dig — og vi er ikke det rette match. Det er fair.
      </P>

      <Callout title="Næste skridt">
        Vil du regne konkret på hvad PPSA ville koste dig i din branche?
        Book et 20-min strategi-møde — vi tager dine tal og giver dig et
        ærligt svar. Også hvis svaret er "PPSA passer ikke for dig".
      </Callout>
    </Prose>
  );
}
