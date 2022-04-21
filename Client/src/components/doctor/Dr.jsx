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
    height: "70vh",
    justifyContext: "center",
    alignItems: "center",
  
  },
  heading:{
  padding: "25px",
  color:"rgba(24, 65, 119, 0.767)",
  fontSize: "35px"
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
    top: "50px",
    left: "15px",
    right: "420px",
  }

})

 const Dr = () => {
   
  const classes=useStyle();
    return (<>
           <Navbar />
           
        <div className={classes.component}> <div className={classes.com}>
        <h1 className={classes.heading}>PREDICT YOU HEART DIESEASE</h1>
        <h3 className={classes.heading} >You will be able to know about your Heart in just one Click !!!</h3>
        
        <NavLink to="/Doctor">
          <Button className={classes.bu}>CHECK NOW</Button>
        </NavLink>
      </div> 
        </div>
<Footer />
       </>
    )
}
export default Dr;