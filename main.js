const crypto = require('crypto')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8090
const path = require('path')
const decrypt = require('./api')
const encrypt = require('./encryptionService')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))


const run = () => app.listen(PORT, () => console.log('HASHING SERVICE APP IS NOW AVAILABLE'))

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/public/main.html`))
})

app.post('/decrypt', async (req, res) => {
  console.log('REQUEST DETAILS', req.body.key, req.body.hash)
  const decryptedText = await decrypt(req.body.key, req.body.hash)
  res.end(`Your text is ${decryptedText}`)
})

app.post('/encrypt', async (req, res) => {
  console.log('REQUEST DETAILS', req.body.mykey, req.body.mytext)
  const encryptedText = await encrypt(req.body.mykey, req.body.mytext)
  res.end(`Your text is ${encryptedText}`)
})


run()
