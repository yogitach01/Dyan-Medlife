import React, {useState, useContext, useEffect} from 'react'
import {makeStyles} from '@material-ui/styles';
import {Grid,Dialog,DialogActions,DialogContentText,DialogContent} from '@material-ui/core';
import ListDoctor from './ListDoctor';
import Footer from "../Footer";
import Navbar from "../Navbar";
import BookingForm from './BookingForm';
import { LoginContext } from "../../context/ContextProvider";
import axios from 'axios';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';


const useStyles=makeStyles({
  de:{
    marginLeft:20,
    marginTop:90,
    border:'3px solid black',
    width:400,
    fontSize:15,    
  },

  image:{    
    height:400,
    marginLeft:500,
    marginTop:-300,
    borderRadius:25,
    
  },
  dis:{
    display:'flex',
    flexDirection:'row',  
  },
  sx:{
    padding:30,
    fontFamily:"Playfair Display serif",
    marginLeft:20,
    textAlign:"center",
    fontSize:30,
  },
  sd:{
    fontFamily:"Playfair Display serif",
    marginLeft:20,
    textAlign:"center",
    fontSize:30,
  }
})

function Calender() {
  const { patient, setPatient,doctor,setDoctor,open,setOpen,dr,setDr} = useContext(LoginContext);
  const [listOfDoctors, setListofDoctors] = useState([])
  const [date, setDate] = useState(new Date());
  const classes = useStyles()
 
  const getListOfDoctors = async ()=>{
    try {
     return await axios.post("http://localhost:7000/getDoctorsList")
    } catch (error) {
      console.log('error while calling get doctors list api: ', error);
    }
  }

  useEffect(async ()=>{
    let res = await getListOfDoctors()
    setListofDoctors(res.data)
    console.log(res.data)
  },[])

  return (
    <div>
      <Navbar />
     <Calendar onChange={setDate} value={date} className={classes.de}  /> 
     <img src="https://demigos.com/media/cache/61/e8/61e8be99d482c40c4f294b577a7d2e92.jpg" className={classes.image}/>
     <div>
       
     <h1 className={classes.sx} >Availabe Doctors on :- {date.toDateString()}</h1>
     
     </div>
     <Grid container >
     {listOfDoctors.map((doc,key)=><ListDoctor date={date.toDateString()} patient={patient} key={key} data={doc} />)} 
     </Grid>
    <br/>
    
     <Footer/>

    
     
    </div>
  )
}

export default Calender;