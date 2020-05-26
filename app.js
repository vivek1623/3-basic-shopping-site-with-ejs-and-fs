const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')
const errorControllers = require('./controllers/error')

const port = 1623

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/admin', adminRouter)
app.use(shopRouter)

app.use(errorControllers.get404Page)

app.listen(port, () => {
  console.log(`server is up on port ${port}`)
})