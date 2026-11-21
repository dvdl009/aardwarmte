/* =====================================================================
   DIA'S VAN DE PRESENTATIE
   Dit bestand wordt gebruikt door live.html (live meekijken) én door
   index.html (dia's terugkijken). Pas je hier iets aan, dan verandert
   het op beide plekken.

   18 korte dia's, elk één punt. Reken op ± 25 seconden per dia (± 7,5 min).

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
{
  type: "cover",
  scene: "doublet",
  img: "img/figuur1-doublet.png",
  kicker: "Northgo College · O&O · klas V4",
  title: "Kan de Bollenstreek verwarmen met aardwarmte?",
  who: "David",
  note: "Welkom! Wij zijn Aimée, David en Lauren. Voor de gemeenten in de Bollenstreek zochten we uit of warmte uit de diepe ondergrond kan helpen om van het gas af te gaan. Bovenin je telefoon zie je steeds een 3D-beeld. Je mag het ronddraaien.",
  html: `<p>Aimée Tolk, David van der Linden en Lauren Timmer</p>
<p class="small">Voor de gemeenten Hillegom, Lisse, Teylingen en Noordwijk</p>`
},
{
  scene: "none",
  kicker: "Het probleem",
  title: "Het stroomnet zit vol",
  who: "Lauren",
  note: "De gemeenten willen van het aardgas af. De makkelijkste oplossing lijkt een warmtepomp in elk huis, maar die draait op stroom. En het stroomnet zit hier al vol: in juni stonden bij Liander 7.300 huishoudens en kleine bedrijven op een wachtlijst, soms voor drie jaar.",
  html: `<div class="bignums"><div><b>7.300</b>huishoudens en kleine bedrijven op een wachtlijst bij Liander (juni 2026)</div></div>
<p>In Sassenheim en Hillegom kan er nu al niets meer bij.</p>`
},
{
  scene: "none",
  kicker: "Het probleem",
  title: "Uitbreiden helpt maar even",
  who: "Lauren",
  note: "Liander gaat het station in Sassenheim tussen 2029 en 2031 verzwaren. Maar als alle woningen een warmtepomp nemen, zit het rond 2035 alweer vol. Alleen warmtepompen is dus geen oplossing.",
  html: `<ol class="tl"><li><b>Nu</b>Sassenheim en Hillegom zitten vol</li><li><b>2029–2031</b>Liander verzwaart station Sassenheim</li><li class="bad"><b>± 2035</b>Weer vol als iedereen een warmtepomp neemt</li></ol>`
},
{
  scene: "advies",
  kicker: "Onze hoofdvraag",
  title: "Is aardwarmte haalbaar voor de Bollenstreek?",
  who: "Lauren",
  note: "Daarom onderzochten we: is aardwarmte haalbaar voor bestaande woonwijken en bollenbedrijven? We keken naar drie kanten. Ons antwoord zie je al: technisch kan het, maatschappelijk is het goed, maar het geld is het probleem. In de rest van de presentatie laten we zien waarom.",
  html: `<ul class="verdicts"><li><b>Technisch</b><span>✓ haalbaar</span></li><li class="warn"><b>Economisch</b><span>! alleen met steun van het Rijk</span></li><li><b>Maatschappelijk</b><span>✓ wenselijk</span></li></ul>`
},
{
  scene: "volg",
  img: "img/figuur1-doublet.png",
  kicker: "Zo werkt het",
  title: "Warm water van 2 kilometer diep",
  who: "Lauren",
  note: "Volg de oranje druppel op je telefoon. Je boort twee putten, een doublet. Uit de ene pomp je water van ongeveer 83 graden omhoog. Bovengronds geeft het zijn warmte af aan een warmtenet naar huizen en kassen. Het afgekoelde water gaat via de andere put terug de grond in.",
  html: `<ul><li>Productieput pompt water van ± 83 °C omhoog.</li><li>Warmtewisselaar geeft de warmte aan een warmtenet.</li><li>Afgekoeld water gaat terug de grond in.</li></ul>`
},
{
  scene: "lagen",
  kicker: "De ondergrond",
  title: "Wat moet er onder de grond zitten?",
  who: "Aimée",
  note: "Niet overal kan dit. Je hebt vier dingen nodig. Het moet diep genoeg zijn: per kilometer wordt het ongeveer 30 graden warmer. Je hebt zandsteen nodig met holtes waar water door kan stromen. Daarboven een dichte laag kleisteen, als een deksel. En liefst geen breuken, want daar stroomt het water slecht langs.",
  html: `<ul><li><b>Diep genoeg:</b> ± 30 °C warmer per km.</li><li><b>Zandsteen:</b> holtes waar water door stroomt.</li><li><b>Deksel:</b> kleisteen erboven.</li><li><b>Geen grote breuken.</b></li></ul>`
},
{
  scene: "leeweg",
  kicker: "De ondergrond",
  title: "En onder de Leeweg?",
  who: "Aimée",
  note: "Bij de Leeweg in Noordwijk boorde de NAM in 1983 al een put tot bijna 3 kilometer. Daardoor weten we veel. Op 2,9 kilometer zit zandsteen met water van ongeveer 90 tot 100 graden, met kleisteen erboven. Wel zitten er twee breuken. Daarom moet er eerst seismisch onderzoek komen, zodat beide putten in hetzelfde blok uitkomen.",
  html: `<ul><li>Zandsteen op ± 2,9 km, ± 90–100 °C ✓</li><li>Kleisteen erboven ✓</li><li>2 breuken: eerst seismisch onderzoek !</li></ul>`
},
{
  scene: "stroom",
  img: "img/figuur2-stroomvraag.png",
  kicker: "Netcongestie",
  title: "± 7× minder stroom",
  who: "Lauren",
  note: "Wat scheelt het voor het stroomnet? Voor 16.200 woningen rekenden we het uit. Als iedereen een warmtepomp neemt, is dat op een koude dag ongeveer 34 megawatt extra. Met aardwarmte 4,3 tot 4,9 megawatt. Dat is ongeveer zeven keer minder.",
  html: `<div class="bignums row"><div><b>34 MW</b>warmtepompen</div><div><b>4,9 MW</b>aardwarmte</div></div>
<p class="small">Extra stroom op een koude dag, 16.200 woningen</p>`
},
{
  scene: "uitleg",
  kicker: "Netcongestie",
  title: "Waarom zo veel minder?",
  who: "Lauren",
  note: "Hoe kan dat? Een warmtepomp maakt de warmte met stroom: als het vriest krijg je voor 1 deel stroom maar 2,5 delen warmte. Bij aardwarmte zit de warmte al in het water. Je hebt alleen stroom nodig voor de pompen.",
  html: `<div class="vs"><div><b>Warmtepomp</b>Maakt warmte met stroom. Als het vriest: 1 deel stroom → 2,5 delen warmte.</div><div class="good"><b>Aardwarmte</b>De warmte zit al in het water. Stroom alleen voor de pomp.</div></div>`
},
{
  scene: "kaart",
  img: "img/figuur3-bollenstreek.png",
  kicker: "Gebiedsonderzoek",
  title: "Hoeveel warmte heeft de regio nodig?",
  who: "Aimée",
  note: "Eerst de hele Bollenstreek. Huizen, kassen en bedrijven gebruiken samen ongeveer 2,4 miljoen gigajoule warmte per jaar. Daarvoor wordt nu zo'n 80 miljoen kuub aardgas gestookt.",
  html: `<div class="bignums row"><div><b>2,4 mln GJ</b>warmte per jaar</div><div><b>80 mln m³</b>aardgas, nu</div></div>`
},
{
  scene: "kaart",
  kicker: "Gebiedsonderzoek",
  title: "Hoeveel bronnen zijn er nodig?",
  who: "Aimée",
  note: "Eén bron van 20 megawatt levert 360.000 tot 497.000 gigajoule per jaar. Deel je 2,4 miljoen daardoor, dan kom je op ongeveer 5 tot 7 bronnen. De haalbaarheidsstudie zegt 5 tot 6. Dat past, omdat niet iedereen aansluit.",
  html: `<ol class="steps"><li>Eén bron: 360.000–497.000 GJ per jaar</li><li>2,4 mln GJ ÷ één bron ≈ 5 tot 7</li><li>De studie zegt 5 tot 6 ✓</li></ol>`
},
{
  scene: "inzoom",
  img: "img/figuur4-ingezoomd.png",
  kicker: "Ingezoomd",
  title: "De eerste bron: de Leeweg",
  who: "Aimée",
  note: "Daarna zoomden we in op de eerste bron, aan de Leeweg. Noordwijk en Noordwijkerhout liggen het dichtst bij. Samen met 40 bollenbedrijven hebben ze 497.000 tot 631.000 gigajoule per jaar nodig. Daarvoor zijn twee bronnen nodig, precies wat de vergunning toestaat.",
  html: `<ul><li>Oude NAM-put: er is al geboord.</li><li>16.200 woningen + 40 bollenbedrijven.</li><li>Nodig: 2 bronnen van 20 MW.</li></ul>`
},
{
  type: "poll",
  scene: "poll",
  poll: "gas",
  kicker: "Doe mee",
  title: "Is een warmtenet goedkoper dan gas?",
  who: "David",
  note: "Dan de kosten. Wat denken jullie: betaal je met een warmtenet minder dan nu met gas? Stem op je telefoon. (Wacht tot de meeste stemmen binnen zijn.)",
  options: ["Goedkoper dan gas", "Ongeveer even duur", "Duurder dan gas"],
  answer: 2,
  html: ``
},
{
  scene: "kosten",
  kicker: "Het antwoord",
  title: "Iets duurder dan gas",
  who: "David",
  note: "Het antwoord: een warmtenet is iets duurder. Met de korting die de gemeenten willen geven betaal je ongeveer 1.950 euro per jaar. Met gas is dat nu ongeveer 1.832 euro.",
  html: `<div class="pollsum" data-pollsum="gas"></div>
<div class="bignums row"><div><b>€ 1.950</b>warmtenet per jaar</div><div><b>€ 1.832</b>gas per jaar</div></div>`
},
{
  scene: "kosten",
  kicker: "Wat kost het jou?",
  title: "± € 10 per maand meer",
  who: "David",
  note: "Wat betekent dat voor een huishouden? Met korting is het ongeveer 118 euro per jaar meer, zo'n 10 euro per maand. Zonder die korting, met het maximumtarief van de ACM, betaal je 2.221 euro: bijna 390 euro meer dan gas. Die korting is dus belangrijk.",
  html: `<div class="vs"><div class="good"><b>Met korting</b>€ 1.950: ± € 118 per jaar meer dan gas</div><div><b>Zonder korting</b>€ 2.221: ± € 389 per jaar meer</div></div>`
},
{
  scene: "inzoom",
  kicker: "Wat kost het de gemeenten?",
  title: "€ 21 miljoen per bron",
  who: "David",
  note: "Voor de gemeenten is het pas echt duur. Eén bron kost ongeveer 21 miljoen euro. Voor de twee bronnen bij de Leeweg is dat 43 miljoen, en dan ligt er nog geen meter leiding. Met de huidige subsidies is het niet rendabel. Daarom vragen de gemeenten het Rijk om 300 tot 400 miljoen euro extra.",
  html: `<ul><li>Leeweg, 2 bronnen: ± € 43 miljoen.</li><li>Nu niet rendabel.</li><li>Gemeenten vragen het Rijk € 300–400 miljoen.</li></ul>`
},
{
  scene: "advies",
  kicker: "Ons antwoord",
  title: "Ja, maar…",
  who: "David",
  note: "Dus: is aardwarmte haalbaar? Ja. Het kan technisch, en het scheelt het stroomnet enorm. Maar alleen als het Rijk meebetaalt. Ons advies: begin met één bron bij de Leeweg, maak bollenbedrijven vaste klanten omdat zij ook in de zomer warmte nodig hebben, en ga pas verder als het Rijk meebetaalt.",
  html: `<div class="vs"><div class="good"><b>Ja</b>Het kan, en het helpt het stroomnet.</div><div><b>Maar</b>Alleen met geld van het Rijk.</div></div>
<p class="small">Begin met één bron bij de Leeweg, met de bollenbedrijven als vaste klant.</p>`
},
{
  type: "end",
  scene: "doublet",
  kicker: "Bedankt!",
  title: "Lees verder op je telefoon",
  who: "allen",
  note: "Dank jullie wel! Je telefoon gaat zo naar onze site. Daar staan het hele verslag, de poster en alle bronnen. Zijn er nog vragen? (Kies daarna 'Einde' op de presentatortelefoon.)",
  html: `<ul><li>Het hele verslag</li><li>De poster</li><li>Alle 50 bronnen</li></ul>
<p class="small">dvdl009.github.io/aardwarmte</p>`
}
];
