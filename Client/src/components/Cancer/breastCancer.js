import { Button, Typography,Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useContext, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { detectheartdisease } from "../../service/api";
import { LoginContext } from "../../context/ContextProvider";

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
    top:"-420px",
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
   
  
  }
})


const calc = {
  name:"",
  sex: "",
    age: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
};



const Dctr = () => {
  const {heart ,setHeart} =useContext(LoginContext);
  const [user,setUser]=useState(calc);

  const onOnclickHandler =  async () => {
    let response=await detectheartdisease(user);
    setHeart(response.data);
    alert("result" + heart);
  };
   const classes=useStyle();
   const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }


  
  
  return (
    <><Navbar />
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
                    <Tooltip title="Enter your name" placement="right">
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
                  <div className="form-group">
                    <label htmlFor="sex"></label>
                    <Tooltip title="Enter '0' for Male and '1' for Female" placement="right">
                    <input
                      type="text"
                      name="sex"
                      id="sex"
                      autoComplete="off"
                      value={user.sex}
                      onChange={(e) => onValueChange(e)}
                      className={classes.te}
                      placeholder="Enter your gender"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="age"></label>
                    <Tooltip title="Enter your Age" placement="right">
                    <input
                      type="text"
                      name="age"
                      id="age"
                      autoComplete="off"
                      className={classes.te}
                      value={user.age}
                      onChange={(e) => onValueChange(e)}
                      placeholder="Enter your age"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="cp"></label>
                    <Tooltip title="Enter chest pain type" placement="right">
                    <input
                      type="text"
                      name="cp"
                      id="cp"
                      autoComplete="off"
                      className={classes.te}
                      value={user.cp}
                      onChange={(e) => onValueChange(e)}
                      placeholder="Chest Pain type 1,2,3,4"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="trestbps"></label>
                    <Tooltip title="Resting Blood Sugar" placement="right">
                    <input
                      type="text"
                      name="trestbps"
                      id="trestbps"
                      autoComplete="off"
                      className={classes.te}
                      value={user.trestbps}
                      onChange={(e) => onValueChange(e)}
                      placeholder="Trestbps"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="chol"></label>
                    <Tooltip title="Enter serum Cholostrol" placement="right">
                    <input
                      type="text"
                      name="chol"
                      id="chol"
                      autoComplete="off"
                      className={classes.te}
                      value={user.chol}
                      onChange={(e) => onValueChange(e)}
                      placeholder="Serum cholestoral in mg/dl"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="fbs"></label>
                    <Tooltip title="Fasting Blood Sugar" placement="right">
                    <input
                      type="text"
                      name="fbs"
                      id="fbs"
                      autoComplete="off"
                      className={classes.te}
                      value={user.fbs}
                      onChange={(e) => onValueChange(e)}
                      placeholder="fbs"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="restecg"></label>
                    <Tooltip title="Resting Ecg" placement="right">
                    <input
                      type="text"
                      name="restecg"
                      id="restecg"
                      autoComplete="off"
                      className={classes.te}
                      value={user.restecg}
                      onChange={(e) => onValueChange(e)}
                      placeholder="restecg"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="thalach"></label>
                    <Tooltip title="Maximum heart rate" placement="right">
                    <input
                      type="text"
                      name="thalach"
                      id="thalach"
                      autoComplete="off"
                      className={classes.te}
                      value={user.thalach}
                      onChange={(e) => onValueChange(e)}
                      placeholder="thalach"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="exang"></label>
                    <Tooltip title="Exercise Induced angina" placement="right">
                    <input
                      type="text"
                      name="exang"
                      id="exang"
                      autoComplete="off"
                      className={classes.te}
                      value={user.exang}
                      onChange={(e) => onValueChange(e)}
                      placeholder="exang"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="oldpeak"></label>
                    <Tooltip title="ST depression induced by exercise relative to rest" placement="right">
                    <input
                      type="text"
                      name="oldpeak"
                      id="oldpeak"
                      autoComplete="off"
                      className={classes.te}
                      value={user.oldpeak}
                      onChange={(e) => onValueChange(e)}
                      placeholder="oldpeak"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="ca"></label>
                    <Tooltip title="NUmber of major vessels colored by flouroscopy" placement="right">
                    <input
                      type="text"
                      name="ca"
                      id="ca"
                      autoComplete="off"
                      className={classes.te}
                      value={user.ca}
                      onChange={(e) => onValueChange(e)}
                      placeholder="ca"
                    ></input></Tooltip>
                  </div>
                  <div className="form-group">
                    <label htmlFor="slope"></label>
                    <Tooltip title="Slope of peak Exercise" placement="right">
                    <input
                      type="text"
                      name="slope"
                      id="slope"
                      autoComplete="off"
                      className={classes.te}
                      value={user.slope}
                      onChange={(e) => onValueChange(e)}
                      placeholder="slope"
                    ></input></Tooltip>
                  </div>
                  <div className="form-group">
                    <label htmlFor="thal"></label>
                    <Tooltip title="Defect type" placement="right">
                    <input
                      type="text"
                      name="thal"
                      id="thal"
                      autoComplete="off"
                      className={classes.te}
                      value={user.thal}
                      onChange={(e) => onValueChange(e)}
                      placeholder="Thal"
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
      <Footer />
    </>
  );
};

export default Dctr;
