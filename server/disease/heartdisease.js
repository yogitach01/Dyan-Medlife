import express from 'express';
import { spawn } from 'child_process';
export const heartdisease = async (request, response) => {
    try {
    
    const age=request.body.age;
    const sex=request.body.sex;
    const  cp= request.body.cp ;
    const trestbps = request.body.trestbps ;
    const chol  = request.body.chol ;
    const fbs = request.body.fbs ;
    const restecg = request.body.restecg ;
    const thalach =request.body.thalach;
    const exang =request.body.exang;
    const oldpeak=request.body.oldpeak;
    const slope=request.body.slope;
    const ca= request.body.ca;
    const thal=request.body.thal;
    const predict= [age,sex,cp,trestbps,chol,fbs,restecg,thalach,exang,oldpeak,slope,ca,thal];
   const py    = spawn('python', ['./disease/heart.py',predict]);
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

