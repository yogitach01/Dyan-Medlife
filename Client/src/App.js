import React from 'react';

import Home from "./components/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ContextProvider from './context/ContextProvider';
import TemplateProvider from './components/TemplateProvider';
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Error from "./pages/Error";
import Doctorhome from "./components/doctor/Doctorhome";
import Consultant from "./components/doctor/consulatnt.jsx";
import Display from "./components/patient/Display";
import Another from "./components/patient/Another";
import Consu from "./components/patient/Consu";
import Doctor from "./components/doctor/Doctor.js"
import Dr from "./components/doctor/Dr";
import Calender from "./components/patient/Calender";
import breastCancer from "./components/Cancer/breastCancer";
import FormLung from "./components/Lung/FormLung";
import LungCancer from "./components/Lung/LungCancer";
import File from './components/imageupload/file';
import Diabetes from './components/Cancer/Diabetes';
const App = () => {
  return (
    <>
    <TemplateProvider>
    <ContextProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/Diabetes" component={Diabetes}/>
        <Route path="/file" component={File } />
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/Doctorhome" component={Doctorhome}></Route>
        <Route path="/Consultant" component={Consultant}></Route>
        <Route exact  path = "/Display" component={Display}></Route>
        <Route exact path="/Consu" component={Consu} ></Route>
        <Route exact path = "/Another" component={Another}></Route>
        <Route exact path="/doctor" component={Doctor} />
        <Route path="/pre" component={Dr} />
        <Route path="/btc" component={breastCancer} />
        <Route path="/lungcancer" component={LungCancer} />
        <Route path="/FormLung" component={FormLung} />
        <Route exact path="/Calender" component={Calender}></Route>

        <Route component={Error}></Route>
      </Switch>
      </BrowserRouter>
    </ContextProvider>
  
  </TemplateProvider>
    </>
  );
};

export default App;
