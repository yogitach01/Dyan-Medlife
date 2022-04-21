import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import workapi from "../../API/doctorapi";



const HowItWorks = () => {
    const [workData, setWorkData] = useState(workapi);
    
    return (
      <>
        <section>
          <div className="work-container container">
            <h1 className="main-heading text-center">Whats in for you?</h1>
            <div className="row">
               {   workData.map((curElem) => {
                const { id, logo, title, info,link } = curElem;
                return (
                  <>
                  <NavLink to={`${link}`} >
                    <div className="col-12 col-lg-4 text-center work-container-subdiv">
                      <i class={`fontawesome-style ${logo}`}></i>
                      <h2 className="sub-heading">{title}</h2>
                      <p className="main-hero-para w-100">{info}</p>
                    </div>
                  </NavLink>
                  </>
                );
              })}
              </div>
          </div>
        </section>
      </>
    );
  };
  
  export default HowItWorks;