/*
 *  Branchesider. Tilfoejet 4. sep 2026.
 *
 *  HVORFOR DE FINDES:
 *  Foer var hver eneste rute paa sitet brand-formet: /, /ydelser, /om,
 *  /cases, /blog. Sitet kunne kun rangere for ordet "CactAi". Ingen side
 *  matchede det en rengoeringsejer i Koege rent faktisk soeger paa. De
 *  fem fag vi saelger til, optraadte tilsammen én gang, i ét FAQ-svar.
 *
 *  Forsiden BLIVER bred, det er Enes' valg, og det er rigtigt: den er
 *  brandet. De her sider baerer til gengaeld det konkrete sprog, saa
 *  arbejdsdelingen er ren.
 *
 *  REGLER, samme som resten af sitet:
 *    - Ingen kanalnavne (Meta, Google, annoncer, AI) i overskrifter.
 *    - Ingen talgaranti. Ingen priser.
 *    - Kundens eget sprog. En klinik faar patienter, ikke opgaver.
 *    - Ingen tankestreg.
 */

export type Branche = {
  slug: string;
  navn: string;
  navnBestemt: string;
  metaTitle: string;
  metaDesc: string;
  h1: { foer: string; fremhaevet: string; efter: string };
  lead: string;
  /** Det de selv ville skrive i soegefeltet. Staar som rigtig tekst paa siden. */
  soegeord: string[];
  smerter: { titel: string; tekst: string }[];
  systemet: { titel: string; tekst: string }[];
  vaerdi: string;
  lokalt: string;
  ikkeForDig: string[];
  /** Konkret forloeb. Svarer paa "hvad sker der hvis jeg siger ja", som
   *  ellers er det stoerste ubesvarede spoergsmaal foer en underskrift. */
  foerste30: { naar: string; hvad: string }[];
};

