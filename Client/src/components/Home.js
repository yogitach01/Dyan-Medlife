import Header from './Header';
import '../App.css';
import { useContext } from 'react';
import Navbar from './Navbar';
import HowItWorks from './Howitworks';
import AboutUs from './AboutUs';
import Contact from './Contact'
import Footer from './Footer';
import { Box } from '@material-ui/core';
import {LoginContext} from '../context/ContextProvider';
import Patient from './patient/Patient';
 import Doctorhome from './doctor/Doctorhome';
const Home=()=> {
  
  
  const { patient, setPatient,doctor,setDoctor,open,setOpen,dr,setDr} = useContext(LoginContext);

  return (
    <>
    <Box>

<Navbar />
{
patient ?<Patient />:
doctor? <Doctorhome />:
<>
<Header />
<HowItWorks />
<AboutUs />
<Contact />
</>
}
<Footer />
</Box>
    </>

  );
}

export default Home;
