import axios from 'axios';

const url ='http://localhost/7000';

export const authenticateLogin = async (user) => {
    try {
    return await axios.post("http://localhost:7000/get", user);
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}

export const authenticateSignup = async (user) => {
    try {
        return await axios.post("http://localhost:7000/add", user)
    } catch (error) {
        console.log('error while calling Signup API: ', error);
    }
}

export const detectdisease = async (user) => {
    try {
    return await axios.post("http://localhost:7000/getdisease", user)
    } catch (error) {
        console.log('error while calling Signup API: ', error);
    }
}

export const detectheartdisease = async (user) => {
    try {
    return await axios.post("http://localhost:7000/heart", user)
    } catch (error) {
        console.log('error while calling heart API: ', error);
    }
}

export const detectdiabetes = async (user) => {
    try {
    return await axios.post("http://localhost:7000/diabetes", user)
    } catch (error) {
        console.log('error while calling heart API: ', error);
    }
}


export const detectbreast = async (user) => {
    try {
    return await axios.post("http://localhost:7000/breast", user)
    } catch (error) {
        console.log('error while calling breast API: ', error);
    }
}


export const detectLung = async (user) => {
    try {
    return await axios.post("http://localhost:7000/lung", user)
    } catch (error) {
        console.log('error while calling lung API: ', error);
    }
}

export const authenticatedrLogin = async (user) => {
    try {
    return await axios.post("http://localhost:7000/getdoctor", user);
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}

export const authenticatedrSignup = async (user) => {
    try {
       return await axios.post("http://localhost:7000/adddoctor", user)
    } catch (error) {
        console.log('error while calling Signup API: ', error);
    }
}

