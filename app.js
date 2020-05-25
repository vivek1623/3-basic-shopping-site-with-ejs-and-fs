const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const path = require('path')

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')

const port = 1623

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/admin', adminRouter)
app.use(shopRouter)

app.use((req, res) => {
  res.render('404', { pageTitle: '404' })
})

app.listen(port, () => {
  console.log(`server is up on port ${port}`)
})