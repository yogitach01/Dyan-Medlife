import { Button, Typography,Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useContext, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { detectbreast } from "../../service/api";
import { LoginContext } from "../../context/ContextProvider";
import "../Cancer/breastCancer.css"; 
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
    age: "",
    clump_thickness: "",
    unif_cell_size: "",
    unif_cell_shape: "",
    marg_adhesion: "",
    single_epith_cell_size: "",
    bare_nuclei: "",
    bland_chrom: "",
    norm_nucleoli: "",
    mitoses: "",
  
};



const Dctr = () => {
  const {breast,setBreast} =useContext(LoginContext);
  const [user,setUser]=useState(calc);

  const onOnclickHandler =  async () => {
    let response=await detectbreast(user);
    /*{setBreast(response.data)}*/
    alert("result" + response.data);
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
                      name="clump_thickness"
                      id="clump_thickness"
                      autoComplete="off"
                      className={classes.te}
                      value={user.cp}
                      onChange={(e) => onValueChange(e)}
                      placeholder="clump_thickness"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="trestbps"></label>
                    <Tooltip title="Resting Blood Sugar" placement="right">
                    <input
                      type="text"
                      name="unif_cell_size"
                      id="unif_cell_size"
                      autoComplete="off"
                      className={classes.te}
                      value={user.trestbps}
                      onChange={(e) => onValueChange(e)}
                      placeholder="unif_cell_size"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="chol"></label>
                    <Tooltip title="Enter serum Cholostrol" placement="right">
                    <input
                      type="text"
                      name="unif_cell_shape"
                      id="unif_cell_shape"
                      autoComplete="off"
                      className={classes.te}
                      value={user.chol}
                      onChange={(e) => onValueChange(e)}
                      placeholder="unif_cell_shape"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="fbs"></label>
                    <Tooltip title="Fasting Blood Sugar" placement="right">
                    <input
                      type="text"
                      name="marg_adhesion"
                      id="marg_adhesion"
                      autoComplete="off"
                      className={classes.te}
                      value={user.fbs}
                      onChange={(e) => onValueChange(e)}
                      placeholder="marg_adhesion"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="restecg"></label>
                    <Tooltip title="Resting Ecg" placement="right">
                    <input
                      type="text"
                      name="single_epith_cell_size"
                      id="single_epith_cell_size"
                      autoComplete="off"
                      className={classes.te}
                      value={user.restecg}
                      onChange={(e) => onValueChange(e)}
                      placeholder="single_epith_cell_size"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="thalach"></label>
                    <Tooltip title="Maximum heart rate" placement="right">
                    <input
                      type="text"
                      name="bare_nuclei"
                      id="bare_nuclei"
                      autoComplete="off"
                      className={classes.te}
                      value={user.thalach}
                      onChange={(e) => onValueChange(e)}
                      placeholder="bare_nuclei"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="exang"></label>
                    <Tooltip title="Exercise Induced angina" placement="right">
                    <input
                      type="text"
                      name="bland_chrom"
                      id="bland_chrom"
                      autoComplete="off"
                      className={classes.te}
                      value={user.exang}
                      onChange={(e) => onValueChange(e)}
                      placeholder="bland_chrom"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="oldpeak"></label>
                    <Tooltip title="ST depression induced by exercise relative to rest" placement="right">
                    <input
                      type="text"
                      name="norm_nucleoli"
                      id="norm_nucleoli"
                      autoComplete="off"
                      className={classes.te}
                      value={user.oldpeak}
                      onChange={(e) => onValueChange(e)}
                      placeholder="norm_nucleoli"
                    ></input></Tooltip>
                  </div>

                  <div className="form-group">
                    <label htmlFor="ca"></label>
                    <Tooltip title="NUmber of major vessels colored by flouroscopy" placement="right">
                    <input
                      type="text"
                      name="mitoses"
                      id="mitoses"
                      autoComplete="off"
                      className={classes.te}
                      value={user.ca}
                      onChange={(e) => onValueChange(e)}
                      placeholder="mitoses"
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
