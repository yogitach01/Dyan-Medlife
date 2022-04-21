import React,{useState, useEffect, useContext} from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import axios from "axios"
import {TableContainer, Table,TableHead, TableRow, TableCell,TableBody,Paper} from '@material-ui/core';
import { LoginContext } from "../../context/ContextProvider";
import {makeStyles} from '@material-ui/styles';

const useStyles=makeStyles({

})
function Consulatnt() {

  const { patient, setPatient,doctor,setDoctor,open,setOpen,dr,setDr} = useContext(LoginContext);

  const [listOfBookedPatients, setListofBookedPatients] = useState([])


  const getListOfBookedPatients = async ()=>{
    try {
     return await axios.get(`http://localhost:7000/getBookedPatients?doctor=${doctor}`)
    } catch (error) {
      console.log('error while calling get booked patients list api: ', error);
    }
  }

  useEffect(async ()=>{
    let res = await getListOfBookedPatients()
    setListofBookedPatients(res.data)
    console.log(res.data)
  },[])


  return (
 
    <>
    <Navbar/>
    <br/>
    <h1 sx={{textAlign:"center",fontFamily:"Playfair Display serif"}}>Appointment Request</h1>
    {/* {listOfBookedPatients.map((patient,key)=><div key={key}>{patient.name}</div>)} */}
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 400 }} aria-label="simple table">
    <TableHead>
          <TableRow>
            <TableCell sx={{fontSize:20}}>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Problem</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listOfBookedPatients.map((patient,key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {patient.name}
              </TableCell>
              <TableCell align="right">{patient.age}</TableCell>
              <TableCell align="right">{patient.date}</TableCell>
              <TableCell align="right">{patient.problem}</TableCell>
              <TableCell align="right">{patient.email}</TableCell>
              <TableCell align="right">{patient.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
    </Table>
    </TableContainer>
    <br/>
    <br/>
    <br/>
    <Footer/>

    </>
    
  )
}

export default Consulatnt