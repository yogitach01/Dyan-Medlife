import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
    design: {
        marginLeft: 20,
        marginTop: 50,
        fontWeight: 700,
        marginLeft:30,
        fontFamily:"Playfair Display serif",
        lineHeight: 1.4,
    
    },
    descip:{
        marginLeft:30,
        fontFamily:"Playfair Display serif",
        fontSize:20,
    
        

    },
    btn:{
        marginLeft:30,
        fontFamily:"Playfair Display serif",   
        padding:13,
        fontSize:10,
    },
    consult:{
        display:"flex",
        marginLeft:700,
        borderRadius:30,
        marginTop:-160,
        width:400,
        
    },

})

const Consu = () => {
    const classes = useStyles();
    let history = useHistory();
    return (
        <><Navbar />
            <div>
                <div className="container">
                    <Typography variant='h2' className={classes.design}>Best Care & Better Doctor</Typography>
                    <br/>
                    <h4 className={classes.descip}>Our clinics open for you 24 hours and 7 days in week, Be safe, and stay
                        at home.<br/>
                         Get your online consultation from any doctor or any clinic  where you are.
                    </h4>
                    <br/>
                    <Button className={classes.btn}variant="contained" color="secondary" onClick={() => history.push("/Calender")} > Make Appointment</Button>
                    <img src="https://media.istockphoto.com/vectors/online-medical-consultation-or-doctor-online-concept-concept-for-app-vector-id1206101284?k=6&m=1206101284&s=170667a&w=0&h=mltguPn2u-7MV7IhhDYEPWICETLBd2976_v00BAsBCc="  className={classes.consult}/>
                </div>
            </div>
            <br/>
            <Footer />
        </>
    );
};
export default Consu;