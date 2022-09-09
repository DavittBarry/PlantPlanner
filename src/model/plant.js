const mongoose = require('mongoose')

// Mongoose Schema
const plantSchema = new mongoose.Schema( {
    // Plant image ?
    plant_name: String,
    plant_description: String,
    plant_created_at: Date,
})

// Object model
const Plant = mongoose.model('Plant', plantSchema)
module.exports = Plant