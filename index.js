const express = require ('express')
const mongoose = require('mongoose')
const app = express()


const Person = require('./models/Person')


// forma de ler json / middlewares

app.use(
    express.urlencoded({
        extended: true
    }),
)
app.use(express.json())

// rota inicial

const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

//conectar com o banco

mongoose.connect('mongodb+srv://andremartins30:Kabana12@cluster0.7qd9cly.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    app.listen(3000)
    console.log('Conectado ao MongoDB!')
})
.catch((err) => console.log(err))


