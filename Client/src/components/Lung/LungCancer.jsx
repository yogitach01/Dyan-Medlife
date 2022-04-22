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
    height: "200vh",
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
    top: "390px",
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

 const LungCancer = () => {
   
  const classes=useStyle();
    return (<>
           <Navbar />
           <div className={classes.jh} >
          <img src="https://media.self.com/photos/5c193c29c9860e611e94f178/master/pass/illustration-lungs-stethoscope.jpg" alt='gh' width={500} height={300} style={{'borderRadius':'15px'}}/>
          </div>

          <div className={classes.sk} >
          <img src="https://ih0.redbubble.net/image.381164374.2369/ap,550x550,12x12,1,transparent,t.u2.png"alt='gh' width={490} height={370} style={{'borderRadius':'15px'}}/>
          </div>
        <div className={classes.component}> <div className={classes.com}>
        <h1 className={classes.h1} >Predict your chance of having Lung Cancer</h1>
        <h1 className={classes.hj} style={{top:'-19px'}} >In all the disease that have existed in mankind lung cancer has emerged as one of the most fatal one </h1>
<h2 className={classes.ho}>Lung cancer is the leading cause of cancer death and the second most diagnosed cancer in both men and women in the world. After increasing for decades, lung cancer rates are decreasing nationally, as fewer people smoke cigarettes and as lung cancer treatments improve..</h2>
        <h3 className={classes.hj}style={{bottom:'-360px'}} >You will be able to know about your Cancer in just one Click !!!</h3>
        <NavLink to="/FormLung">
          <Button className={classes.bu}>CHECK NOW</Button>
        </NavLink>
       
      </div> 
        </div>
<Footer />
       </>
    )
}
export default LungCancer;
  
