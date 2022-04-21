//breast cancer home page

import { makeStyles } from '@material-ui/styles';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Navbar from '../Navbar';
import Footer from '../Footer';

const useStyle =makeStyles({
  component:{
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
  background: "#fff",
  overflow: "visible",
  },

  com:{
    width:" 100%",
    height: "170vh",
    justifyContext: "center",
    alignItems: "center",
  
  },

  hj:{
  padding: "25px",
  color:"rgba(24, 65, 119, 0.767)",
  fontSize: "35px",
  textAlign: "center",
  position:"relative",

  
  },

  h1:{
    padding: "25px",
    color:"rgba(24, 65, 119, 0.767)",
    fontSize: "35px",
    textAlign: "center",
  },
  ho:{
    padding:'35px',
    color:"red",
   fontSize: '27px',
   textAlign: "left",
    wordWrap:"break-word",
    width: "600px",
    border: "4px solid red",
    right:"-170px",
    borderRadius:"30px",
    position:"relative",
    top:"310px"
  },

  bu:{
    width: "300px",
    height: "70px",
    lineHeight: "50px",
    fontSize: "18px",
    padding: "0 20px",
    borderRadius: "10px",
    cursor: "pointer",
    backgroundColor: "lightcoral",
    fontWeight: "bold",
    boxShadow: "inset 0 0 0 0 crimson",
    position: "relative",
    transition: "0.5s ease",
    top: "440px",
    left: "550px",
    right: "420px",
    justifyContent:'center'
  },

  du:{
    width: "300px",
    height: "70px",
    lineHeight: "50px",
    fontSize: "18px",
    padding: "0 20px",
    borderRadius: "10px",
    cursor: "pointer",
    backgroundColor: "lightcoral",
    fontWeight: "bold",
    boxShadow: "inset 0 0 0 0 crimson",
    position: "relative",
    transition: "0.5s ease",
    top: "440px",
    left: "550px",
    right: "430px",
    
  },
  jh:
  {
    position: 'absolute',
    justifyItems:'right',
    borderRadius:"10px",
    top: "315px",
    left: "525px",
    right: "550px",
    boxShadow: "inset 0 0 0 0 crimson",
  },

  sk:
  {
    position: 'absolute',
    justifyItems:'right',
    borderRadius:"10px",
    top: "585px",
    left: "790px",
    right: "550px",
    boxShadow: "inset 0 0 0 0 crimson",
  }

})

 const Btc = () => {
   
  const classes=useStyle();
    return (<>
           <Navbar />
          
          <div className={classes.sk} >
          <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lung-cancer-1595928153.jpg?crop=1.00xw:0.505xh;0,0.253xh&resize=1200:*"alt='gh' width={490} height={300} style={{'borderRadius':'15px'}}/>
          </div>
        <div className={classes.component}> <div className={classes.com}>
        <h1 className={classes.h1} >Predict your chance of having lung Cancer</h1>
        <h1 className={classes.hj} style={{top:'-19px'}} >Lung cancer prediction enable identifying and targeting women at high-risk, while reducing interventions in those at low-risk.</h1>
<h2 className={classes.ho}>Each year number of deaths is increasing extremely because of Lung cancer. It is the most frequent type of all cancers and the major cause of death in women worldwide. Any development for prediction and diagnosis of cancer disease is capital important for a healthy life.</h2>
        <h3 className={classes.hj}style={{bottom:'-360px'}} >You will be able to know about your Cancer in just one Click !!!</h3>
        <NavLink to="/lungcancer">
          <Button className={classes.bu}>CHECK NOW</Button>
        </NavLink>
       
      </div> 
        </div>
<Footer />
       </>
    )
}
export default Btc;