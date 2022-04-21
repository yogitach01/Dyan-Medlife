import { Button, Typography,Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { detectLung } from "../../service/api";
import "./FormLung.css"; 
import Navbar from "../Navbar";
import Footer from "../Footer";
const useStyle=makeStyles({
  di: {
    boxSizing: "border-box",
    padding:0,
    textAlign: "center",
    margin: 0,
    overflow: "visible",
  },
  btnsub: {
    width: "400px",
    height: "120px",
    fontSize: "25px",
    padding:"0 20px",
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: "200px",
    position: "relative",
    transition: "0.5s ease",
    top:"-520px",
    left: "1px",
    right: "-150px",
    background:"red"
  },
  heading: {
    padding: "25px 0 600px 0",
    textShadow: "1px 1px"
  },
  
  he: {
    pagging: "25px 0 60px 0",
    textShadow: "1px 1px",
    marginTop:10
  },
  te:{
    padding: "12px 20px",
    width:"500px",
  margin:"8px 0",
  display: "inline-block",
  border: "2px solid black",
  borderRadius: "4px",
  boxSizing: "border-box",
  fontWeight: "bold",
  fontSize: "17px",
  position: "relative",
  transition: "0.5s ease",
  top: "-600px",
  left: "1px",
  right: "120px",
  bottom: "191px",
  color: "crimson"
  },
  container: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    
    
  },
  card :{
    width: "1800px",
    height: "2000px",
    padding: '2rem',
    borderRadius: "2rem",
    boxShadow:" 20px 20px 50px rgba(0, 0, 0, 0.5)",
   
  
  }
})

const calc = {
  name:"",
  Gender: "",
  Age: "",
  AirPollution: "",
  Alcoholuse: "",
  DustAllergy: "",
  OccuPationalHazards: "",
  GeneticRisk: "",
  chronicLungDisease: "",
  BalancedDiet: "",
  Obesity: "",
  Smoking: "",
  PassiveSmoker: "",
  ChestPain: "",
  CoughingofBlood:"",
  Fatigue:"",
  WeightLoss:"",	
  ShortnessofBreath:"",	
  Wheezing:"",	
  SwallowingDifficulty:""	,
  ClubbingofFingerNails:"",	
  FrequentCold:""	,
  DryCough:"",	
  Snoring:"",  
};



