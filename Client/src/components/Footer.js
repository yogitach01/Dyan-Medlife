import React from "react";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container"><center>
          <div className="row">
             <div className="col-6 col-lg-12">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <i class="fab fa-facebook-f fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                        <i class="fab fa-instagram fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-youtube fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-twitter fontawesome-style"></i>
                    </div>
                  </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100 ">
                  Copyright @ 2021 DYAN MEDLIFE. All rights reserved.
                </p>
              </div>
            </div></center>
            </div>
      
      </footer>   
       </>
  );
};

export default Footer;