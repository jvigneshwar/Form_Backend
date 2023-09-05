const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true
    },
    highest:{
        type: String,
        required: true
    },
    institute:{
        type: String,
        required: true
    },
    study:{
        type: String,
        required: true
    },
    experience:{
        type: String,
        required: true
    },
    instituteCanada:{
        type: String,
        required: true
    },
    programCanada:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    future:{
        type: String,
        required: true
    },
    listening:{
        type: String,
        required: true
    },
    reading:{
        type: String,
        required: true
    },
    speaking:{
        type: String,
        required: true
    },
    writing:{
        type: String,
        required: true
    },
    payToogle:{
        type: String,
        required: true
    },
    pay:{
        type: String,
        required: true
    },
    gicToogle:{
        type: String,
        required: true
    },
    gic:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("users", userSchema)