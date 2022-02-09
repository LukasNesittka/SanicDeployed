const express = require('express')
const cors = require('cors')
const path = require('path')
const { default: axios } = require('axios')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'))
})
app.get('/api/activity/', async(req,res) => {
    let activity;
    await axios
        .get('https://www.boredapi.com/api/activity/')
        .then(response => {
            activity = response.data
        })
        res.status(200).send(activity)
})

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`Server running on ${port}`))