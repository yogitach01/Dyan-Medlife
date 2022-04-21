import express from 'express';
import { spawn } from 'child_process';
export const lungcancerpre = async (request, response) => {
    try {
    const age=request.body.Age;
    const Gender=request.body.Gender;
    const  AirPollution= request.body.AirPollution ;
    const Alcoholuse = request.body.Alcoholuse ;
    const DustAllergy  = request.body.DustAllergy ;
    const OccuPationalHazards = request.body.OccuPationalHazards ;
    const GeneticRisk = request.body.GeneticRisk ;
    const chronicLungDisease =request.body.chronicLungDisease;
    const BalancedDiet =request.body.BalancedDiet;
    const Obesity=request.body.Obesity;
    const Smoking=request.body.Smoking;
    const PassiveSmoker= request.body.PassiveSmoker;
    const ChestPain=request.body.ChestPain;
    const CoughingofBlood=request.body.CoughingofBlood;
    const Fatigue=request.body.Fatigue;
    const WeightLoss=request.body.WeightLoss;
    const ShortnessofBreath=request.body.ShortnessofBreath;
    const Wheezing=request.body.Wheezing;
    const SwallowingDifficulty=request.body.SwallowingDifficulty;
    const ClubbingofFingerNails=request.body.ClubbingofFingerNails;
    const FrequentCold=request.body.FrequentCold;
    const DryCough=request.body.DryCough;
    const Snoring=request.body.Snoring;
    console.log(request.body);
    const predict= [age,Gender,AirPollution,Alcoholuse,DustAllergy,OccuPationalHazards,GeneticRisk,chronicLungDisease,BalancedDiet,Obesity,Smoking,PassiveSmoker,ChestPain,CoughingofBlood,Fatigue,WeightLoss,ShortnessofBreath,Wheezing,SwallowingDifficulty,ClubbingofFingerNails,FrequentCold,DryCough,Snoring];

   const py    = spawn('python', ['./disease/lung.py',predict]);
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