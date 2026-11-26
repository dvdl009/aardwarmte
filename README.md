# Warmte uit de Diepte

Onderzoek naar aardwarmte in de Bollenstreek. O&O, klas V4, Northgo College Noordwijk.
Door Aimée Tolk, David van der Linden en Lauren Timmer.

- **Site:** https://dvdl009.github.io/aardwarmte/
- **Live presentatie (QR-code op de poster):** https://dvdl009.github.io/aardwarmte/live.html

## Bestanden

| Bestand | Wat |
|---|---|
| `index.html` | De site: onderzoek per hoofdstuk, poster, bronnen en dia's terugkijken |
| `live.html` | Live presentatie. Het publiek kijkt mee op de telefoon |
| `slides.js` | De 19 korte dia's met spreektekst, in de volgorde van de samenvatting. Gebruikt door `live.html` én `index.html` |
| `story3d.js` | Het 3D-verhaal op de telefoon (doublet, volg het water, ondergrond, stroomnet, zonnepanelen, kaart, regionaal net, warmte per maand, poll, kosten) |
| `verslag/` | Het definitieve verslag als A4-bladzijden (`pNN.jpg` groot, `pNN-s.jpg` klein) |
| `verslag-paginas.json` | Welke bladzijden bij welk hoofdstuk horen, de bronnen per hoofdstuk en de bronnenlijst |
| `verslag.pdf` | Het definitieve verslag als pdf (uit Google Docs) |
| `poster-A1-staand.pdf`, `poster-A1-liggend.pdf` | De twee A1-posters om te printen (met `.jpg`-voorbeelden voor de site) |
| `poster.png` | Kleine versie van de staande poster |
| `img/` | Figuren en de QR-code |

## Tijdens de presentatie

Het is een posterpresentatie: er is geen beamer. Bezoekers scannen de QR-code op de poster en zien op hun telefoon een 3D-verhaal dat meeloopt met wat jullie vertellen.

| Wie | Open | Wat |
|---|---|---|
| Presentator (telefoon) | `live.html#presenter`, pincode `0112` | Volgende/vorige dia, spreektekst, stemmen bekijken of wissen |
| Bezoekers | `live.html` (QR-code) | 3D-scène bovenin die per dia verandert, korte tekst eronder, stemmen bij de poll |

Bovenaan de presentator staat de knop **Live presentatie: AAN/UIT**. Staat hij uit, dan zien bezoekers "Nu geen live presentatie" met een link naar de site. Zet hem aan als er een groepje bij de poster staat, en weer uit als jullie klaar zijn (tik twee keer).

Per groepje: tik op **Welkom** terwijl ze scannen. Dat zet alles terug naar het begin: dia 1, alle stemmen gewist en de kijkers opnieuw geteld. Kies dan **Dia's** om te beginnen en sluit af met **Einde** (de telefoons gaan dan door naar de site).

Alleen de stemmen wissen kan ook: ga naar de poll-dia en tik op **Stemmen wissen**.

De 3D-scènes staan in `story3d.js`. Welke scène bij welke dia hoort, staat in `slides.js` bij `scene`. Telefoons zonder 3D zien de afbeelding uit `img`.

## Iets aanpassen

- **Dia's:** in `slides.js` (titel, tekst, spreektekst, wie presenteert).
- **Firebase, pincode, namen:** bovenin `live.html` bij `CONFIG`.
- **Verslag:** vervang `verslag.pdf`, maak de bladzijden opnieuw (`pdftoppm -r 150`) en werk `verslag-paginas.json` bij (begin- en eindpagina per hoofdstuk en de bronnen).

De live-verbinding loopt via een Firebase Realtime Database met deze regels:

```json
{ "rules": { "live": { ".read": true, ".write": true } } }
```

Iedereen die de code leest, kan in principe het scherm veranderen. Voor een schoolpresentatie is dat een klein risico. Zet de database na afloop eventueel uit.
