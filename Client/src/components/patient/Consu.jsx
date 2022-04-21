import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import {Typography,Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
    design:{
        marginLeft:20,
        marginTop:50,
        fontWeight:600,
    }

})

const Consu=()=>{
    const classes = useStyles();
    let history= useHistory();
    return(
        <><Navbar />
        <div>
        <div className="container">
        <Typography variant='h3' className={classes.design}>Doctor's Chamber<br></br> Video Call</Typography>
        <p>You will now get all kinds of health related services for your day to day life through an
							app. Ranging from primary health care for your illness to specialist doctors’ consultation
							or referrals for hospital admission.
						</p>
                        <Button variant="contained"color="secondary"onClick={() => history.push("/Calender")} > Make Appointment</Button>
        </div>
        </div><Footer/>
            
        </>
    );
};
export default Consu;
