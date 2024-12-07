require('dotenv').config()

const express = require('express')
const next = require('next')
const http = require('http')

const dev = process.env.NODE_ENV !== 'production'
const port = (dev ? 3000 : 80)
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const expapp = express()

  expapp.use(express.json({ limit: '5mb' }))
  expapp.use(express.static('./resources'))
  
  // handle api routings here

  expapp.get('*', (req, res) => {
    return handle(req, res)
  })

  var server = http.createServer(expapp)

  server.listen(port, (err) => {
    if (err) throw error
    console.log('> Ready on localhost:' + port)
  })
})
