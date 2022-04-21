import { Button, Typography } from "@material-ui/core";
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
    margin: 0,
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
    borderRadius: "10px",
    background: "rgba(255, 255, 255, 0.4)",
  }
})


const calc = {
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



const Doctor = () => {
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
                  PREDICT THE HEART DISEASE YOU CAN HAVE IN FUTURE!!
                </h2>
                <form className="heart-prediction" id="heart-prediction">
                  <div className="form">
                    <label htmlFor="sex"></label>
                    <input
                      type="text"
                      name="sex"
                      id="sex"
                      autoComplete="off"
                      value={user.sex}
                      onChange={(e) => onValueChange(e)}
                      className={classes.te}
                      placeholder="Enter your gender 0 Male 1 Female"
                    ></input>
                  </div>

                  <div className="form-group">
                    <label htmlFor="age"></label>
                    <input
                      type="text"
                      name="age"
                      id="age"
                      autoComplete="off"
                      className={classes.te}
                      value={user.age}
                      onChange={(e) => onValueChange(e)}
                      placeholder="Enter your age"
                    ></input>
                  </div>

                  <div className="form-group">
                    <label htmlFor="cp"></label>
                    <input
                      type="text"
                      name="cp"
                      id="cp"
                      autoComplete="off"
                      className={classes.te}
                      value={user.cp}
                      onChange={(e) => onValueChange(e)}
                      placeholder="Chest Pain type 1,2,3,4"
                    ></input>
                  </div>

                  <div className="form-group">
                    <label htmlFor="trestbps"></label>
                    <input
                      type="text"
                      name="trestbps"
                      id="trestbps"
                      autoComplete="off"
                      className={classes.te}
                      value={user.trestbps}
                      onChange={(e) => onValueChange(e)}
                      placeholder="Trestbps"
                    ></input>
                  </div>

                  <div className="form-group">
                    <label htmlFor="chol"></label>
                    <input
                      type="text"
                      name="chol"
                      id="chol"
                      autoComplete="off"
                      className={classes.te}
                      value={user.chol}
                      onChange={(e) => onValueChange(e)}
                      placeholder="Serum cholestoral in mg/dl"
                    ></input>
                  </div>

                  <div className="form-group">
                    <label htmlFor="fbs"></label>
                    <input
                      type="text"
                      name="fbs"
                      id="fbs"
                      autoComplete="off"
                      className={classes.te}
                      value={user.fbs}
                      onChange={(e) => onValueChange(e)}
                      placeholder="fbs"
                    ></input>
                  </div>

                  <div className="form-group">
                    <label htmlFor="restecg"></label>
                    <input
                      type="text"
                      name="restecg"
                      id="restecg"
                      autoComplete="off"
                      className={classes.te}
                      value={user.restecg}
                      onChange={(e) => onValueChange(e)}
                      placeholder="restecg"
                    ></input>
                  </div>

                  <div className="form-group">
                    <label htmlFor="thalach"></label>
                    <input
                      type="text"
                      name="thalach"
                      id="thalach"
                      autoComplete="off"
                      className={classes.te}
                      value={user.thalach}
                      onChange={(e) => onValueChange(e)}
                      placeholder="thalach"
                    ></input>
                  </div>

                  <div className="form-group">
                    <label htmlFor="exang"></label>
                    <input
                      type="text"
                      name="exang"
                      id="exang"
                      autoComplete="off"
                      className={classes.te}
                      value={user.exang}
                      onChange={(e) => onValueChange(e)}
                      placeholder="exang"
                    ></input>
                  </div>

                  <div className="form-group">
                    <label htmlFor="oldpeak"></label>
                    <input
                      type="text"
                      name="oldpeak"
                      id="oldpeak"
                      autoComplete="off"
                      className={classes.te}
                      value={user.oldpeak}
                      onChange={(e) => onValueChange(e)}
                      placeholder="oldpeak"
                    ></input>
                  </div>

                  <div className="form-group">
                    <label htmlFor="ca"></label>
                    <input
                      type="text"
                      name="ca"
                      id="ca"
                      autoComplete="off"
                      className={classes.te}
                      value={user.ca}
                      onChange={(e) => onValueChange(e)}
                      placeholder="ca"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="slope"></label>
                    <input
                      type="text"
                      name="slope"
                      id="slope"
                      autoComplete="off"
                      className={classes.te}
                      value={user.slope}
                      onChange={(e) => onValueChange(e)}
                      placeholder="slope"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="thal"></label>
                    <input
                      type="text"
                      name="thal"
                      id="thal"
                      autoComplete="off"
                      className={classes.te}
                      value={user.thal}
                      onChange={(e) => onValueChange(e)}
                      placeholder="Thal"
                    ></input>
                  </div>
                  <div className="form-group form-button">
                    <Button
                      name="predict"
                      id="predict"
                      className={classes.btnsub}
                      onClick={()=>onOnclickHandler()}
                    >PredictNow </Button>
                    
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

export default Doctor;
