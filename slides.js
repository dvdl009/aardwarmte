/* =====================================================================
   DIA'S VAN DE PRESENTATIE
   Dit bestand wordt gebruikt door live.html (live meekijken) én door
   index.html (dia's terugkijken). Pas je hier iets aan, dan verandert
   het op beide plekken.

   20 korte dia's in 7 stappen, dezelfde 7 stappen als op de poster.
   Het nummer in de kicker ("Stap 3") is het nummer op de poster, zodat
   mensen zonder telefoon op de poster kunnen meelezen.
   Reken op ± 30 seconden per dia (± 10 minuten).

   Per dia:
   - kicker  klein woord boven de titel
   - title   titel van de dia
   - who     wie deze dia presenteert (alleen zichtbaar voor de presentator)
   - note    spreektekst (alleen zichtbaar voor de presentator)
   - html    korte tekst onder de 3D-scène
   - scene   welke 3D-scène bovenin de telefoon staat (zie story3d.js);
             "none" = geen 3D, alleen tekst
   - img     afbeelding voor de site en voor telefoons zonder 3D
   - type    "cover" (eerste dia), "poll" (stemmen), "end" (laatste dia).
             Leeg = gewone dia.
   ===================================================================== */
window.DIAS = [
/* ---------- opening ---------- */
{
  type: "cover",
  scene: "doublet",
  img: "img/figuur1-doublet.png",
  kicker: "Northgo College · O&O · klas V4",
  title: "Kan de Bollenstreek verwarmen met aardwarmte?",
  who: "David",
  note: "Welkom! Wij zijn Aimée, David en Lauren. Voor de gemeenten Hillegom, Lisse, Teylingen en Noordwijk zochten we uit of warmte uit de diepe ondergrond kan helpen om van het gas af te gaan. Ons verhaal heeft zeven stappen. Die staan ook op de poster: heb je geen telefoon, dan kun je daar meelezen. Op je telefoon zie je steeds een 3D-beeld dat je mag ronddraaien.",
  html: `<p>Aimée Tolk, David van der Linden en Lauren Timmer</p>
<p class="small">Voor de gemeenten Hillegom, Lisse, Teylingen en Noordwijk · volg mee op de poster in 7 stappen</p>`
},

/* ---------- stap 1: het probleem ---------- */
{
  scene: "net",
  kicker: "Stap 1 · Het probleem",
  title: "Van het gas af, maar het stroomnet zit vol",
  who: "Lauren",
  note: "Bijna alle huizen hier stoken nu op aardgas, met een cv-ketel. De gemeenten willen daarvan af. De makkelijkste oplossing lijkt een warmtepomp in elk huis, maar die draait op stroom. En het stroomnet zit al vol: bij Liander stonden in juni 7.300 huishoudens en kleine bedrijven op een wachtlijst voor een stroomaansluiting. In Hillegom en Sassenheim is het nu al het ergst.",
  html: `<div class="bignums"><div><b>7.300</b>huishoudens en kleine bedrijven op een wachtlijst bij Liander (juni 2026)</div></div>
<p>Een warmtepomp in elk huis vraagt juist nog méér stroom.</p>`
},
{
  scene: "vraag",
  kicker: "Stap 1 · Onze hoofdvraag",
  title: "Is aardwarmte haalbaar voor de Bollenstreek?",
  who: "Lauren",
  note: "Daarom was onze hoofdvraag: is aardwarmte haalbaar voor bestaande woonwijken en bollenbedrijven in de Bollenstreek, nu het stroomnet vol zit? We keken naar drie kanten: technisch, economisch en maatschappelijk. Aan het eind komen we terug bij deze drie zuilen.",
  html: `<ul class="verdicts"><li><b>Technisch</b><span>kan het?</span></li><li><b>Economisch</b><span>is het te betalen?</span></li><li><b>Maatschappelijk</b><span>is het goed voor de regio?</span></li></ul>`
},

/* ---------- stap 2: zo werkt het ---------- */
{
  scene: "volg",
  img: "img/figuur1-doublet.png",
  kicker: "Stap 2 · Zo werkt aardwarmte",
  title: "Warm water van 2 kilometer diep",
  who: "Lauren",
  note: "Volg de oranje druppel op je telefoon. Je boort twee putten: samen heet dat een doublet. Uit de ene pomp je water van ongeveer 83 graden omhoog. Bovengronds geeft het zijn warmte af aan een warmtenet van 70 graden, naar huizen en bollenbedrijven. Het afgekoelde water, ongeveer 45 graden, gaat via de andere put terug de grond in en warmt daar weer op.",
  html: `<ul><li>Water van ± 83 °C omhoog uit ± 2 km diep.</li><li>Warmtenet van 70 °C naar huizen en bollenbedrijven.</li><li>Afgekoeld water (± 45 °C) terug de grond in.</li></ul>`
},
{
  scene: "lagen",
  kicker: "Stap 2 · De ondergrond",
  title: "Wat moet er onder de grond zitten?",
  who: "Lauren",
  note: "Niet overal kan dit. Je hebt vier dingen nodig. Het moet diep genoeg zijn: per kilometer wordt het ongeveer 30 graden warmer. Je hebt zandsteen nodig met holtes waar water door kan stromen. Daarboven een dichte laag kleisteen, als een deksel. En liefst geen grote breuken. In de Bollenstreek is de ondergrond op 2 kilometer en dieper geschikt.",
  html: `<ul><li><b>Diep genoeg:</b> ± 30 °C warmer per km.</li><li><b>Zandsteen:</b> holtes waar water door stroomt.</li><li><b>Deksel:</b> kleisteen erboven.</li><li><b>Geen grote breuken.</b></li></ul>`
},

/* ---------- stap 3: het stroomnet ---------- */
{
  scene: "stroom",
  img: "img/figuur2-stroomvraag.png",
  kicker: "Stap 3 · Het stroomnet",
  title: "± 7× minder stroom",
  who: "Lauren",
  note: "Wat scheelt dat voor het stroomnet? We rekenden het uit voor de 16.200 woningen in Noordwijk en Noordwijkerhout die zouden aansluiten. Als die allemaal een warmtepomp nemen, is dat op een koude dag ongeveer 34 megawatt extra stroom. Met aardwarmte is het 4,3 tot 4,9 megawatt, ongeveer zeven keer minder. Dat komt doordat een warmtepomp de warmte met stroom maakt, terwijl bij aardwarmte de warmte al in het water zit. Je hebt alleen stroom nodig voor de pompen.",
  html: `<div class="bignums row"><div><b>34 MW</b>warmtepompen</div><div><b>4,3–4,9 MW</b>aardwarmte</div></div>
<p class="small">Extra stroom op een koude dag, ± 16.200 woningen in Noordwijk en Noordwijkerhout</p>`
},
{
  type: "poll",
  scene: "poll",
  poll: "zon",
  kicker: "Stap 3 · Doe mee",
  title: "Zonnepanelen + thuisbatterij: genoeg voor een warmtepomp in de winter?",
  who: "Lauren",
  note: "Maar veel mensen hebben al zonnepanelen. Kun je je warmtepomp dan niet gewoon op je eigen zonnestroom laten draaien, met een thuisbatterij? Wat denken jullie: hoeveel van de stroom voor de warmtepomp leveren de panelen in de winter? Stem op je telefoon. (Wacht tot de meeste stemmen binnen zijn.)",
  options: ["Bijna alles", "Ongeveer de helft", "Maar een vijfde"],
  answer: 2,
  html: ``
},
{
  scene: "zon",
  img: "img/figuur3-zon-warmtepomp.png",
  kicker: "Stap 3 · Het antwoord",
  title: "In de winter maar een vijfde",
  who: "Lauren",
  note: "We rekenden het per maand uit voor één huis in Noordwijk met tien zonnepanelen. Van november tot en met februari vraagt de warmtepomp ongeveer 1.500 kilowattuur, en leveren de panelen er maar 300: een vijfde. In de zomer is er juist een overschot. Een thuisbatterij slaat maar 4 tot 8 kilowattuur op, genoeg voor een dag, niet om zomerstroom tot de winter te bewaren. Zonnepanelen lossen het winterprobleem dus niet op.",
  html: `<div class="pollsum" data-pollsum="zon"></div>
<div class="bignums row"><div><b>1.510 kWh</b>warmtepomp in de winter</div><div><b>296 kWh</b>van 10 zonnepanelen</div></div>
<p class="small">Een thuisbatterij (4–8 kWh) bewaart stroom voor een dag, niet van zomer tot winter.</p>`
},

/* ---------- stap 4: de hele regio ---------- */
{
  scene: "kaart",
  img: "img/figuur4-bollenstreek.png",
  kicker: "Stap 4 · De hele regio",
  title: "Hoeveel bronnen zijn er nodig?",
  who: "Aimée",
  note: "Dan de hele Bollenstreek. De haalbaarheidsstudie rekent met vijf tot zes bronnen, maar telt ook grote bedrijven mee. Wij rekenden zelf, met het echte gasverbruik per woonplaats van het CBS en de bollenvelden in de regio. Eén bron van 20 megawatt levert ongeveer 497.000 gigajoule per jaar. Voor de woningen en de bollenbedrijven kom je dan op drie tot vier bronnen.",
  html: `<div class="bignums row"><div><b>3–4</b>bronnen voor woningen en bollenbedrijven</div><div><b>5–6</b>in de studie, met grote bedrijven erbij</div></div>
<p class="small">Eigen berekening met het gasverbruik per woonplaats</p>`
},
{
  scene: "regionet",
  img: "img/figuur5-regionaal-net.png",
  kicker: "Stap 4 · De hele regio",
  title: "Eén net, of een net per gemeente?",
  who: "Aimée",
  note: "Dan de vraag: krijgt elke gemeente een eigen net, of komt er één net door de hele regio? Bij een net per gemeente heb je vijf tot zes bronnen nodig, want je kunt geen halve bron boren: Hillegom en Lisse hebben er elk maar een halve nodig. Die bronnen draaien dan maar voor de helft. In één regionaal net vullen de bronnen elkaar aan: drie tot vier zijn genoeg en die worden voor zo'n 90 procent gebruikt. De leidingen zijn wel langer, maar per woning is één net toch 200 tot 600 euro goedkoper.",
  html: `<div class="vs"><div><b>Per gemeente</b>5–6 bronnen<br>53–61% gebruikt<br>€ 2.860–3.310 per woning</div><div class="good"><b>Eén net</b>3–4 bronnen<br>± 90% gebruikt<br>€ 2.240–2.690 per woning</div></div>
<p class="small">Bronnen en hoofdleiding, met bollenbedrijven. Leidingen hemelsbreed, dus een ondergrens.</p>`
},

/* ---------- stap 5: ingezoomd op de Leeweg ---------- */
{
  scene: "inzoom",
  img: "img/figuur6-ingezoomd.png",
  kicker: "Stap 5 · Ingezoomd",
  title: "De eerste bron: de Leeweg",
  who: "Aimée",
  note: "De opdracht vroeg ook om in te zoomen op een kleiner gebied. Wij kozen de eerste bron van het regionale net: de Leeweg in Noordwijk, met Noordwijk en Noordwijkerhout als afnemers. Daar boorde de NAM in 1983 al een put tot bijna 3 kilometer, dus we weten veel over de ondergrond. Het terrein is vrij, want de oude gasput is in 2025 weggehaald, en de minister heeft al besloten over vier aardwarmteboringen op deze plek. Wel zitten er twee breuken in de ondergrond, dus eerst moet er seismisch onderzoek komen.",
  html: `<ul><li>Al geboord in 1983: veel bekend over de bodem.</li><li>Terrein vrij en er liggen al plannen.</li><li>Twee breuken: eerst seismisch onderzoek.</li></ul>`
},
{
  scene: "maand",
  img: "img/figuur7-vraag-per-maand.png",
  kicker: "Stap 5 · Ingezoomd",
  title: "Is één bron genoeg?",
  who: "Aimée",
  note: "Op basis van het jaartotaal heb je voor Noordwijk en Noordwijkerhout twee bronnen nodig. Maar we keken ook per maand. In de winter is één bron te klein, dat deel komt uit hulpwarmte. In juli en augustus vragen de bollenbedrijven bijna vier keer zoveel warmte als alle woningen samen, voor het drogen en bewaren van bollen. Zo blijft de bron in de zomer draaien. Alleen in mei en juni is het rustig. Opgeteld levert één bron 71 tot 83 procent van alle warmte. Een tweede bron draait maar 1.200 tot 2.600 uur per jaar. Die is pas nuttig als er meer afnemers bijkomen, zoals Voorhout, dat het dichtst bij de Leeweg ligt.",
  html: `<div class="bignums row"><div><b>71–83%</b>van de warmte uit één bron</div><div><b>jul–aug</b>bollenbedrijven vullen de zomer</div></div>
<p class="small">Tweede bron pas als Voorhout en andere kernen aansluiten.</p>`
},
{
  scene: "lagen",
  kicker: "Stap 5 · Lange termijn",
  title: "En als de bron op is?",
  who: "Aimée",
  note: "Het koude water dat terug de grond in gaat, koelt de laag langzaam af. Wij schatten dat die koude zone na 30 jaar een straal heeft van 500 tot 1.200 meter. Daarom wordt een bron meestal 30 tot 35 jaar gebruikt. Daarna kun je vanaf hetzelfde terrein een nieuw doublet boren, in een andere richting, naar een deel van de laag dat nog warm is. Het warmtenet zelf gaat 30 tot 50 jaar mee en kan dan gewoon warmte van de nieuwe bron gebruiken.",
  html: `<ol class="steps"><li>Koude zone na 30 jaar: straal ± 500–1.200 m.</li><li>Bron gaat ± 30–35 jaar mee.</li><li>Daarna: nieuw doublet vanaf hetzelfde terrein, andere richting.</li></ol>`
},

/* ---------- stap 6: kosten ---------- */
{
  type: "poll",
  scene: "poll",
  poll: "gas",
  kicker: "Stap 6 · Doe mee",
  title: "Is een warmtenet goedkoper dan gas?",
  who: "David",
  note: "Dan de kosten. Wat denken jullie: betaal je met een warmtenet minder dan nu met gas? Stem op je telefoon. (Wacht tot de meeste stemmen binnen zijn.)",
  options: ["Goedkoper dan gas", "Ongeveer even duur", "Duurder dan gas"],
  answer: 2,
  html: ``
},
{
  scene: "kosten",
  kicker: "Stap 6 · Het antwoord",
  title: "Iets duurder dan gas",
  who: "David",
  note: "Het antwoord: een warmtenet is iets duurder. Met de korting die de gemeenten willen geven, het onweigerbaar aanbod, betaal je ongeveer 1.950 euro per jaar. Met gas is dat nu ongeveer 1.832 euro. Dat is zo'n 120 euro per jaar meer, ongeveer 10 euro per maand. Zonder die korting is het bijna 390 euro meer. Wel betaal je met gas ook nog onderhoud en een nieuwe cv-ketel, en als de gasprijs stijgt, wordt gas duurder en het warmtenet straks niet meer.",
  html: `<div class="pollsum" data-pollsum="gas"></div>
<div class="bignums row"><div><b>€ 1.950</b>warmtenet per jaar, met korting</div><div><b>€ 1.832</b>gas per jaar</div></div>
<p class="small">± € 120 per jaar meer · zonder korting ± € 390 meer</p>`
},
{
  scene: "regionet",
  kicker: "Stap 6 · Wat kost het de regio?",
  title: "€ 21 miljoen per bron",
  who: "David",
  note: "Voor de gemeenten is het pas echt duur. Eén bron kost ongeveer 21 miljoen euro, en dan ligt er nog geen warmtenet. Voor één regionaal net kosten de bronnen en de hoofdleiding samen minstens 106 tot 127 miljoen euro. Met de huidige subsidies is het niet rendabel. Daarom vragen de gemeenten het Rijk om 300 tot 400 miljoen euro extra. De bollenbedrijven helpen wel: doordat de bron ook in de zomer draait, verkoop je met dezelfde investering 38 procent meer warmte.",
  html: `<ul><li>Eén bron: ± € 21 miljoen, zonder warmtenet.</li><li>Regionaal net: bronnen + hoofdleiding ≥ € 106–127 miljoen.</li><li>Nu niet rendabel: gemeenten vragen het Rijk € 300–400 miljoen.</li></ul>`
},

/* ---------- stap 7: advies ---------- */
{
  scene: "advies",
  kicker: "Stap 7 · Ons antwoord",
  title: "Ja, als één regionaal net, en met steun van het Rijk",
  who: "David",
  note: "Terug naar de drie zuilen. Technisch kan het: de ondergrond is geschikt en drie tot vier bronnen zijn genoeg. Maatschappelijk is het goed: ongeveer 80 procent minder CO2 en veel minder druk op het stroomnet. Maar economisch lukt het alleen met steun van het Rijk.",
  html: `<ul class="verdicts"><li><b>Technisch</b><span>✓ haalbaar</span></li><li class="warn"><b>Economisch</b><span>! alleen met steun van het Rijk</span></li><li><b>Maatschappelijk</b><span>✓ ± 80% minder CO2, minder druk op het net</span></li></ul>`
},
{
  scene: "inzoom",
  kicker: "Stap 7 · Ons advies",
  title: "Begin klein, groei samen",
  who: "David",
  note: "Ons advies aan de gemeenten: begin met één bron aan de Leeweg, voor Noordwijk, Noordwijkerhout en de bollenbedrijven, en doe eerst seismisch onderzoek. Sluit daarna Voorhout aan en boor pas dan de tweede bron. Groei zo stap voor stap naar één regionaal net met drie tot vier bronnen, maar alleen als het Rijk meebetaalt. Maak de bollenbedrijven de eerste vaste klanten.",
  html: `<ol class="steps"><li>Eén bron aan de Leeweg, eerst seismisch onderzoek.</li><li>Voorhout aansluiten, dan pas de tweede bron.</li><li>Groeien naar één regionaal net met 3–4 bronnen, alleen met steun van het Rijk.</li></ol>`
},
{
  scene: "advies",
  kicker: "Stap 7 · Ons advies",
  title: "Is dat niet te riskant?",
  who: "David",
  note: "Aardwarmte is een groot risico: een boring kan tegenvallen en het kost veel geld. Maar de andere opties hebben ook risico's. Een warmtepomp in elk huis kost zeven keer zoveel stroom, en het net zit al vol. Zonnepanelen met een batterij lossen de winter niet op. Een hybride warmtepomp gebruikt nog steeds gas. En niets doen betekent dat de CO2 blijft. De risico's van aardwarmte kun je kleiner maken: begin met één bron, doe eerst seismisch onderzoek, en de RNES-garantie van het Rijk betaalt mee als een boring mislukt.",
  html: `<ul class="verdicts"><li class="warn"><b>Warmtepomp in elk huis</b><span>7× meer stroom, net zit vol</span></li><li class="warn"><b>Zon + batterij</b><span>lost de winter niet op</span></li><li class="warn"><b>Hybride of niets doen</b><span>nog steeds gas en CO2</span></li><li><b>Aardwarmte</b><span>risico te verkleinen ↓</span></li></ul>
<p class="small">Eerst één bron · eerst seismisch onderzoek · RNES-garantie bij een mislukte boring</p>`
},
{
  type: "end",
  scene: "doublet",
  kicker: "Bedankt!",
  title: "Lees verder op je telefoon",
  who: "allen",
  note: "Dank jullie wel! Je telefoon gaat zo naar onze site. Daar staan het verhaal in zeven stappen, het hele verslag, de posters en alle bronnen. Zijn er nog vragen? (Kies daarna 'Einde' op de presentatortelefoon.)",
  html: `<ul><li>Het verhaal in 7 stappen</li><li>Het hele verslag en de posters</li><li>Alle bronnen</li></ul>
<p class="small">dvdl009.github.io/aardwarmte</p>`
}
];
