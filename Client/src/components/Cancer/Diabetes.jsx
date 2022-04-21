import { Button, Typography,Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useContext, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { detectdiabetes } from "../../service/api";
const useStyle=makeStyles({
  di: {
    boxSizing: "border-box",
    padding:0,
    margin:0,
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
    background:"red",
    
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
    height: "1400px",
    padding: '2rem',
    borderRadius: "2rem",
    boxShadow:" 20px 20px 50px rgba(0, 0, 0, 0.5)",
   
    borderRadius: "10px",
    background: "rgba(255, 255, 255, 0.4)",
  
  }
})


const calc = {
    Pregnancies:"",
    Glucose:"",
    BloodPressure:"",
    SkinThickness:"",
    Insulin:"",
    BMI:"",
    DiabetesPedigreeFunction:"",
    Age:"",



};

const Diabetes = () => {
 
  const [user,setUser]=useState(calc);

  const onOnclickHandler =  async () => {
    let response=await detectdiabetes(user);
    alert("result" + response.data);
  };
  
   const classes=useStyle();
   const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  
  
  
  return (
    <>
    <Navbar/>
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
                      type="text"
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
                      type="text"
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
                    <label htmlFor="preganancies"></label>
                    <Tooltip title="preganancies" placement="right">
                    <input
                      type="text"
                      name="preganancies"
                      id="preganancies"
                      autoComplete="off"
                      className={classes.te}
                      value={user.preganancies}
                      onChange={(e) => onValueChange(e)}
                      placeholder="Preganancy"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="Glucose"></label>
                    <Tooltip title="Glucose" placement="right">
                    <input
                      type="text"
                      name="Glucose"
                      id="Glucose"
                      autoComplete="off"
                      className={classes.te}
                      value={user.Glucose}
                      onChange={(e) => onValueChange(e)}
                      placeholder="Glucose"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="BloodPressure"></label>
                    <Tooltip title="BloodPressure" placement="right">
                    <input
                      type="text"
                      name="BloodPressure"
                      id="BloodPressure"
                      autoComplete="off"
                      className={classes.te}
                      value={user.BloodPressure}
                      onChange={(e) => onValueChange(e)}
                      placeholder="BloodPressure"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="SkinThickness"></label>
                    <Tooltip title="SkinThickness" placement="right">
                    <input
                      type="text"
                      name="SkinThickness"
                      id="SkinThickness"
                      autoComplete="off"
                      className={classes.te}
                      value={user.SkinThickness}
                      onChange={(e) => onValueChange(e)}
                      placeholder="Skin Thickness"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="Insulin"></label>
                    <Tooltip title="Insulin" placement="right">
                    <input
                      type="text"
                      name="Insulin"
                      id="Insulin"
                      autoComplete="off"
                      className={classes.te}
                      value={user.Insulin}
                      onChange={(e) => onValueChange(e)}
                      placeholder="Insulin"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="DiabetesPedigreeFunction"></label>
                    <Tooltip title="DiabetespedigreeFunction" placement="right">
                    <input
                      type="text"
                      name="DiabetesPedigreeFunction"
                      id="DiabetesPedigreeFunction"
                      autoComplete="off"
                      className={classes.te}
                      value={user.DiabetesPedigreeFunction}
                      onChange={(e) => onValueChange(e)}
                      placeholder="Diabetes Pedigree Function"
                    ></input></Tooltip>
                  </div>
                  <div className="form-group form-button">
                    <Button
                      name="predict"
                      id="predict"
                      className={classes.btnsub}
                     onClick={()=>onOnclickHandler()}
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

export default Diabetes;                                                                                                                                                      