const mongoose = require('mongoose');

const interventionSchema = new mongoose.Schema({
    surgeon: String,
    specialty:String,
    anesthsiste:String,
    nurse1: String,
    nurse2:String,
    roomNumber:Number,
    intervention:String
},{collection:'updatedData'});

const Intervention = mongoose.model('Intervention', interventionSchema);

module.exports = Intervention;
