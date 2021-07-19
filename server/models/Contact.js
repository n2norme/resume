const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },

    message:{
        type:String,
        required:true
    }
});

module.exports = Contact = mongoose.model('contact', ContactSchema);