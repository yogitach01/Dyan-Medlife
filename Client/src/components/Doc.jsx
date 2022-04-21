import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Menu, MenuItem, makeStyles } from '@material-ui/core';
import { PowerSettingsNew } from '@material-ui/icons';
import {LoginContext} from '../context/ContextProvider';
const useStyle = makeStyles({
    component: {
        marginTop: 40,
    },
    logout: {
        fontSize: 16,
        marginLeft: 20
    }
})

const Doc = ({doctor,setDoctor}) => {
    const [open, setOpen] = useState(false);
    const classes = useStyle();
    
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const logout = () => {
        setDoctor('');
    }
    
    return (
        <>
        <Link   onClick={handleClick}><Typography className='btn btn-style' style={{ fontSize:20}}>{doctor}</Typography></Link>
        <Menu 
            anchorEl={open}
            open={Boolean(open)}
            onClose={handleClose}
            className={classes.component}
        >
            <MenuItem onClick={() => { handleClose(); logout();}}>
                <PowerSettingsNew fontSize='medium' color='primary'/> 
                <Typography className={classes.logout}>Logout</Typography>
            </MenuItem>
        </Menu>
    </>
    )    
}

export default Doc;