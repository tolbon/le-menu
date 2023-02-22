const express = require('express')
const helmet = require('helmet');

const port = 3000

const app = express()
app.use(helmet());

app.set('views', './views')
app.set('view engine', 'pug');

console.log(__dirname + '/../public')
app.use(express.static(__dirname + '/../public'))

app.get('/', (req, res) => {
  res.render('menu')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})