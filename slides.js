/* =====================================================================
   DIA'S VAN DE PRESENTATIE
   Dit bestand wordt gebruikt door live.html (live meekijken) én door
   index.html (dia's terugkijken). Pas je hier iets aan, dan verandert
   het op beide plekken.

   Per dia:
   - kicker  klein woord boven de titel
   - title   titel van de dia
   - who     wie deze dia presenteert (alleen zichtbaar voor de presentator)
   - note    spreektekst (alleen zichtbaar voor de presentator)
   - html    korte tekst onder de 3D-scène
   - scene   welke 3D-scène bovenin de telefoon staat (zie story3d.js)
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
  note: "Welkom! Wij zijn Aimée, David en Lauren. Voor de gemeenten Hillegom, Lisse, Teylingen en Noordwijk onderzochten we of aardwarmte een oplossing is om van het gas af te gaan. Bovenin je telefoon zie je steeds een 3D-beeld van waar we het over hebben. Je mag het ronddraaien.",
  html: `<p>Aimée Tolk, David van der Linden en Lauren Timmer</p>
<p class="small">Opdrachtgever: Lynn Baggen, warmtetransitie Hillegom, Lisse, Teylingen en Noordwijk</p>`
},
{
  scene: "net",
  kicker: "Het probleem",
  title: "Van het gas af, maar het stroomnet zit vol",
  who: "Lauren",
  note: "De gemeenten willen van het aardgas af. De makkelijkste oplossing lijkt een warmtepomp in elk huis, maar die draait op stroom. En het stroomnet zit in de Bollenstreek al vol: in Sassenheim en Hillegom kan er nu al niets meer bij. Bij Liander stonden in juni 7.300 huishoudens en kleine bedrijven op een wachtlijst.",
  html: `<div class="bignums"><div><b>7.300</b>huishoudens en kleine bedrijven op de wachtlijst bij Liander</div></div>
<ul><li>Sassenheim en Hillegom zitten nu al vol.</li><li>Warmtepompen maken het erger, juist op koude avonden.</li></ul>`
},
{
  scene: "vraag",
  kicker: "Onze hoofdvraag",
  title: "Is aardwarmte haalbaar voor de Bollenstreek?",
  who: "Lauren",
  note: "Daarom was onze hoofdvraag: in hoeverre is aardwarmte een haalbare oplossing voor bestaande woonwijken en bollenbedrijven? We keken naar drie kanten: kan het technisch, is het te betalen, en is het goed voor de regio?",
  html: `<p>Kan het <b>technisch</b>? Is het <b>economisch</b> te betalen? Is het <b>maatschappelijk</b> goed voor de regio?</p>`
},
{
  scene: "uitleg",
  img: "img/figuur1-doublet.png",
  kicker: "Zo werkt het",
  title: "Warm water van 2 kilometer diep",
  who: "Lauren",
  note: "Aardwarmte haalt warm water van ongeveer 2 kilometer diep. Je boort twee putten, een doublet. Uit de ene pomp je water van ongeveer 83 graden omhoog. Bovengronds geeft het zijn warmte af aan een warmtenet naar huizen en bedrijven. Het afgekoelde water gaat via de andere put terug de grond in en warmt daar weer op.",
  html: `<ul><li>Productieput pompt water van ± 83 °C omhoog.</li><li>Warmtewisselaar → warmtenet naar huizen en bollenbedrijven.</li><li>Afgekoeld water gaat terug de grond in.</li></ul>`
},
{
  scene: "draai",
  kicker: "Doe mee",
  title: "Draai het model op je telefoon",
  who: "Lauren",
  note: "Draai het model nu zelf rond op je telefoon. Sleep met je vinger om het te draaien en knijp om in te zoomen. Je ziet het warme water omhoog gaan en het koude water terug.",
  html: `<p>Sleep met je vinger over het model om te draaien, knijp om in te zoomen. Kijk waar het warme water vandaan komt.</p>`
},
{
  scene: "stroom",
  img: "img/figuur2-stroomvraag.png",
  kicker: "Netcongestie",
  title: "34 MW tegenover 4,9 MW",
  who: "Aimée",
  note: "Wat scheelt dat voor het stroomnet? Voor ons gebied met 16.200 woningen rekenden we het uit. Als iedereen een warmtepomp neemt, vraagt dat op een koude dag ongeveer 34 megawatt extra stroom. Met aardwarmte is het 4,3 tot 4,9 megawatt, want de warmte komt uit de grond en niet uit het stopcontact. Dat is ongeveer een zevende.",
  html: `<p>Extra stroom op een koude dag voor 16.200 woningen. Aardwarmte haalt de warmte uit de grond, niet uit het stopcontact: ongeveer een zevende.</p>`
},
{
  scene: "kaart",
  img: "img/figuur3-bollenstreek.png",
  kicker: "Gebiedsonderzoek",
  title: "De hele Bollenstreek",
  who: "Aimée",
  note: "Eerst keken we naar de hele regio. De Bollenstreek gebruikt ongeveer 2,4 miljoen gigajoule warmte per jaar. Op 2 kilometer en dieper liggen geschikte zandsteenlagen. Volgens de haalbaarheidsstudie zijn er vijf tot zes bronnen nodig, en dat klopte met onze eigen berekening.",
  html: `<div class="bignums row"><div><b>2,4 mln GJ</b>warmte per jaar</div><div><b>5 tot 6</b>bronnen nodig</div></div>`
},
{
  scene: "inzoom",
  img: "img/figuur4-ingezoomd.png",
  kicker: "Ingezoomd",
  title: "De Leeweg, Noordwijk en Noordwijkerhout",
  who: "Aimée",
  note: "Daarna zoomden we in op de eerste bron: de oude NAM-put aan de Leeweg. Daar is al geboord, dus er is veel bekend over de ondergrond. Noordwijk en Noordwijkerhout liggen het dichtst bij. Samen met 40 bollenbedrijven hebben ze 497.000 tot 631.000 gigajoule per jaar nodig. Daarvoor zijn twee bronnen nodig, en dat is precies wat de vergunning toestaat.",
  html: `<ul><li>Oude NAM-put: er is al geboord.</li><li>16.200 woningen + 40 bollenbedrijven.</li><li>Nodig: 2 bronnen van 20 MW.</li></ul>`
},
{
  type: "poll",
  scene: "poll",
  poll: "gas",
  kicker: "Doe mee",
  title: "Wat denk jij: is een warmtenet goedkoper dan gas?",
  who: "David",
  note: "Dan de kosten. Wat denken jullie: betaal je met een warmtenet minder dan nu met gas? Stem op je telefoon. (Wacht tot de meeste stemmen binnen zijn en lees de uitslag voor.)",
  options: ["Goedkoper dan gas", "Ongeveer even duur", "Duurder dan gas"],
  answer: 2,
  html: ``
},
{
  scene: "kosten",
  kicker: "Het antwoord",
  title: "Iets duurder dan gas",
  who: "David",
  note: "Het antwoord: een warmtenet is iets duurder. Met de korting die de gemeenten willen geven, het onweigerbaar aanbod, betaal je ongeveer 1.950 euro per jaar. Met gas is dat nu ongeveer 1.832 euro. En voor de gemeenten is het helemaal duur: één bron kost ongeveer 21 miljoen euro. Met de huidige subsidies is het niet rendabel, daarom vragen de gemeenten het Rijk om 300 tot 400 miljoen euro extra.",
  html: `<div class="pollsum" data-pollsum="gas"></div>
<ul><li>Warmtenet € 1.950 per jaar, gas € 1.832.</li><li>Eén bron kost ± € 21 miljoen.</li><li>Nu niet rendabel: de gemeenten vragen het Rijk € 300 tot 400 miljoen.</li></ul>`
},
{
  scene: "advies",
  kicker: "Ons advies",
  title: "Ja, maar stap voor stap",
  who: "David",
  note: "Ons antwoord op de hoofdvraag: technisch kan het, maatschappelijk is het wenselijk, met ongeveer 80 procent minder CO2 en veel minder druk op het stroomnet. Maar economisch lukt het alleen met steun van het Rijk. Ons advies: begin met één bron bij de Leeweg, maak bollenbedrijven vaste klanten omdat zij ook in de zomer warmte nodig hebben, en ga pas verder als het Rijk meebetaalt.",
  html: `<ul><li>Begin met één bron bij de Leeweg.</li><li>Maak bollenbedrijven vaste klanten.</li><li>Ga pas verder als het Rijk meebetaalt.</li></ul>`
},
{
  type: "end",
  scene: "einde",
  kicker: "Bedankt!",
  title: "Vragen?",
  who: "allen",
  note: "Dank jullie wel! Zijn er vragen? (Kies daarna op je telefoon 'Einde': dan gaan alle telefoons door naar onze site.)",
  html: `<p>Na de presentatie vind je op onze site het hele onderzoek, de poster en alle bronnen.</p>`
}
];
