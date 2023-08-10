const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driverschema = new Schema({
    d_name : {
        type : String,
        required: true
    },
    d_email : {
        type: String,
        required: true
    },
    d_telephone : {
        type: Number,
        required:true
    },
    d_licNo : {
        type:String,
        required:true
    },
    d_experience : {
        type:String,
        required:true
    },
    v_type : {
        type:String,
        required:true
    },
    v_image : {
        type:String,
        required:true
    },
    d_description : {
        type:String,
        required:true
    },
    d_image : {
        type:String,
        required:true
    }
})
const  Driver = mongoose.model("Driver",driverschema);

module.exports = Driver;
