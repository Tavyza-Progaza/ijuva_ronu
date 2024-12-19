const express = require('express')
const router = express.Router()
const fs = require('fs')

var words = []
var loadedfile = ''
var splitstr = []

loadedfile = fs.readFileSync('./public/resources/other/wordlist.jsonl', 'utf-8')
splitstr = loadedfile.split('\n')

splitstr.forEach(str => {
  if (str.length > 0) {
    words.push(JSON.parse(str))
  }
})

console.log('> Loaded ' + words.length + ' words for lookup')

function search_eng(query) {
  var list = []

  words.forEach(word => {
    if (word['english translation'].includes(query)) {
      list.push(word)
    }
  })

  return list
}

function search_prg(query) {
  var list = []

  words.forEach(word => {
    if (word['progaza'].includes(query)) {
      list.push(word)
    }

    if (word[''].includes(query)) {
      list.push(word)
    }
  })

  return list
}

router.get('/lookup-*', (req, res) => {
  res.redirect('../../wordlookup')
})

router.post('/lookup-english', (req, res) => {
  var query = req.body.query

  if (query == undefined) {
    res.statusCode = 400

    res.json({
      code: 400
    })

    return
  }

  var results = search_eng(query)

  res.json({
    code: 200,
    count: results.length,
    results: results
  })
})

router.post('/lookup-progaza', (req, res) => {
  var query = req.body.query

  if (query == undefined) {
    res.statusCode = 400

    res.json({
      code: 400
    })

    return
  }

  var results = search_prg(query)

  res.json({
    code: 200,
    count: results.length,
    results: results
  })
})

module.exports = router
