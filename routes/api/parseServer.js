const express = require('express')
const Parse = require('parse/node')
const router = express.Router()

// Test route
router.get('/test', (req, res) => res.json({ msg: 'parse route works' }))

// Artist
router.get('/artists/:artist', (req, res) => {
  const Artists = Parse.Object.extend('Artists')
  const query = new Parse.Query(Artists)
  query.limit(10)
  query.fullText('artistName', `${req.params.artist}`)
  query
    .find()
    .then(results => {
      res.json(results)
      console.log('Artists found', results)
    })
    .catch(error => {
      res.json(error)
      console.log('Error', error)
    })
})

module.exports = router
