/* =====================================================================
   DIA'S VAN DE PRESENTATIE
   Dit bestand wordt gebruikt door live.html (live meekijken) én door
   index.html (dia's terugkijken). Pas je hier iets aan, dan verandert
   het op beide plekken.

   De presentatie volgt de samenvatting van het definitieve verslag,
   met vooraf een korte uitleg van aardwarmte. 19 dia's, ± 30 seconden
   per dia (± 10 minuten).

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
  title: "Warmte uit de diepte",
  who: "David",
  note: "Welkom! Wij zijn David, Aimée en Lauren. Voor de gemeenten Hillegom, Lisse, Teylingen en Noordwijk onderzochten we of aardwarmte een oplossing is voor bestaande woonwijken en bollenbedrijven in de Bollenstreek. Op je telefoon zie je steeds een 3D-beeld dat je mag ronddraaien. Heb je geen telefoon? Dan kun je ook gewoon op de poster meekijken.",
  html: `<p>Aardwarmte voor bestaande woonwijken en bollenbedrijven in de Bollenstreek</p>
<p class="small">Aimée Tolk, David van der Linden en Lauren Timmer · opdrachtgever Lynn Baggen</p>`
},

/* ---------- het probleem ---------- */
{
  scene: "weegschaal",
  kicker: "Het probleem",
  title: "Van het gas af, maar het stroomnet zit vol",
  who: "Lauren",
  note: "De gemeenten willen dat woningen en bollenbedrijven stoppen met aardgas, zodat er minder CO2 wordt uitgestoten. De meest gebruikte vervanger is de warmtepomp, maar die werkt op stroom. En het stroomnet in de Bollenstreek is nu al te vol. Daarom zochten wij naar een manier om te verwarmen zonder het net verder te belasten.",
  html: `<ul><li>Woningen en bollenbedrijven moeten van het gas af.</li><li>Het stroomnet in de regio zit vol.</li><li>Er moeten juist meer woningen bij.</li></ul>`
},
{
  scene: "vraag",
  kicker: "Onze hoofdvraag",
  title: "Is aardwarmte haalbaar voor de Bollenstreek?",
  who: "Lauren",
  note: "Onze hoofdvraag was: in hoeverre is aardwarmte een technisch, economisch en maatschappelijk haalbare oplossing voor bestaande woonwijken en bollenbedrijven in de Bollenstreek, rekening houdend met het volle stroomnet? Aan het eind komen we terug bij deze drie zuilen.",
  html: `<ul class="verdicts"><li><b>Technisch</b><span>kan het?</span></li><li><b>Economisch</b><span>is het te betalen?</span></li><li><b>Maatschappelijk</b><span>is het goed voor de regio?</span></li></ul>`
},

/* ---------- korte uitleg aardwarmte ---------- */
{
  scene: "lagen",
  kicker: "Wat is aardwarmte?",
  title: "Hoe dieper, hoe warmer",
  who: "Lauren",
  note: "Eerst kort: wat is aardwarmte? Aardwarmte is warmte van dieper dan 500 meter. Hoe dieper, hoe warmer: in Nederland ongeveer 30 graden per kilometer. Op 2 tot 3 kilometer is het water dus 70 tot 90 graden. Dat water zit niet in een meer, maar in de kleine holtes van poreus gesteente, zoals zandsteen. Daarboven moet een dichte afsluitende laag zoals kleisteen liggen, als een deksel.",
  html: `<ul><li>± 30 °C warmer per kilometer.</li><li>Op 2 tot 3 km: water van 70 tot 90 °C.</li><li>Het water zit in de holtes van zandsteen, onder een deksel van kleisteen.</li></ul>`
},
{
  scene: "volg",
  img: "img/figuur1-doublet.png",
  kicker: "Wat is aardwarmte?",
  title: "Zo werkt een doublet",
  who: "Lauren",
  note: "Om die warmte te gebruiken, boor je twee putten. Samen heet dat een doublet. Eerst wordt het warme water via de productieput omhoog gepompt. Daarna staat bovengronds een warmtewisselaar. Daarin geeft het bronwater zijn warmte af aan het water van het warmtenet, en dat brengt de warmte via geïsoleerde leidingen naar huizen en bedrijven. Het bronwater en het water van het warmtenet raken elkaar dus niet. Het afgekoelde bronwater gaat via de injectieput terug naar dezelfde laag, waar het langzaam weer opwarmt. Onderin liggen de putten ongeveer 1,5 kilometer uit elkaar, zodat het koude water de plek waar je warm water oppompt niet afkoelt.",
  html: `<ol class="steps"><li>Warm water omhoog uit de productieput.</li><li>Warmtewisselaar: de warmte gaat naar het warmtenet.</li><li>Afgekoeld water terug via de injectieput, ± 1,5 km verderop.</li></ol>`
},
{
  scene: "none",
  kicker: "Onze aanpak",
  title: "Eerst de hele regio, dan ingezoomd",
  who: "David",
  note: "We begonnen met een bezoek aan de TU Delft, waar we uitleg kregen over aardwarmte en zagen hoe zij het op de campus gebruiken. Daarna deden we online onderzoek en konden we vragen stellen op het forum van de TU Delft. Het gebiedsonderzoek deden we in twee stappen: eerst de hele Bollenstreek, en daarna, zoals de opdracht vroeg, ingezoomd op een kleiner gebied.",
  html: `<figure class="fig"><img src="img/tudelft.jpg" alt="Aardwarmte-installatie van de TU Delft op de campus"></figure>
<ol class="steps"><li>Bezoek aan de TU Delft.</li><li>De hele Bollenstreek.</li><li>Ingezoomd: de eerste bron aan de Leeweg.</li></ol>`
},

