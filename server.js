// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';


// console.log('Hieronder moet je waarschijnlijk nog wat veranderen')


// Doe een fetch naar de data die je nodig hebt
// const apiResponse = await fetch('...')

// const Algemeen = await fetch ('https://fdnd-agency.directus.app/items/mh_shows?fields=*.*.*.*')
const Radio = await fetch('https://fdnd-agency.directus.app/items/mh_radiostations')



const RadioJSON = await Radio.json()
// const AlgemeenJSON = await Algemeen.json()

// // Controleer eventueel de data in je console
// // (Let op: dit is _niet_ de console van je browser, maar van NodeJS, in je terminal)

console.log(RadioJSON)


// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express()); 

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

// homepage
app.get('/', async function (request, response) {

  const Radio = await fetch('https://fdnd-agency.directus.app/items/mh_radiostations')

  const RadioJSON = await Radio.json()

response.render('homepage.liquid', {stations: RadioJSON.data} )
})

app.post('/', async function (request, response) {

  response.redirect(303, '/')
})


// veronica page
app.get('/veronica', async function (request, response) {

  const AlgemeenVeronica = await fetch('https://fdnd-agency.directus.app/items/mh_shows?fields=from,until,show.name,show.body,show.radiostation.name,show.users.mh_users_id.full_name,show.users.mh_users_id.cover&filter=%7B%22show%22:%7B%22radiostation%22:%7B%22name%22:%22Radio%20Veronica%22%7D%7D%7D&sort=from')

  const AlgemeenVeronicaJSON = await AlgemeenVeronica.json()

  response.render('veronica.liquid', {algemeen: AlgemeenVeronicaJSON.data} )
})

app.post('/', async function (request, response) {

 response.redirect(303, '/')
})

// pagina als ie niet werkt

app.use((req, res, next) => {
  res.status(404).send("/notfound.liquid")
})






// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000, als dit ergens gehost wordt, is het waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
