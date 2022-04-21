import Appointment from "../model/appointmentsSchema.js"
export const saveAppointmentDetails = async(request, response) => {
    try {

        const appointment = request.body;
        const newAppointment = new Appointment(appointment);
        await newAppointment.save();
        response.status(200).json(newAppointment);
    } catch (error) {
        response.json('Error: ', error.message);
    }
}

export const getBookedPatients = async(request, response) => {
    try {
        let listBookedPatients = await Appointment.find({ doctor: request.query.doctor })
        response.status(200).json(listBookedPatients)
    } catch (error) {
        response.json('Error: ', error.message);
    }
}