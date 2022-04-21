import mongoose from 'mongoose';

const appointmentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String
    },
    age: {
        type: String
    },
    gender: {
        type: String,

    },
    date: {
        type: String,
        required: true
    },
    patient: {
        type: String,
        required: true
    },
    doctor: {
        type: String,
        required: true
    },
    problem: {
        type: String

    },

});

const Appointment = mongoose.model('appointment', appointmentsSchema);

export default Appointment;