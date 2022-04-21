import React, { useState, useEffect,useContext } from 'react';
import { Dialog, DialogContent, TextField, Box, Button, makeStyles, Typography } from '@material-ui/core';
import { authenticateLogin, authenticateSignup } from '../service/api.js';
import {LoginContext} from '../context/ContextProvider.jsx';
const useStyle = makeStyles({
    component: {
        height: '80vh',
        width: '90vh',
        maxWidth: 'unset !important'
    },
    image: {
        backgroundImage: `url(${'https://lirp.cdn-website.com/d708ae7e/dms3rep/multi/opt/1-Logo_PhoneDoctor-640w.png'})`,
        background: 'red',
        backgroundPosition: 'center 85%',
        backgroundRepeat: 'no-repeat',
        height: '80vh',
        width: '40%',
        padding: '45px 35px',
        '& > *': {
            color: ' #ffffff',
            fontWeight: 600
        }
    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        
        flexDirection: 'column',
        '& > *': {
            marginTop: 20
        }
    },
    sign:{
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        overflowY:true,
        flexDirection: 'column',
        '& > *': {
            marginTop: 20
        }
    },
    loginbtn: {
        textTransform: 'none',
        background: 'red ',
        color: '#fff',
        height: 48,
        borderRadius: 2
    },
    requestbtn: {
        textTransform: 'none',
        background: '#fff',
        color: '#2874f0',
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    createText: {
        margin: 'auto 0 15px 0',
        textAlign: 'center',
        color: '#2874f0',
        fontWeight: 600,
        fontSize: 14,
        cursor: 'pointer'
    },
    error: {
        fontSize: 10,
        color: '#ff6161',
        lineHeight: 0,
        marginTop: 10,
        fontWeight: 600
    }
})


const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    phone: '',
    age: '',
    sex: '',
    bloodGroup : '',
    city: '',
    password: ''
};

const loginInitialValues = {
    username: '',
    password: ''
};

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login patient',
        subHeading: ''
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new patient here",
        subHeading: 'Signup to get started'
    }
}

const LoginDialog = ({ setPatient }) => {
    const classesname = useStyle();
    const [ login, setLogin ] = useState(loginInitialValues);
    const {open,setOpen}=useContext(LoginContext);
    
    const [ signup, setSignup ] = useState(signupInitialValues);
    const [ error, showError] = useState(false);
    const [ account, toggleAccount ] = useState(accountInitialValues.login);

    useEffect(() => {
        showError(false);
    }, [login])

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const loginUser = async() => {
        let data = await authenticateLogin(login);
        if(!data) 
            showError(true);
        else {
            showError(false);
            handleClose();
            setPatient(login.username);
        }
    }
    const signupUser = async() => {
      let response=  await authenticateSignup(signup);
      if(!response){
          return;
      }
        handleClose();
        setPatient(signup.username);
    }
    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }
    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
    }

    return (
        <div className="Col-md-9 col-lg-6 col-xl-5">
        <Dialog open={open}   onClose={handleClose}>
            <DialogContent className={classesname.component} >
                <Box style={{display: 'flex'}}>
                    <Box className={classesname.image}>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>
                    </Box>
                    {
                        account.view === 'login' ? 
                        <Box className={classesname.login}>
                            <TextField onChange={(e) => onValueChange(e)} name='username' label='Enter username' />
                            { error && <Typography className={classesname.error}>Please enter username</Typography> }
                            <TextField onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />
                            <Typography className={classesname.text}>By continuing, you agree to dyan medlife Terms of Use and Privacy Policy.</Typography>
                            <Button className={classesname.loginbtn} onClick={() => loginUser()} >Login</Button>
                            <Typography className={classesname.createText} onClick={() => toggleSignup()}>New to Dyan Medlife? Create an account</Typography>
                        </Box> : 
                        <Box className={classesname.sign}>
                            <TextField onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
                            <TextField onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
                            <TextField onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                            <TextField onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
                            <TextField onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' />
                            <TextField onChange={(e) => onInputChange(e)} name='age' label='Enter age' />
                            <TextField onChange={(e) => onInputChange(e)} name='sex' label='Enter sex' />
                            <TextField onChange={(e) => onInputChange(e)} name='bloodGroup' label='Enter bloodGroup' />
                            <TextField onChange={(e) => onInputChange(e)} name='city' label='Enter city' />
                            <TextField onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                            <Button className={classesname.loginbtn} onClick={() => signupUser()} >Continue</Button>
                        </Box>
                    }
                </Box>
            </DialogContent>
        </Dialog>
        </div>
    )
}

export default LoginDialog;