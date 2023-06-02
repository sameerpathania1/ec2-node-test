const express = require('express')

const app = express()

app.get('/', (req, res) => res.json('server 2'))

app.listen(3002, () => {
  console.log('listening to 3002')
})