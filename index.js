const express = require('express')
const { connectDatabase } = require('./controller/mongooseConnect')
const app = express()

// API port
const PORT = process.env.PORT || 5000

// connect to database
connectDatabase()

// Allows express use req.body on the routes
// app.use(express.json())

// routes
const users = require('./routes/users-route')

// // referencing routes
app.use('/api/users', users)

//
app.listen(PORT, () => {
    console.log(`Cloudinary image upload api is running on port ${PORT}`)
})