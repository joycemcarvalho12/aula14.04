const express = require('express')
// import express from express
const app = express()
const port  = process.env.PORT || 3000

app.get('/', (req,res) => {
    res.send('Olá Mundo')
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})