/* ---------- de hele Bollenstreek ---------- */
{
  scene: "nieuwbouw",
  kicker: "De hele Bollenstreek",
  title: "Er komt veel nieuwbouw bij",
  who: "Aimée",
  note: "In de hele Bollenstreek wordt veel gebouwd. Tot en met 2035 zijn in de vier gemeenten ongeveer 6.600 nieuwe woningen gepland, veel daarvan vlak bij de Leeweg en in Voorhout. Nieuwe woningen krijgen geen gasaansluiting meer. Zonder warmtenet krijgen ze dus allemaal een warmtepomp, en dat drukt nog harder op het volle stroomnet. Een nieuw huis is wel beter geïsoleerd: het vraagt ongeveer 22 gigajoule per jaar, tegen 26 tot 34 voor een bestaand huis. Alle nieuwbouw samen vraagt ongeveer een vijfde van een bron extra.",
  html: `<div class="bignums row"><div><b>± 6.600</b>nieuwe woningen tot en met 2035</div><div><b>± 1/5</b>bron extra nodig</div></div>
<p>Zonder gasaansluiting: zonder warmtenet allemaal een warmtepomp.</p>`
},
{
  scene: "bronnen",
  kicker: "De hele Bollenstreek",
  title: "4 tot 5 bronnen in plaats van 5 tot 6",
  who: "Aimée",
  note: "De haalbaarheidsstudie rekent voor de hele regio met 2,4 miljoen gigajoule per jaar en vijf tot zes aardwarmtebronnen. Die studie gaat er wel van uit dat álle woningen aansluiten. Wij rekenden met 80 procent, zoals in het aanbod van de gemeenten, en met het echte gasverbruik per woonplaats. En we telden alles mee: woningen, bollenbedrijven, grote bedrijven zoals hotels en zwembaden, en de nieuwbouw. Dan kom je op 1,8 tot 2,3 miljoen gigajoule, en dus op vier tot vijf bronnen.",
  html: `<div class="bignums row"><div><b>4–5</b>bronnen in ons onderzoek, met bedrijven en nieuwbouw</div><div><b>5–6</b>in de studie, als álle woningen aansluiten</div></div>`
},
{
  scene: "regionet",
  img: "img/figuur5-regionaal-net.png",
  kicker: "De hele Bollenstreek",
  title: "Eén warmtenet voor de hele regio",
  who: "Aimée",
  note: "Dan bedachten we zelf een vergelijking: krijgt elke gemeente een eigen net, of komt er één net door de hele regio? Bij een net per gemeente heb je vijf tot zeven bronnen nodig. Hillegom en Lisse hebben elk maar ongeveer een halve bron nodig, maar je kunt geen halve bron boren. In één regionaal net vullen de bronnen elkaar aan. Daardoor zijn er één tot twee bronnen minder nodig, en wordt het ongeveer 150 tot 550 euro per woning goedkoper, ook al worden de leidingen langer.",
  html: `<div class="vs"><div><b>Net per gemeente</b>5–7 bronnen<br>€ 2.570–3.380 per woning</div><div class="good"><b>Eén regionaal net</b>4–5 bronnen<br>€ 2.420–2.830 per woning</div></div>`
},

