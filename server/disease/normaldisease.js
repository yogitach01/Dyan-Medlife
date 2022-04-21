import express from 'express';
import { spawn } from 'child_process';
export const predict = async (request, response) => {
    try {
        console.log(request.body);
    const py    = spawn('python', ['./disease/dia.py',request.body]);
    py.stdout.on('data', (data)=>{
    console.log(data.toString());
    return response.status(200).json(data.toString());
    });
    /* py.stderr.on('data',(data)=>{
        console.log(data.toString());

    });
     *//* py.on('close',(code)=>{
        console.log(`childe processed exited ${code}`);
    });
     */
    } catch(error){
        response.status(500).json('error',error.message);
    }
}