const FormLung = () => {
 
  const [user,setUser]=useState(calc);
const history=useHistory();
 
   const classes=useStyle();
   const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  
  const onOnclickHandler =  async () => {
    let response=await detectLung(user);
    /*{setBreast(response.data)}*/
    alert("result" + response.data);
  };

  
  
  return (
    <> 
    <Navbar />
      <section className={classes.di}>
        <div className={classes.container}>
          <div className={classes.card}>
            <div className="signup-content">
              <div className="signup-form">
                <h2 className={classes.heading}>
                  PREDICT THE CANCER YOU CAN HAVE IN FUTURE!!
                </h2>
                <form className="heart-prediction" id="heart-prediction">
               <div className="form">
                    <label htmlFor="name"></label>
                    <Tooltip title="Name" placement="right">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="off"
                      value={user.name}
                      onChange={(e) => onValueChange(e)}
                      className={classes.te}
                      placeholder="Enter your name"
                    ></input></Tooltip>
                  </div>
                  <div className="form">
                    <label htmlFor="Gender"></label>
                    <Tooltip title="Enter '0' for Male and '1' for Female" placement="right">
                    <input
                      type="text" min="1" max="0"
                      name="Gender"
                      id="Gender"
                      autoComplete="off"
                      value={user.Gender}
                      onChange={(e) => onValueChange(e)}
                      className={classes.te}
                      placeholder="Enter your gender"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="Age"></label>
                    <Tooltip title="Enter your Age" placement="right">
                    <input
                      type="text" min="0" max="120"
                      name="Age"
                      id="Age"
                      autoComplete="off"
                      className={classes.te}
                      value={user.Age}
                      onChange={(e) => onValueChange(e)}
                      placeholder="Enter your age"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="AirPollution"></label>
                    <Tooltip title="AirPollution" placement="right">
                    <input
                      type="text" min="1" max="20"
                      name="AirPollution"
                      id="AirPollution"
                      autoComplete="off"
                      className={classes.te}
                      value={user.AirPollution}
                      onChange={(e) => onValueChange(e)}
                      placeholder="AirPollution"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="Alcoholuse"></label>
                    <Tooltip title="Alcoholuse" placement="right">
                    <input
                      type="text" min="1" max="10"
                      name="Alcoholuse"
                      id="Alcoholuse"
                      autoComplete="off"
                      className={classes.te}
                      value={user.Alcoholuse}
                      onChange={(e) => onValueChange(e)}
                      placeholder="Alcoholuse"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="DustAllergy"></label>
                    <Tooltip title="DustAllergy" placement="right">
                    <input
                      type="text" min="1" max="8"
                      name="DustAllergy"
                      id="DustAllergy"
                      autoComplete="off"
                      className={classes.te}
                      value={user.DustAllergy}
                      onChange={(e) => onValueChange(e)}
                      placeholder="DustAllergy"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="OccuPationalHazards"></label>
                    <Tooltip title="OccuPationalHazards" placement="right">
                    <input
                      type="text" min="1" max="8"
                      name="OccuPationalHazards"
                      id="OccuPationalHazards"
                      autoComplete="off"
                      className={classes.te}
                      value={user.OccuPationalHazards}
                      onChange={(e) => onValueChange(e)}
                      placeholder="OccuPationalHazards"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="Geneticrisk"></label>
                    <Tooltip title="GeneticRisk" placement="right">
                    <input
                      type="text" min="1" max="8"
                      name="GeneticRisk"
                      id="GeneticRisk"
                      autoComplete="off"
                      className={classes.te}
                      value={user.GeneticRisk}
                      onChange={(e) => onValueChange(e)}
                      placeholder="Genetic Risk"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="chronicLungDisease"></label>
                    <Tooltip title="chronicLungDisease" placement="right">
                    <input
                      type="text" min="1" max="8"
                      name="chronicLungDisease"
                      id="chronicLungDisease"
                      autoComplete="off"
                      className={classes.te}
                      value={user.chronicLungDisease}
                      onChange={(e) => onValueChange(e)}
                      placeholder="chronicLungDisease"
                    ></input></Tooltip>
                  </div>
                  <div className="form-group">
                    <label htmlFor="BalancedDiet"></label>
                    <Tooltip title="Balanced Diet" placement="right">
                    <input
                      type="text" min="1" max="8"
                      name="BalancedDiet"
                      id="BalancedDiet"
                      autoComplete="off"
                      className={classes.te}
                      value={user.BalancedDiet}
                      onChange={(e) => onValueChange(e)}
                      placeholder="Balanced Diet"
                    ></input></Tooltip>
                  </div>
                  <div className="form-group">
                    <label htmlFor="Obesity"></label>
                    <Tooltip title="Obesity" placement="right">
                    <input
                      type="text" min="1" max="8"
                      name="Obesity"
                      id="Obesity"
                      autoComplete="off"
                      className={classes.te}
                      value={user.Obesity}
                      onChange={(e) => onValueChange(e)}
                      placeholder="Obesity"
                    ></input></Tooltip>
                  </div>
                  <div className="form-group">
                    <label htmlFor="Smoking"></label>
                    <Tooltip title="Smoking" placement="right">
                    <input
                      type="text" min="1" max="10"
                      name="Smoking"
                      id="Smoking"
                      autoComplete="off"
                      className={classes.te}
                      value={user.Smoking}
                      onChange={(e) => onValueChange(e)}
                      placeholder="Smoking"
                    ></input></Tooltip>
                  </div>        
                  <div className="form-group">
                    <label htmlFor="PassiveSmoker"></label>
                    <Tooltip title="PassiveSmoker" placement="right">
                    <input
                      type="text" min="1" max="10"
                      name="PassiveSmoker"
                      id="PassiveSmoker"
                      autoComplete="off"
                      className={classes.te}
                      value={user.PassiveSmoker}
                      onChange={(e) => onValueChange(e)}
                      placeholder="PassiveSmoker"
                    ></input></Tooltip>
                  </div>
                  <div className="form-group">
                    <label htmlFor="ChestPain"></label>
                    <Tooltip title="ChestPain" placement="right">
                    <input
                      type="text" min="1" max="7"
                      name="ChestPain"
                      id="ChestPain"
                      autoComplete="off"
                      className={classes.te}
                      value={user.ChestPain}
                      onChange={(e) => onValueChange(e)}
                      placeholder="Chest Pain"
                    ></input></Tooltip>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="CoughingofBlood"></label>
                    <Tooltip title="CoughingofBlood" placement="right">
                    <input
                      type="text" min="1" max="8"
                      name="CoughingofBlood"
                      id="CoughingofBlood"
                      autoComplete="off"
                      className={classes.te}
                      value={user.CoughingofBlood}
                      onChange={(e) => onValueChange(e)}
                      placeholder="Choughing of Blood"
                    ></input></Tooltip>
                  </div>
                  <div className="form-group">
                    <label htmlFor="Fatigue"></label>
                    <Tooltip title="Fatigue" placement="right">
                    <input
                      type="text" min="1" max="10"
                      name="Fatigue"
                      id="Fatigue"
                      autoComplete="off"
                      className={classes.te}
                      value={user.Fatigue}
                      onChange={(e) => onValueChange(e)}
                      placeholder="Fatigue"
                    ></input></Tooltip>
                  </div>
                  <div className="form-group">
                    <label htmlFor="WeightLoss"></label>
                    <Tooltip title="WeightLoss" placement="right">
                    <input
                      type="text" min="1" max="10"
                      name="WeightLoss"
                      id="WeightLoss"
                      autoComplete="off"
                      className={classes.te}
                      value={user.WeightLoss}
                      onChange={(e) => onValueChange(e)}
                      placeholder="WeightLoss"
                    ></input></Tooltip>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="ShortnessofBreath"></label>
                    <Tooltip title="ShortnessofBreath" placement="right">
                    <input
                      type="text" min="1" max="10"
                      name="ShortnessofBreath"
                      id="ShortnessofBreath"
                      autoComplete="off"
                      className={classes.te}
                      value={user.ShortnessofBreath}
                      onChange={(e) => onValueChange(e)}
                      placeholder="ShortnessofBreath"
                    ></input></Tooltip>
                  </div>
                  <div className="form-group">
                    <label htmlFor="Wheezing"></label>
                    <Tooltip title="Wheezing" placement="right">
                    <input
                      type="text" min="1" max="10"
                      name="Wheezing"
                      id="Wheezing"
                      autoComplete="off"
                      className={classes.te}
                      value={user.Wheezing}
                      onChange={(e) => onValueChange(e)}
                      placeholder="Wheezing"
                    ></input></Tooltip>
                  </div>
                  <div className="form-group">
                    <label htmlFor="SwallowingDifficulty"></label>
                    <Tooltip title="SwallowingDifficulty" placement="right">
                    <input
                      type="text" min="1" max="10"
                      name="SwallowingDifficulty"
                      id="SwallowingDifficulty"
                      autoComplete="off"
                      className={classes.te}
                      value={user.SwallowingDifficulty}
                      onChange={(e) => onValueChange(e)}
                      placeholder="Swallowing Difficulty"
                    ></input></Tooltip>
                  </div>
                  <div className="form-group">
                    <label htmlFor="ClubbingofFingerNails"></label>
                    <Tooltip title="ClubingofFingerNails" placement="right">
                    <input
                      type="text" min="1" max="10"
                      name="ClubbingofFingerNails"
                      id="ClubbingofFingerNails"
                      autoComplete="off"
                      className={classes.te}
                      value={user.ClubbingofFingerNails}
                      onChange={(e) => onValueChange(e)}
                      placeholder="ClubingofFingerNails"
                    ></input></Tooltip>
                  </div>
                  <div className="form-group">
                    <label htmlFor="FrequentCold"></label>
                    <Tooltip title="FrequentCold" placement="right">
                    <input
                      type="text" min="1" max="10"
                      name="FrequentCold"
                      id="FrequentCold"
                      autoComplete="off"
                      className={classes.te}
                      value={user.FrequentCold}
                      onChange={(e) => onValueChange(e)}
                      placeholder="FrequentCold"
                    ></input></Tooltip>
                  </div>
                  <div className="form-group">
                    <label htmlFor="DryCough"></label>
                    <Tooltip title="DryCough" placement="right">
                    <input
                      type="text" min="1" max="10"
                      name="DryCough"
                      id="DryCough"
                      autoComplete="off"
                      className={classes.te}
                      value={user.DryCough}
                      onChange={(e) => onValueChange(e)}
                      placeholder="DryCough"
                    ></input></Tooltip>
                  </div>
                  <div className="form-group">
                    <label htmlFor="Snoring"></label>
                    <Tooltip title="Snoring" placement="right">
                    <input
                      type="text" min="1" max="10"
                      name="Snoring"
                      id="Snoring"
                      autoComplete="off"
                      className={classes.te}
                      value={user.Snoring}
                      onChange={(e) => onValueChange(e)}
                      placeholder="Snoring"
                    ></input></Tooltip>
                  </div>
                  <div className="form-group form-button">
                    <Button
                      name="predict"
                      id="predict"
                      className={classes.btnsub}
                      onClick={() => onOnclickHandler()}
                    >Predict Now </Button>
                    
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default FormLung;
