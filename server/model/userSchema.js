  
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    lastname: {
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
    phone: {
        type: String
    },
    age:{
        type:String
    },
    sex:{
        type:String,
        
    },
    bloodGroup:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    password: {
        type: String,
        required: true
    },
    
});

const User = mongoose.model('patient', userSchema);

export default User;