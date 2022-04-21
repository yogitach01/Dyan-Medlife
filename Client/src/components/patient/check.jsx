import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, TextField, Box, Button, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    component: {
        height: '70vh',
        width: '90vh',
        maxWidth: 'unset !important',
        backgroundColor:'#fff'
    },
    head:{
        color:'#d8051e',
        fontSize:30,
        marginTop:10,
        textAlign:"center",
        padding:'20px 20px'
    },
    leftpart:{
        padding:'5px 10px',
        width:'50%',
        borderRadius:10,
    },
    co:{
        padding:'10px 10px',
        height:'70%',
        backgroundColor:'#ebf32ec9',
        margin :'5px 5px',
        borderRadius:10
    },
    co1:{
        padding:'10px 10px',
        margin :'5px 5px',
        height:'70%',
        backgroundColor:'#fd8cf3',
        borderRadius:10
    },
    co2:{
        padding:'10px 10px',
        height:'70%',
        margin :'5px 5px',
        backgroundColor:'#78f366',
        borderRadius :10
    },
    co3:{
        padding:'10px 10px',
        height:'70%',
        margin :'5px 5px',
        backgroundColor:'#36eb94c9',
        borderRadius:10
    }

})
const Check = ({ open, setOpen ,disease, symptoms,precaution,DietToFollow,treatment}) => {
    const classes = useStyle();
   
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className="Col-md-9 col-lg-6 col-xl-5">
        <Dialog open={open}   onClose={handleClose}>
            <DialogContent className={classes.component} >
                <h1 className={classes.head}> disease name:  {disease}</h1>
                <Box style={{display: 'flex'}} >
                    <Box className={classes.leftpart}>
                    <Box className={classes.co}>
                        <Typography variant="h5">symptoms</Typography>
                        <Typography style={{marginTop: 20}}>{symptoms}</Typography>
                    </Box>
                    <Box className={classes.co1}>
                        <Typography variant="h5">precaution</Typography>
                        <Typography style={{marginTop: 20}}>{precaution}</Typography>
                    </Box>
                    </Box>
                    <Box className={classes.leftpart}>
                    <Box className={classes.co2}>
                        <Typography variant="h5">treatment</Typography>
                        <Typography style={{marginTop: 20}}>{treatment}</Typography>
                    </Box>
                    <Box className={classes.co3}>
                        <Typography variant="h5">Diet-to-follow</Typography>
                        <Typography style={{marginTop: 20}}>{DietToFollow}</Typography>
                    </Box>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
        </div>
    )
}

export default Check;