/* ---------- ingezoomd ---------- */
{
  scene: "inzoom",
  img: "img/figuur6-ingezoomd.png",
  kicker: "Ingezoomd",
  title: "De eerste bron: de Leeweg",
  who: "Aimée",
  note: "Daarna zoomden we in op de eerste bron van het regionale net. Die is gepland bij de oude NAM-locatie aan de Leeweg in Noordwijk, waar al eens is geboord. Op ongeveer 2,9 kilometer diepte ligt een laag zandsteen met water van 90 tot 100 graden, afgedekt door kleisteen. De warmte gaat naar Noordwijk en Noordwijkerhout. Dat zijn ongeveer 18.200 woningen, 40 bollenbedrijven en een aantal grote bedrijven.",
  html: `<ul><li>Oude NAM-locatie in Noordwijk: er is al geboord.</li><li>Op ± 2,9 km: zandsteen met water van 90 tot 100 °C, onder kleisteen.</li><li>Afnemers: Noordwijk en Noordwijkerhout.</li></ul>`
},
{
  scene: "maand",
  img: "img/figuur7-vraag-per-maand.png",
  kicker: "Ingezoomd",
  title: "Eén bron levert 60 tot 69 procent",
  who: "Aimée",
  note: "Noordwijk en Noordwijkerhout vragen met de bollenbedrijven, de grote bedrijven zoals hotels en de nieuwbouw samen 648.000 tot 782.000 gigajoule per jaar. Per maand bekeken levert één bron van 20 megawatt daarvan 60 tot 69 procent. In juli en augustus vragen de bollenbedrijven ruim drie keer zoveel warmte als alle woningen samen, zodat de bron ook in de zomer draait. De tweede bron uit de vergunning wordt nuttig zodra de grote bedrijven en de nieuwbouw aansluiten: dan draait hij 2.800 tot 3.700 uur per jaar. Zonder hen zou hij maar 1.200 tot 2.600 uur draaien. Daarna kan Voorhout aansluiten, dat het dichtst bij de Leeweg ligt.",
  html: `<div class="bignums row"><div><b>60–69%</b>van de warmte uit één bron</div><div><b>jul–aug</b>bollenbedrijven vullen de zomer</div></div>
<p class="small">Tweede bron: 2.800–3.700 uur per jaar, zodra de grote bedrijven en de nieuwbouw aansluiten.</p>`
},

