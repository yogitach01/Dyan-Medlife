import React from "react";
import Home from "./components/Home";
import About from "./pages/About";

import ContextProvider from './context/ContextProvider';
import TemplateProvider from './components/TemplateProvider';
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Error from "./pages/Error";
import Doctorhome from "./components/doctor/Doctorhome";
import LungCancer from "./components/Cancer/LungCancer";
import Lc from "./components/Cancer/Lc";
import HowItWorks from "./components/Howitworks";
import Doctor from "./components/doctor/Doctor.js"
import Dr from "./components/doctor/Dr";
import Btc from "./components/Cancer/Btc";
import breastCancer from "./components/Cancer/breastCancer";
const App = () => {
  return (
    <>
    <TemplateProvider>
    <ContextProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/Doctorhome" component={Doctorhome}></Route>
        <Route exact path="/doctor" component={Doctor} />
        <Route path="/pre" component={Dr} />
        <Route path="/btc" component={Btc}/>
        <Route path="/breastcancer" component={breastCancer}/>
        <Route path="/Lc" component={Lc}/>
        <Route path="/LungCancer" component={LungCancer}/>
        <Route component={Error}></Route>
      </Switch>
      </BrowserRouter>
    </ContextProvider>
  
  </TemplateProvider>
    </>
  );
};

export default App;
