require('dotenv').config()
const express = require('express')
const sequelise = require('./db')
const models = require('./models/models.js')
const cors = require('cors')
const router = require('./routes/index.js')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

app.get('/', (req, res)=>{
    res.status(200).json({ message: 'WORKING'})
})

const start = async () => {
    try {
        await sequelise.authenticate()
        await sequelise.sync()
        app.listen(PORT, ()=>console.log(`Сервер стартовал на порту: ${PORT}`))
    } catch (e) {
        console.log(e); 
    }
}

start()