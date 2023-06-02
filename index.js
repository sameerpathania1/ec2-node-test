const express = require('express')

const app = express()

app.get('/', (req, res) => res.json('server 1'))

app.listen(3001, () => {
  console.log('listening to 3001')
})