import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last ">
              <h1 className="display-2">
                Online Health check up made <br /> Easy For You.
              </h1>
              <p className="main-hero-para">
              Medical inflation is rising at an unprecedented rate. 
              Something as simple as a regular medical exam could set you back a few thousand. 
              This is precisely why Regular Health Check up  is so critical.

At DYAN MEDLIFE, we understand that your Health needs are as unique as you are.
 That’s why we’ve created a range of Disease Predicting System, that fulfil various needs.
 All our health checkup offerings come with cover for any pandemic situation that can interupt our health check up in furure,
  ensuring you’ll always be taken care of, even during the pandemic!

              </p>
              </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images order-md-first order-sm-first">
              <img
                src="https://th.bing.com/th/id/OIP.bK_afgJWwU52g1vR2WMKfQHaEo?w=289&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                alt="heroimg"
                className="img-fluid"
              />
              <img
                src="https://th.bing.com/th/id/OIP.AJ1jwWOylxEU_vzLugMIggHaEo?w=287&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                alt="heroimg4"
                className="img-fluid main-hero-img2"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;