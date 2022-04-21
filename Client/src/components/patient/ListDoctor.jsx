import React from 'react'
import {Box,Card ,CardActions,CardContent,Button,Typography,Dialog,DialogActions,DialogContentText,DialogContent,CardMedia} from '@material-ui/core';
import {useState} from 'react';
import BookingForm from './BookingForm';
import {makeStyles} from '@material-ui/styles';
import { red } from '@material-ui/core/colors';
const useStyles=makeStyles({
   
  dis:{
    display:'flex',
    marginLeft:40,
    flexDirection:'row',
  },

    card:{
    maxWidth: 1000,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    borderRadius:20 ,
    marginLeft:70,
    
  },
  media:{
    width:250,
  },
  book:{
    padding:7,
    fontSize:12,
    height:30,
    fontFamily:"Playfair Display serif",
    marginLeft:9,
    border:"1px solid red",
    marginTop:-3,
  }
});
function ListDoctor(props) {
  const classes=useStyles();
  const [dialogOpen,dialogSetOpen]=useState(false);
  const handleClickOpen = () => {
    dialogSetOpen(true);
  };

  const handleClose = () => {
    dialogSetOpen(false);
  };

    
  return (
    <div>
      <Box>
     <Card className={classes.card}>
      <CardMedia
      className={classes.media}
    image="https://cdn.pixabay.com/photo/2020/09/13/20/24/doctor-5569298_1280.png"
          
      />
      <CardContent >
        
        <Typography variant="h3" style={{ fontSize:'15',fontWeight:'600',fontFamily:"Roboto Slab,serif"}}>
        {props.data.name}
        </Typography>
        <Typography variant="h4" sx={{ fontSize:'10',fontWeight:'400',fontFamily:"Roboto Slab,serif" }} color="text.secondary">
        {props.data.degree}
         
        </Typography>
        <Typography variant="h6">
         {props.data.email}
          <br />
          {props.data.contact}
        </Typography>

      </CardContent>
      <CardActions>
        <Button className={classes.book} variant="contained"  onClick={handleClickOpen}>Book</Button>
        
      </CardActions>

    </Card>
    </Box>

    
   <br/>

   <Dialog open={dialogOpen} onClose={handleClose}>
       
        <DialogContent>
          <DialogContentText>
         
            <BookingForm date={props.date} doctor={props.data.username} patient={props.patient} docname={props.data.name}/>
          </DialogContentText>
  
        </DialogContent>
        <DialogActions>
         
          
        </DialogActions>
      </Dialog>

    </div>
  )
}

export default ListDoctor;