import React, { useState } from 'react'
import {Card ,CardActions,CardContent,CardMedia,Button,Typography,Modal,Box,Container} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import BookingForm from './BookingForm';
const useStyles=makeStyles({
   
  dis:{
    display:'flex',
    marginLeft:40,
    flexDirection:'row',
  },

    card:{
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    borderRadius:20 ,
    marginLeft:70,
    
  },
  media:{
    height:250,
  },
  book:{
    padding:8,
    fontSize:15,
    height:40,
    fontFamily:"Playfair Display serif",
    backgroundColor:"#DC143C",
  }
});

function ListDoctor(props) {
    const classes=useStyles();
    
  return (
    <div>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
<Card className={classes.card}>
      <CardMedia
      className={classes.media}
    image={props.data.img}
          
      />
      <CardContent >
        <Typography  variant="h6" style={{fontFamily:"Roboto Slab,serif",color:'crimson',fontSize:'25'}}  >
        {props.data.category}
        </Typography>
        <Typography variant="h4" style={{fontWeight:'500',fontFamily:"Roboto Slab,serif"}}>
        {props.data.name}
        </Typography>
        <Typography variant="body2" style={{fontWeight:'bold',fontFamily:"Roboto Slab,serif"}}>
        {props.data.education}
        </Typography>
        <Typography variant="h5" style={{fontFamily:"Roboto Slab,serif"}}>
        {props.data.designation}
        </Typography>
        <Typography variant="body1" style={{fontFamily:"Roboto Slab,serif"}}>
        {props.data.designation}<br></br>
        {props.data.hospital}
        </Typography>

      </CardContent>
      <CardActions>
        <Button className={classes.book} variant="contained"  onClick={props.onClick}>Book</Button>
        
      </CardActions>

    </Card>
   </Grid>
    </Grid>
    
   

    </div>
  )
}

export default ListDoctor;