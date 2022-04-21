import mongoose from 'mongoose';

const drSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    contact: {
        type: String,
    },
    age:{
        type:String,
    },
    degree:{
        type:String,
    },
    city:{
        type:String,
    },
    password:{
        type: String,
        required: true
    },
});

const doctorUser = mongoose.model('doctor', drSchema);

export default doctorUser;