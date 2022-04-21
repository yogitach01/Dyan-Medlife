import React from 'react'
import { Grid, TextField, Button, Card, CardContent, Radio, RadioGroup, FormControlLabel, FormLabel, InputLabel, MenuItem, Box, Select, FormControl, TextareaAutosize,Typography } from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';


function BookingForm(props) {


  const [inputs, setinputs] = useState({
    fname: "",
    age: "",
    gen: "",
    email: "",
    phone: "",
    problem:""
  });
  let name, value;

  const inputsHandler = (e) => {
    console.log(e);

    name = e.target.name;
    value = e.target.value;

    setinputs({ ...inputs, [name]: value });
  };

  const handleOnSubmit = async ()=>{
    try {
      let res = await axios.post("http://localhost:7000/saveAppointmentDetails",{
        name: inputs.fname,
        age: inputs.age,
        gender:inputs.gen,
        email: inputs.email,
        phone:inputs.phone,
        date:props.date,
        patient:props.patient,
        doctor:props.doctor,
        problem:inputs.problem
        })
        alert("Your appointment is booked")
    } catch (error) {
      alert(error)
    }
   

  }
  return (
    <div><Card style={{ maxWidth: 600, padding: "20px 5px", margin: "0 auto" }} >
      <CardContent className='jk'>
    
      <Typography variant='h4' >{props.docname}</Typography> 
      <br/>

        
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <TextField placeholder="Enter your name" label="Name" value={inputs.fname} name="fname" onChange={inputsHandler} InputLabelProps={{ style: { fontSize: 15 } }} variant="outlined" fullWidth required />
            </Grid>

            <Grid item xs={12} sm={8}>
              <TextField type="number" placeholder="Enter age" label="Age" value={inputs.age} name="age" onChange={inputsHandler} InputLabelProps={{ style: { fontSize: 15 } }} variant="outlined" fullWidth required />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />

                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={8}>
              <TextField type="email" placeholder="Enter email" label="Email" value={inputs.email} name="email" InputLabelProps={{ style: { fontSize: 15 } }} onChange={inputsHandler} variant="outlined" fullWidth required />
            </Grid>

            <Grid item xs={12} sm={8}>
              <TextField type="number" placeholder="Enter phone number" label="Phone" value={inputs.phone} InputLabelProps={{ style: { fontSize: 15 } }} name="phone" onChange={inputsHandler} variant="outlined" fullWidth required />
            </Grid>
            
            <Grid item xs={12}>
              <Box sx={{ minWidth: 150 }}>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={3}
                  placeholder="Describe your Problem.."
                  style={{ width: 500,height:100 }}
                  name="problem"
                  value={inputs.problem}
                  onChange={inputsHandler}
                />

              </Box>
            </Grid>
            <Grid xs={12}>
              <Button className='btnn' type="submit" variant="contained" color="primary"
                style={{
                  fontSize: '18px', textAlign: 'center', alignItems: 'center',
                  justifyContent: 'center',marginLeft:20,
                }} onClick={handleOnSubmit}>Send</Button>

            </Grid>
          </Grid>
       
      </CardContent>
    </Card></div>
  )
}

export default BookingForm;