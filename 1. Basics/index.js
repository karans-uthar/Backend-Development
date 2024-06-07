// console.log("Hello, I am Karan Suthar");

require('dotenv').config()

const express = require('express') // Common JS 
// import express from 'express' // Module JS

const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("karansuthardotcom")
})

app.get('/login', (req, res) => {
    res.send('<h1>Login</h1>')
})

app.get('/karan', (req, res) => {
    res.send("<h2>My name is Karan Suthar</h2>")
})

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

app.listen(process.env.port, (req, res) => {
    console.log(`Example app listening on port ${port}`);
})