require("dotenv").config({path: "./.env"});
var connectDatabase = require("./db");
const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
const path = require("path")

connectDatabase()

app.use(express.json())

// Availabale Routes
app.use(cors())
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

// Static Files
app.use(express.static(path.join(__dirname, "../build")))

app.get('*', function(req,res){
  res.sendFile(path.join(__dirname, "../build/index.html"));
})

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})