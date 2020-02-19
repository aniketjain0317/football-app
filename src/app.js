const path = require('path')
const express = require('express')

const router = require('./routers/main')


const app = express()

const port = process.env.PORT || 3000
const publicDirPath = path.join(__dirname,'../public')

app.use(express.json())
app.use(express.static(publicDirPath))
app.use(router)



app.listen(port, () => console.log('Server is up on port', port))