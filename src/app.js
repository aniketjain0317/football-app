const path = require('path')
const express = require('express')
const hbs = require('hbs')
const router = require('./routers/mainRouter')
require('./db/mongoose')


const app = express()

const port = process.env.PORT || 3000

//Define paths for express config
const publicPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//Setting up hbs engine and custom views, partials path
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath) 

app.use(express.json())
app.use(express.static(publicPath))
app.use(router)



app.listen(port, () => console.log('Server is up on port', port))