import React, { useState,useContext } from "react";
import { NavLink ,Link} from "react-router-dom";
import { LoginContext } from "../context/ContextProvider";
import Profile from './Profile';
import Doc from './Doc';
import {Box, Button} from '@material-ui/core';
import LoginDialog from './LoginDialog';
import LoginDi from './LoginDi'
const Navbar = () => {
  const [show, setShow] = useState(false);
 
  const { patient, setPatient,doctor,setDoctor,open,setOpen,dr,setDr} = useContext(LoginContext);
  const openDialog = () => {
  setOpen(true);
  }
  const openDr=()=>{
  setDr(true);
  
  }
  return (
    <><Box>      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container">
            <a class="navbar-brand" href="#">
                
            <img src="https://www.bing.com/images/search?view=detailV2&ccid=nWE027oH&id=11C50EE19DDB9773D4352669BFD5A47C51E779EB&thid=OIP.nWE027oHEB0-fPAV1pq4igHaGb&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.9d6134dbba07101d3e7cf015d69ab88a%3frik%3d63nnUXyk1b9pJg%26riu%3dhttp%253a%252f%252fclipart-library.com%252fimages_k%252fmedical-symbol-transparent-background%252fmedical-symbol-transparent-background-23.png%26ehk%3d8LEMcQkkLCfsrv2R3godNSNhRs7pvlAIEJnlSFmvIgU%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=986&expw=1136&q=logo+for+medical+website+png&simid=607992654418560503&FORM=IRPRST&ck=9761A422AF65124031556394B8C88573&selectedIndex=15&ajaxhist=0&ajaxserp=0"  alt="logo" />
            <space>                 </space>
              
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <NavLink class="nav-link active" aria-current="page" to="/">
                    Home
                  </    NavLink>
                </li>
           
                <li class="nav-item">
                  <NavLink class="nav-link" to="/about">
                    About
                  </    NavLink>
                </li>
                <li class="nav-item">
                <NavLink class="nav-link" to="/contact">
                    Contact US
                  </    NavLink>
                </li>
              </ul>
              <Box className="d-flex">
{ patient ?
<Profile patient={patient} setPatient={setPatient}  />:
doctor ?
<Doc  doctor={doctor} setDoctor={setDoctor} /> : <>

 <Button class="btn  btn-style" type="submit" onClick={()=>openDialog()}>
 Patient 
 </Button>
 
 < Button class="btn  btn-style" type="submit"  onClick={()=>openDr()}>
                    Doctor 
                    </Button></>
}                   
              </Box>
            </div>
          </div>
        </nav>
        <LoginDialog setPatient={setPatient} />;
        <LoginDi setDoctor={setDoctor} />;
            
      </section>
      
    
      </Box>
    </>
  );
};

export default Navbar;