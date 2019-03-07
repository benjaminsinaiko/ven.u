const express = require('express')
const Parse = require('parse/node')

require('dotenv').config()

const app = express()

// Install Parse SDK
Parse.initialize(`${process.env.APP_ID}`, `${process.env.JS_KEY}`)
Parse.serverURL = 'https://parseapi.back4app.com/'

app.get('/', (req, res) => res.send('Hello World!'))

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))
