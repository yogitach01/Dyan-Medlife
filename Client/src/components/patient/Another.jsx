import React from "react";
import { Button,Box,Grid}from "@material-ui/core";
import dis from "./disease";
import { useState } from "react";
import { makeStyles} from "@material-ui/styles";
import { useHistory } from "react-router";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Check from "./check";
const useStyles = makeStyles({
  viewbtn: {
    height: 40,
    borderRadius: 2,
    fontSize: 18,
    Width: 30,
    color:"red",
    fontFamily:"Roboto"

  },
});

const Another = () => {
  const history = useHistory();
  const [ open, setOpen ] = useState(false);
  const openDialog = () => {
    setOpen(true);
  }

  const [diseaseData, setDiseasekData] = useState(dis);
  const classes = useStyles();
  return (<>
    <div><Navbar />
      <center>
        <h2 style={{fontFamily:"Roboto" ,marginTop:10,fontWeight:600} } > Available Disease</h2>
        </center> 
     <center>
      <Box sx={{ flexGrow: 1 ,marginTop:10}}>
      <Grid container spacing={{ xs: 4, md: 6}} columns={{ xs: 4, sm: 8, md: 12 }} >
        {
          diseaseData.map(co=><Grid item xs={4} sm={4} md={4} ><>
          <Button className={classes.viewbtn} onClick={() => openDialog()} >{co.disease}</Button>
          <Check open={open} setOpen={setOpen} disease={co.disease} symptoms={co.symptoms} precaution={co.precaution} DietToFollow={co.DietToFollow} treatment={co.Treatments} />
     
          </>
          </Grid>)
          }
        
        
      </Grid>
    </Box>
   
    </center>
    
       
       
            
      <Footer />
    </div>
         </>
  );
};
export default Another;