export const BRANCHER: Branche[] = [
  {
    slug: "rengoering",
    navn: "rengøringsfirma",
    navnBestemt: "rengøringsfirmaet",
    metaTitle: "Flere opgaver til dit rengøringsfirma på Sjælland",
    metaDesc:
      "Sådan får et lokalt rengøringsfirma flere faste aftaler og flytterengøringer, uden at jagte dem selv. Fast månedspris, ingen binding.",
    h1: {
      foer: "Flere faste aftaler til dit",
      fremhaevet: "rengøringsfirma",
      efter: "på Sjælland.",
    },
    lead:
      "De fleste rengøringsfirmaer lever af mund-til-mund og et par gamle kunder. Det holder, indtil en af dem opsiger, og så er der pludselig et hul der skal fyldes i næste måned. Her er hvordan du får en jævn strøm ind i stedet.",
    soegeord: [
      "rengøring København",
      "flytterengøring Roskilde",
      "erhvervsrengøring Køge",
      "hovedrengøring Greve",
      "fast rengøring privat",
    ],
    smerter: [
      {
        titel: "Én opsigelse rykker hele måneden",
        tekst:
          "Når du har fem faste kunder, er hver enkelt tyve procent af omsætningen. Siger én op, mangler der penge med det samme, og du er tilbage i at ringe rundt og spørge om nogen kender nogen. Det er ikke en strategi, det er held.",
      },
      {
        titel: "Flytterengøringer kommer i bølger",
        tekst:
          "De ligger tungt omkring den første og sidste i måneden, og næsten ingenting derimellem. Du kan ikke planlægge folk efter det, og du siger nej til opgaver i spidsbelastningen som du gerne ville have taget.",
      },
      {
        titel: "De ringer til tre og tager den der svarer",
        tekst:
          "En der skal have flytterengøring til på fredag, ringer ikke bare til dig. Han ringer til tre firmaer, og han tager det første ordentlige svar. Står du med en klud i hånden, taber du opgaven uden nogensinde at vide at han ringede.",
      },
    ],
    systemet: [
      {
        titel: "Vi finder dem der leder efter rengøring lige nu",
        tekst:
          "Ikke alle i dit postnummer, kun dem der aktivt søger efter en løsning i denne uge. Det er dem der er lette at lukke, fordi de allerede har besluttet at de skal bruge nogen.",
      },
      {
        titel: "Hver henvendelse får svar på under et minut",
        tekst:
          "Døgnet rundt, også når du står på en opgave og ikke kan tage telefonen. Den der svarer først, vinder som regel opgaven, og det gælder i din branche mere end i de fleste andre.",
      },
      {
        titel: "Du får navn, opgave og nummer på SMS",
        tekst:
          "I samme sekund henvendelsen lander. Så kan du ringe tilbage mens de stadig sidder med telefonen i hånden, i stedet for om aftenen hvor de allerede har booket en anden.",
      },
      {
        titel: "Erhverv og privat holdes adskilt",
        tekst:
          "En kontorbygning og en flyttelejlighed er to vidt forskellige salg. Vi kan skrue på hvilken slags opgaver der kommer ind, så du får flere af den type der faktisk er penge i for dig.",
      },
    ],
    vaerdi:
      "Regnestykket i rengøring er godt, fordi kunderne bliver hængende. En fast erhvervsaftale på et kontor er sjældent en engangsforretning, den løber typisk i år. Får du bare én ekstra af dem, har den betalt for systemet mange gange, længe før du har tænkt over det igen. Det er derfor vi regner baglæns fra hvad en fast kunde er værd for dig, inden vi overhovedet taler om hvad det koster.",
    lokalt:
      "Rengøring er et lokalt fag. Ingen kører fra Helsingør til Køge for at gøre en trappeopgang ren. Derfor arbejder vi indenfor det område du faktisk dækker, hvad enten det er Storkøbenhavn, Roskilde, Køge, Greve, Solrød eller noget helt sjette. På mødet kigger vi konkret på hvor mange der søger efter rengøring i netop dit område hver måned, og hvad de firmaer der allerede står der, gør.",
    foerste30: [
      { naar: "Uge 1", hvad: "Vi taler sammen en time, hvor jeg får fat i dine priser, dit område, hvilke opgaver du helst vil have, og hvad du siger nej til. Derefter bygger jeg. Du skal ikke gøre mere." },
      { naar: "Uge 2", hvad: "Systemet går i luften. De første henvendelser begynder at komme ind, og du får dem på SMS med navn, opgave og nummer. Vi ser sammen på om det er den rigtige slags opgaver." },
      { naar: "Uge 3 og 4", hvad: "Vi justerer efter det der faktisk kommer ind. Får du for mange flytterengøringer og for få faste aftaler, skruer vi på det. Det er her forskellen bliver lavet, ikke i opsætningen." },
      { naar: "Derefter", hvad: "Et kvarter om måneden, hvor vi kigger på tallene og retter til. Resten passer sig selv." },
    ],
    ikkeForDig: [
      "Du er fuldt booket og har ikke plads til flere opgaver.",
      "Du leder efter den billigste løsning på markedet.",
      "Du skal bruge kunder i denne uge. Det her tager uger, ikke dage.",
    ],
  },
  {
    slug: "tag",
    navn: "tagfirma",
    navnBestemt: "tagfirmaet",
    metaTitle: "Flere tagopgaver til dit firma på Sjælland",
    metaDesc:
      "Sådan får en lokal tagdækker flere tagopgaver ind, uden at være afhængig af sæson og tilfældigheder. Fast månedspris, ingen binding.",
    h1: {
      foer: "Flere tagopgaver til dit",
      fremhaevet: "tagfirma",
      efter: "på Sjælland.",
    },
    lead:
      "Tagopgaver er store, sjældne og kommer sjældent på det tidspunkt du kunne bruge dem. Så kommer der en storm, og telefonen ringer i fjorten dage. Her er hvordan du får noget mere jævnt ind imellem.",
    soegeord: [
      "tagdækker København",
      "nyt tag pris",
      "utæt tag akut",
      "tagrenovering Roskilde",
      "tagudskiftning Sjælland",
    ],
    smerter: [
      {
        titel: "Vejret bestemmer din omsætning",
        tekst:
          "Efter en storm kan du ikke følge med. Resten af året skal du selv opsøge arbejdet. Det er svært at ansætte og svært at planlægge, når du ikke ved om næste kvartal er dobbelt eller halvt.",
      },
      {
        titel: "Et utæt tag er akut, og han ringer til flere",
        tekst:
          "Han har vand i loftet lige nu. Han ringer ikke og lægger en besked og venter. Han ringer videre til den næste indtil nogen tager den. Er du oppe på et stillads, er den opgave væk.",
      },
      {
        titel: "Store opgaver kræver tillid du ikke kan nå at bygge",
        tekst:
          "Ingen giver 300.000 kroner til et firma de aldrig har hørt om. Bliver du først fundet i det øjeblik der er brug for dig, konkurrerer du kun på pris. Bliver du fundet før, konkurrerer du på at være den de allerede kender.",
      },
    ],
    systemet: [
      {
        titel: "Vi finder dem der leder efter en tagmand nu",
        tekst:
          "Både dem med et akut problem og dem der er begyndt at undersøge en udskiftning. To vidt forskellige samtaler, men begge er værd at få først.",
      },
      {
        titel: "Akutte henvendelser får svar med det samme",
        tekst:
          "Under et minut, også aften og weekend. I dit fag er det ofte den eneste forskel mellem at få opgaven og at høre om den bagefter.",
      },
      {
        titel: "Dem der ikke er klar endnu, bliver ikke glemt",
        tekst:
          "En tagudskiftning tager tid at beslutte. Systemet vender automatisk tilbage til dem der spurgte for to måneder siden, i stedet for at de ender hos den der ringede sidst.",
      },
      {
        titel: "Du bliver den der står der når nogen søger",
        tekst:
          "Din profil og dine anmeldelser passes, så du er synlig i dit område og ikke kun i det øjeblik du betaler for at være det.",
      },
    ],
    vaerdi:
      "Tag er det fag hvor regnestykket er allernemmest at regne. En enkelt tagudskiftning ligger typisk mellem hundrede og fire hundrede tusinde kroner. Får du bare én ekstra om året som du ellers ikke havde fået, har den betalt for systemet mange gange om. Det er derfor vi starter med at regne baglæns fra hvad en opgave er værd hos dig, i stedet for at tale om pris først.",
    lokalt:
      "Ingen henter en tagdækker fra den anden ende af landet. Kunden søger efter en lokal, og han vælger tit den nærmeste der virker seriøs. Vi arbejder derfor kun i det område du reelt kører ud i, om det er Storkøbenhavn, Nordsjælland, Roskilde, Køge eller Greve. På mødet ser vi konkret hvor mange der søger efter tagarbejde i dit område, og hvad de firmaer der allerede er synlige, gør.",
    foerste30: [
      { naar: "Uge 1", hvad: "En time, hvor jeg får fat i hvilke opgaver du vil have ind, hvor langt du kører ud, og hvad en gennemsnitlig opgave er værd hos dig. Derefter bygger jeg." },
      { naar: "Uge 2", hvad: "Systemet går i luften. Både de akutte og dem der er ved at undersøge en udskiftning begynder at lande hos dig, og du får dem med det samme." },
      { naar: "Uge 3 og 4", hvad: "Vi justerer. I dit fag er det især afvejningen mellem akutte småopgaver og de store udskiftninger der skal rammes rigtigt, og det kan kun ses på rigtige tal." },
      { naar: "Derefter", hvad: "Et kvarter om måneden. Og en snak inden stormsæsonen, hvor der skal skrues op." },
    ],
    ikkeForDig: [
      "Du har fuldt booket kalender resten af året.",
      "Du vil kun konkurrere på at være billigst.",
      "Du kan ikke tage imod en henvendelse inden for et døgn.",
    ],
  },
  {
    slug: "vvs",
    navn: "VVS-firma",
    navnBestemt: "VVS-firmaet",
    metaTitle: "Flere opgaver til dit VVS-firma på Sjælland",
    metaDesc:
      "Sådan får et lokalt VVS-firma flere opgaver ind, uden at miste dem mens man står med hovedet under en vask. Fast månedspris, ingen binding.",
    h1: {
      foer: "Flere opgaver til dit",
      fremhaevet: "VVS-firma",
      efter: "på Sjælland.",
    },
    lead:
      "Du mister ikke opgaver fordi du er dårlig til dit arbejde. Du mister dem fordi telefonen ringer mens du ligger under en vask, og han der ringer, ringer videre. Her er hvordan du stopper det.",
    soegeord: [
      "vvs København",
      "akut vvs Roskilde",
      "vvs Greve",
      "varmepumpe installation Sjælland",
      "badeværelse renovering pris",
    ],
    smerter: [
      {
        titel: "Du kan ikke tage telefonen når du arbejder",
        tekst:
          "Og det er lige præcis der de ringer. Midt på dagen, midt i en opgave. Du ringer tilbage klokken seks, og til den tid har han fået en anden ud.",
      },
      {
        titel: "Akutte opkald går til den der svarer først",
        tekst:
          "Et sprunget rør venter ikke. Han ringer til tre numre på to minutter og tager det første der bliver taget. Der er ingen anden runde.",
      },
      {
        titel: "De store opgaver kommer for tilfældigt",
        tekst:
          "Et badeværelse eller en varmepumpe er den slags arbejde der betaler for en hel måned. Men de kommer når de kommer, og du kan ikke planlægge en forretning på det.",
      },
    ],
    systemet: [
      {
        titel: "Vi finder dem der har brug for en VVS'er nu",
        tekst:
          "Både de akutte og dem der er ved at undersøge en større opgave. Du får fat i begge, og du får fat i dem først.",
      },
      {
        titel: "Alle opkald og henvendelser får svar under et minut",
        tekst:
          "Også når du står med hænderne i en installation. Han får en kvittering med det samme, i stedet for stilhed, og så ringer han ikke videre til den næste.",
      },
      {
        titel: "Du får beskeden på SMS, ikke i en indbakke",
        tekst:
          "Navn, opgave og nummer, i samme sekund. Så kan du tage stilling mellem to opgaver, i stedet for at finde ud af det om aftenen.",
      },
      {
        titel: "De store opgaver bliver fulgt op automatisk",
        tekst:
          "En badeværelsesrenovering besluttes ikke på en eftermiddag. Systemet vender tilbage til dem der spurgte, så de ikke bare falder ud af din hukommelse.",
      },
    ],
    vaerdi:
      "VVS har den fordel at spændet er stort. Et akut udkald er nogle tusinde, et badeværelse eller en varmepumpe er mange gange det. Systemet kan skrues så det trækker flere af den type opgaver ind der er værd at køre efter. På mødet regner vi konkret på hvad en gennemsnitlig opgave er værd hos dig, og hvor mange ekstra der skal til før det giver mening. Hænger det ikke sammen, siger jeg det.",
    lokalt:
      "Ingen ringer efter en VVS'er halvfems kilometer væk, slet ikke når det haster. Derfor holder vi os til det område du faktisk dækker, om det er Storkøbenhavn, Roskilde, Køge, Greve eller Solrød. Vi kigger konkret på hvor mange der søger efter VVS-hjælp i dit område, og hvad de firmaer der allerede står øverst, gør anderledes end dig.",
    foerste30: [
      { naar: "Uge 1", hvad: "En time, hvor jeg får fat i hvad du helst vil lave, hvad du helst vil undgå, og hvor hurtigt du realistisk kan svare. Derefter bygger jeg." },
      { naar: "Uge 2", hvad: "Systemet går i luften. Henvendelserne lander på din telefon i samme sekund, også mens du står med hænderne i en installation." },
      { naar: "Uge 3 og 4", hvad: "Vi justerer efter hvad der kommer ind. Vil du have færre akutte småting og flere badeværelser, skruer vi på det. Det kræver rigtige tal, ikke gæt." },
      { naar: "Derefter", hvad: "Et kvarter om måneden, hvor vi ser på hvad der virker og retter til." },
    ],
    ikkeForDig: [
      "Du har mere arbejde end du kan nå i forvejen.",
      "Du kan ikke ringe tilbage inden for et døgn.",
      "Du vil helst ikke involveres og bare have en regning hver måned.",
    ],
  },
  {
    slug: "klinik",
    navn: "klinik",
    navnBestemt: "klinikken",
    metaTitle: "Flere patienter til din klinik på Sjælland",
    metaDesc:
      "Sådan får en lokal klinik fyldt kalenderen med patienter, uden at bruge aftenerne på markedsføring. Fast månedspris, ingen binding.",
    h1: {
      foer: "Flere patienter til din",
      fremhaevet: "klinik",
      efter: "på Sjælland.",
    },
    lead:
      "En tom tid i kalenderen kommer aldrig tilbage. Den time er væk, uanset hvor god du er til det du laver. Her er hvordan du får dem fyldt op med patienter der rent faktisk møder op.",
    soegeord: [
      "fysioterapeut København",
      "kiropraktor Roskilde",
      "klinik Greve",
      "behandling Køge",
      "tid i dag klinik",
    ],
    smerter: [
      {
        titel: "Tomme tider kan ikke hentes ind igen",
        tekst:
          "En ubooket time om tirsdagen er tabt omsætning, permanent. Du kan ikke sælge den bagefter, og du betaler for lokalet uanset hvad.",
      },
      {
        titel: "De søger, finder en anden, og du hører aldrig om det",
        tekst:
          "Han sidder med ondt i ryggen og søger efter en behandler i sit område. Han booker hos den der er lettest at komme til, og du får aldrig at vide at han var to klik fra dig.",
      },
      {
        titel: "Du er behandler, ikke markedsfører",
        tekst:
          "Du er dygtig til det du er uddannet til. Ingen har lært dig at fylde en kalender, og du har hverken tid eller lyst til at sidde med det om aftenen.",
      },
    ],
    systemet: [
      {
        titel: "Vi finder dem der søger behandling i dit område",
        tekst:
          "Mennesker der har et konkret problem og leder efter en der kan hjælpe, ikke bare tilfældige der scroller forbi.",
      },
      {
        titel: "Hver henvendelse får svar med det samme",
        tekst:
          "Også når du sidder med en patient og ikke kan tage telefonen. Den der får svar først, booker som regel der.",
      },
      {
        titel: "Dem der ikke booker med det samme, bliver husket",
        tekst:
          "Mange undersøger først og beslutter sig senere. Systemet vender automatisk tilbage, så de lander hos dig og ikke hos den næste på listen.",
      },
      {
        titel: "Du bliver den de finder, og den de tør vælge",
        tekst:
          "Din profil og dine anmeldelser passes løbende. I sundhed vejer det tungere end i noget andet fag, fordi folk skal turde lægge sig i hænderne på dig.",
      },
    ],
    vaerdi:
      "Det interessante i en klinik er ikke den enkelte tid, det er forløbet. En patient der kommer fem gange, er noget helt andet værd end et enkelt besøg, og mange bliver hængende i årevis. Derfor regner vi baglæns fra hvad en ny patient er værd over et helt forløb, ikke fra hvad den første tid koster. Det ændrer regnestykket fuldstændigt, og som regel til din fordel.",
    lokalt:
      "Folk søger behandling tæt på hvor de bor eller arbejder. Derfor arbejder vi i det område du reelt trækker patienter fra, om det er Storkøbenhavn, Roskilde, Køge, Greve eller Solrød. På mødet kigger vi på hvor mange der søger efter din type behandling i dit område hver måned, og hvad de klinikker der allerede er synlige, gør.",
    foerste30: [
      { naar: "Uge 1", hvad: "En time, hvor jeg får fat i hvilke behandlinger du vil have flere af, hvor patienterne kommer fra, og hvor mange tider du kan fylde. Derefter bygger jeg." },
      { naar: "Uge 2", hvad: "Systemet går i luften. De første henvendelser kommer ind og får svar med det samme, også mens du sidder med en patient." },
      { naar: "Uge 3 og 4", hvad: "Vi justerer efter hvad der lander. Kommer der for mange forespørgsler på noget du ikke vil have mere af, skruer vi på det." },
      { naar: "Derefter", hvad: "Et kvarter om måneden. Resten kører." },
    ],
    ikkeForDig: [
      "Din kalender er fuld måneder frem.",
      "Du har ikke kapacitet til at tage nye patienter ind.",
      "Du leder efter den billigste løsning frem for den der virker.",
    ],
  },
];

export const getBranche = (slug: string) =>
  BRANCHER.find((b) => b.slug === slug);
