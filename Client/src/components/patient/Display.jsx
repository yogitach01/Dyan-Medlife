import React, { useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import predict from "../../API/predict";
import {
  Card,
  CardContent,
  CardActions,
  CardActionArea,
  Typography,
  Button,
  CardMedia,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { LoginContext } from "../../context/ContextProvider";
import Navbar from "../Navbar";
import Footer from "../Footer";
const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",

  },
  viewbtn:{
   
    background: "red ",
    color: "#fff",
    height: 40,
    borderRadius: 2,
    fontSize: 14,
    Width: 30
    
  },
  text:{
    color:'#ffffff',
    fontSize:16
  },
  te:{
    color:'#ffffff'
  }
  
});

const Display = () => {
  const history = useHistory();
  const classes = useStyles();
  const {pred,setPred,sym}=useContext(LoginContext);
  

  return (
    <><Navbar />
      <section>
        <div className="work-container container">
          <h1 className="main-heading text-center" style={{color:"red", fontFamily:"Roboto"}}>Disease Prediction Result</h1>
          
          <h3 style={{color:"red",marginTop:10,fontFamily:"Roboto" ,fontSize:40}}>  You might suffering from:
                {pred}</h3><br/>
          
          <div className="row">
            {predict.map((curElem) => {
              const { id,disease, symptoms,symptoms1, Diagnosis,Treatments, DietToFollow, precaution,OtherHealthImpact } = curElem;
            return(
            <center>
                    <Grid container spacing={2}>
                      <Card style={{ width: 400, marginTop: 50,marginLeft:60,background:"rgb(168, 50, 50)" }} >
                        <CardActionArea >
                          <CardMedia
                          component="img"
                          height="200"
                          image="https://www.stoptheclot.org/wp-content/uploads/2016/06/AdobeStock_71913139.jpeg"
                          alt="symptoms" />
                          <CardContent >
                            <Typography gutterBottom variant="h2" component="h1" className={classes.te}>
                              Symptoms
                            </Typography>
                            <Typography
                              variant="body2"
                              className={classes.text}
                            >
                              {symptoms} {
                                ( disease==="Dengue" ?  ({symptoms1}): (null)
                                )
                              }
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions></CardActions>
                      </Card>
                      <Card style={{ width: 400, marginTop: 50,marginLeft:60,background:"rgb(128, 68, 79)" }}>
                        <CardActionArea >
                          <CardMedia 
                           component="img"
                           height="200"
                           image="https://www.stoptheclot.org/wp-content/uploads/2016/06/AdobeStock_75929267-300x200.jpeg"
                           alt="precautions" />
                          <CardContent>
                            <Typography gutterBottom variant="h2" component="h1" className={classes.te}>
                              Precautions
                            </Typography>
                            <Typography
                              variant="body2"
                              className={classes.text}
                            >
                              {precaution}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions></CardActions>
                      </Card>
                   
                    </Grid>  
                         
                {/* <Button className={classes.viewbtn} style={{marginTop:30,marginRight:50}} variant="contained" size="large">Dataset</Button> */}
               <Button className={classes.viewbtn} style={{marginTop:30,marginLeft:180}} variant="contained" size="large" 
               onClick={() => history.push("/Another")}
               >Available Disease </Button>
               <Button className={classes.viewbtn} style={{marginTop:30,marginLeft:50}} variant="contained" size="large" 
               onClick={() => history.push("/Consu")}
               > Consult </Button>
               
                </center>
                );

            })}
          </div>
        </div>
      </section><Footer />
    </>
  );
};
export default Display;
