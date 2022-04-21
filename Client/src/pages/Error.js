import React from "react";
import Error404 from "../components/Error404";

import Navbar from '../components/Navbar';

import Footer from '../components/Footer';

const Error = () => {
  return (
    <>
      <Navbar />
      <Error404 />
      <Footer />
    </>
  );
};

export default Error;