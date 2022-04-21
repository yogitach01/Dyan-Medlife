import doctorUser from '../model/doctorSchema.js';

export const doctorLogIn = async (request, response) => {
    try {
        const user = await doctorUser.findOne({ username: request.body.username, password: request.body.password });
        if(user) {
            return response.status(200).json(`${request.body.username} login successfull`);
        } else {
            return response.status(401).json('Invalid Login');
        }
    } catch(error){
        response.status(500).json('error:',error.message);
    }
}


export const doctorSignUp = async (request, response) => {
    try {
        const exist = await doctorUser.findOne({ username: request.body.username });
        if(exist) {
            return response.status(401).json('User already exist');
        }
        const user=request.body;
        const newUser = new doctorUser(user);
        await newUser.save();
        response.status(200).json(newUser);
    } catch (error) {
        response.json('Error: ', error.message);
    }
}

export const listDoctors = async(request, response) => {
    try {
        let listDoctor = await doctorUser.find().select(['-password'])
        response.status(200).json(listDoctor)
    } catch (error) {
        response.json('Error: ', error.message);
    }
}