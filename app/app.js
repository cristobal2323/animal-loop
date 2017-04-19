'use strict'

const express = require('express')
const path = require('path')
const port = process.env.PORT || 9097
const http = require('http')
const request = require('request')
const moment = require('moment')


//console.log( moment('09:00:00', 'h:mm:ss').fromNow(), moment().format('h:mm:ss') )

require('./env').config()

require('./globals').globals()

const app = express()

app.use(express.static(__dirname + '/bundle'))

/*
con.connect( (err) => {
  if (err) throw err
  console.log('conexta3')
    })
*/


let server = http.createServer(app).listen(port, () => {
  console.log('Estamos en el ' + port)
})

const io = require('socket.io')(server)
  
app.all('*', (request, response, next) => {
  response.sendFile(path.resolve(__dirname, 'bundle', 'index.html'))
})
