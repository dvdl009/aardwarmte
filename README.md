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
| `slides.js` | De 12 dia's met spreektekst. Gebruikt door `live.html` én `index.html` |
| `verslag.json` | Het verslag (verslag 2 uit de teamruimte) |
| `verslag.pdf` | Het verslag als pdf (downloadknop op de site) |
| `poster.png` | De poster |
| `img/` | Figuren en de QR-code |

## Tijdens de presentatie

| Wie | Open | Wat |
|---|---|---|
| Presentator (telefoon) | `live.html#presenter`, pincode `0112` | Volgende/vorige dia, spreektekst, stemmen bekijken of wissen |
| Laptop aan de beamer | `live.html#beamer` | Grote dia's, QR-code op het welkomstscherm, live poll-uitslag |
| Publiek | `live.html` (QR-code) | Volgt de dia's, draait het 3D-model, stemt bij de poll |

Volgorde: zet het scherm op **Welkom** terwijl iedereen scant, kies **Dia's** om te beginnen en sluit af met **Einde**. Dan gaan alle telefoons door naar de site.

Proefronde gedaan? Ga in de presentator naar de poll-dia en tik op **Stemmen wissen**.

## Iets aanpassen

- **Dia's:** in `slides.js` (titel, tekst, spreektekst, wie presenteert).
- **Firebase, pincode, namen:** bovenin `live.html` bij `CONFIG`.
- **Verslag:** exporteer in de teamruimte bij *Verslag 2* met **Exporteer voor de site** en vervang `verslag.json`.

De live-verbinding loopt via een Firebase Realtime Database met deze regels:

```json
{ "rules": { "live": { ".read": true, ".write": true } } }
```

Iedereen die de code leest, kan in principe het scherm veranderen. Voor een schoolpresentatie is dat een klein risico. Zet de database na afloop eventueel uit.
