import express from 'express';
import { spawn } from 'child_process';
export const breastcancer = async (request, response) => {
    try {
    const clump_thickness=request.body.clump_thickness;
    const unif_cell_size=request.body.unif_cell_size;
    const  unif_cell_shape= request.body.unif_cell_shape ;
    const marg_adhesion = request.body.marg_adhesion ;
    const single_epith_cell_size  = request.body.single_epith_cell_size ;
    const bare_nuclei = request.body.bare_nuclei ;
    const bland_chrom = request.body.bland_chrom ;
    const norm_nucleoli =request.body.norm_nucleoli;
    const mitoses =request.body.mitoses;
    const predict= [clump_thickness,unif_cell_size,unif_cell_shape,marg_adhesion,single_epith_cell_size,bare_nuclei,bland_chrom,norm_nucleoli,mitoses];
    console.log(predict);
    const py    = spawn('python', ['./disease/breast.py',predict]);
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

