import React from 'react'
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import { useState } from "react";
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';



function Con() {
  const [setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
      console.log(date);
      setSelectedDate(date);
  };

   const [inputs, setinputs] = useState({
    fname: "",
    lname: "",
    age: "",
    gen: "",
    email: "",
    phone: "",
    dtetme: "",
  });
  let name, value;

  const inputsHandler = (e) => {
    console.log(e);

    name = e.target.name;
    value = e.target.value;

    setinputs({ inputs, [name]: value });
  };

  function PostData(e) {
    e.preventDefault();
    console.log(inputs);
    alert("Booked")
}


    return (
        <div>
            <Typography gutterBottom variant="h3" align="center" className='sd'>
        Online Consultation
       </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us
          </Typography> 

            <form method='POST'>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter first name" label="First Name" value={inputs.fname} name="fname"  onChange={inputsHandler} variant="standard" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" label="Last Name" value={inputs.lname} name="lname"  onChange={inputsHandler} variant="standard" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="age" placeholder="Enter age" label="Age" value={inputs.age} name="age"  onChange={inputsHandler} variant="standard" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="gender" placeholder="Enter gender" label="Gender" value={inputs.gen} name="gen"  onChange={inputsHandler} variant="standard" fullWidth required />
                </Grid>

                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" value={inputs.email} name="email"  onChange={inputsHandler} variant="standard" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" value={inputs.phone} name="phone" onChange={inputsHandler} variant="standard" fullWidth required />
                </Grid>


                  <Grid item xs={12}>
                  <div>
                  <DateTimePickerComponent id="datetimepicker" placeholder="Select a date and time" value={inputs.dtetme} onChange = { handleDateChange }  variant = "standard" fullWidth required />
                  </div>
                  </Grid>      

                <Grid item xs={12}>
                <Button type="submit" variant = "contained" color = "primary" fullWidth onClick = { PostData }> Book </Button>   
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>



        </div>
    )
}

export default Con; 