/* ---------- technisch, economisch, maatschappelijk ---------- */
{
  scene: "leeweg",
  kicker: "Technisch",
  title: "Het kan, met twee risico's",
  who: "David",
  note: "Technisch is aardwarmte hier haalbaar, maar er zijn wel twee risico's. Het eerste zit diep in de grond. Daar lopen twee breuklijnen, en daarom moet er eerst seismisch onderzoek komen. Dan weten we hoe de ondergrond erbij ligt voordat er geboord wordt. Het tweede risico zit vlak onder de straat. De leidingen komen in een natte, slappe bodem te liggen, en deels langs de duinen. Dat maakt het aanleggen lastiger.",
  html: `<ul class="verdicts"><li><b>Technisch</b><span>✓ haalbaar</span></li></ul>
<ul><li>Twee breuklijnen in de ondergrond: eerst seismisch onderzoek.</li><li>Natte, slappe bodem voor de leidingen.</li></ul>`
},
{
  type: "poll",
  scene: "poll",
  poll: "gas",
  kicker: "Economisch · doe mee",
  title: "Is een warmtenet goedkoper dan gas?",
  who: "David",
  note: "Dan het geld. Wat denken jullie: betaal je met een warmtenet minder dan nu met gas? Stem op je telefoon. (Wacht tot de meeste stemmen binnen zijn.)",
  options: ["Goedkoper dan gas", "Ongeveer even duur", "Duurder dan gas"],
  answer: 2,
  html: ``
},
{
  scene: "kosten",
  kicker: "Economisch",
  title: "Nu nog niet rendabel",
  who: "David",
  note: "Een bewoner betaalt met het aanbod van de gemeenten ongeveer 1.950 euro per jaar, zo'n 120 euro meer dan met gas. Voor de gemeenten is het veel duurder: de investering loopt in de honderden miljoenen euro's. Op dit moment is het project niet rendabel. Daarom vragen de gemeenten het Rijk om 300 tot 400 miljoen euro extra steun.",
  html: `<div class="pollsum" data-pollsum="gas"></div>
<div class="bignums row"><div><b>+ € 120</b>per jaar voor een bewoner</div><div><b>€ 300–400 mln</b>extra steun gevraagd aan het Rijk</div></div>`
},
{
  scene: "stroom",
  img: "img/figuur2-stroomvraag.png",
  kicker: "Maatschappelijk",
  title: "Veel minder CO2 en veel minder druk op het net",
  who: "Lauren",
  note: "Maatschappelijk levert aardwarmte veel op. Ongeveer 80 procent minder CO2-uitstoot dan verwarmen met aardgas. En volgens Liander tot 111 megavoltampère minder belasting van het stroomnet dan wanneer alle woningen een warmtepomp nemen. Voor ons ingezoomde gebied rekenden we het zelf uit: met warmtepompen op een koude dag wordt 34 megawatt extra stroom verbruikt, met aardwarmte maar 4,3 tot 4,9.",
  html: `<div class="bignums row"><div><b>± 80%</b>minder CO2 dan aardgas</div><div><b>111 MVA</b>minder netbelasting (Liander)</div></div>
<p class="small">Ingezoomd: 34 MW met warmtepompen, 4,3–4,9 MW met aardwarmte</p>`
},
{
  type: "poll",
  scene: "poll",
  poll: "zon",
  kicker: "Maatschappelijk · doe mee",
  title: "Zonnepanelen en warmtepomp in de winter",
  who: "Lauren",
  note: "Veel mensen hebben al zonnepanelen. Dus dachten wij: kan je warmtepomp niet gewoon op je eigen zonnestroom draaien, met een thuisbatterij erbij? We zijn benieuwd wat jullie denken. Hoeveel van de stroom die een warmtepomp in de winter vraagt, leveren zonnepanelen volgens jullie? Stem op je telefoon. Daarna laten we het antwoord zien.",
  options: ["Bijna alles", "Ongeveer de helft", "Maar een vijfde"],
  answer: 2,
  html: `<p>Veel mensen hebben al zonnepanelen. Kan een warmtepomp in de winter op eigen zonnestroom draaien, met een thuisbatterij?</p>`
},
{
  scene: "zon",
  img: "img/figuur3-zon-warmtepomp.png",
  kicker: "Maatschappelijk",
  title: "In de winter maar een vijfde",
  who: "Lauren",
  note: "Zonnepanelen met een thuisbatterij lossen dit niet op. In de winter, als het net het drukst is, leveren tien zonnepanelen maar een vijfde van de stroom die een warmtepomp vraagt. Een thuisbatterij bewaart stroom voor een dag, niet van de zomer tot de winter. Daarom blijft er in de winter veel stroom uit het net nodig, en dat is precies het moment waarop het net het zwaarst belast wordt.",
  html: `<div class="pollsum" data-pollsum="zon"></div>
<div class="bignums row"><div><b>1.510 kWh</b>warmtepomp in de winter</div><div><b>296 kWh</b>van 10 zonnepanelen</div></div>`
},

/* ---------- advies ---------- */
{
  scene: "advies",
  kicker: "Ons advies",
  title: "Eén regionaal warmtenet, stap voor stap",
  who: "David",
  note: "Ons advies aan de gemeenten: ga door met aardwarmte, als één regionaal warmtenet in plaats van een net per gemeente, maar wel stap voor stap. Begin met de bron aan de Leeweg en maak de bollenbedrijven vaste klanten, omdat zij ook in de zomer warmte afnemen. Sluit nieuwe wijken meteen aan, en boor de tweede bron als de grote bedrijven en de nieuwbouw aansluiten. Breid daarna uit naar de andere kernen, maar alleen als het Rijk extra steun en garanties geeft.",
  html: `<ol class="steps"><li>Begin met de bron aan de Leeweg.</li><li>Maak bollenbedrijven vaste klanten.</li><li>Sluit nieuwbouw aan, dan de tweede bron.</li><li>Breid uit met steun en garanties van het Rijk.</li></ol>`
},
{
  type: "end",
  scene: "doublet",
  kicker: "Bedankt!",
  title: "Lees verder op je telefoon",
  who: "allen",
  note: "Dank jullie wel! Je telefoon gaat zo naar onze site. Daar staan het hele verslag, de poster en alle bronnen. Zijn er nog vragen? (Kies daarna 'Einde' op de presentatortelefoon.)",
  html: `<ul><li>Het hele verslag, bladzijde voor bladzijde</li><li>De posters</li><li>Alle bronnen</li></ul>
<p class="small">dvdl009.github.io/aardwarmte</p>`
}
];
