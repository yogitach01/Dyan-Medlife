import express from 'express';
import { spawn } from 'child_process';
export const  diabetesdisease= async (request, response) => {
    try {
 
    const Pregnancies=request.body.Pregnancies;
    const Glucose=request.body.Glucose;
    const  BloodPressure= request.body.BloodPressure ;
    const SkinThickness = request.body.SkinThickness ;
    const Insulin  = request.body.Insulin ;
    const BMI = request.body.BMI ;
    const DiabetesPedigreeFunction = request.body.DiabetesPedigreeFunction ;
    const Age =request.body.Age;
   
    const predict= [Pregnancies,Glucose,BloodPressure,SkinThickness,Insulin,BMI,DiabetesPedigreeFunction,Age];
   const py    = spawn('python', ['./disease/diabetes.py',predict]);
    py.stdout.on('data', (data)=>{
    console.log(data.toString());
    return response.status(200).json(data.toString());
    });
    py.stderr.on('data',(data)=>{
        console.log(data.toString());
    });
    } catch(error){
        response.status(500).json('error',error.message);
    }
}

