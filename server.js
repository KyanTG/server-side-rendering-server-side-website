// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';


// console.log('Hieronder moet je waarschijnlijk nog wat veranderen')


// Doe een fetch naar de data die je nodig hebt
// const apiResponse = await fetch('...')

const Radio = await fetch('https://fdnd-agency.directus.app/items/mh_radiostations')
const Showtime = await fetch('https://fdnd-agency.directus.app/items/mh_shows')
const Show = await fetch('https://fdnd-agency.directus.app/items/mh_show')
const Presentators = await fetch('https://fdnd-agency.directus.app/items/mh_users')

// Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen
// const apiResponseJSON = await apiResponse.json()
const RadioJSON = await Radio.json()
const ShowtimeJSON = await Showtime.json()
const ShowJSON = await Show.json()
const PresentatorsJSON = await Presentators.json()

// // Controleer eventueel de data in je console
// // (Let op: dit is _niet_ de console van je browser, maar van NodeJS, in je terminal)
// // console.log(apiResponseJSON)
// console.log(RadioJSON)
// console.log(ShowtimeJSON)
// console.log(ShowJSON)
// console.log(PresentatorsJSON)


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


   response.render('homepage.liquid', {stations: RadioJSON.data} )
})

app.post('/', async function (request, response) {

  response.redirect(303, '/')
})


// veronica page
app.get('/veronica', async function (request, response) {

  const ShowVeronica = await fetch('https://fdnd-agency.directus.app/items/mh_show/?sort=radiostation')

  const ShowVeronicaJSON = await ShowVeronica.json()

  response.render('veronica.liquid', {persons: PresentatorsJSON.data, shows: ShowVeronicaJSON.data, tijden: ShowtimeJSON.data} )
})

app.post('/', async function (request, response) {

 response.redirect(303, '/')
})



// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000, als dit ergens gehost wordt, is het waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
