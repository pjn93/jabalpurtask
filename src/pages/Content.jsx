import React from "react";
import Header from "../component/Header";
import './content.css';
import IMAGE1 from '../images/image1.jpg'
import Par2 from "../paragraph/Par2";
import Para3 from "../paragraph/Para3";
import Para4 from "../paragraph/Para4";
import Para5 from "../paragraph/Para5";
import Para6 from "../paragraph/Para6";
import Para7 from "../paragraph/Para7";
import Para8 from "../paragraph/Para8";
import Para9 from "../paragraph/Para9";
import Footer from "../component/Footer";
import {Link } from 'react-router-dom';

const Content = () => {
  return (
    <div>
      <div className="header-container">
        <Header />
      </div>
      <div className="con">
      <div className="
      container1">
       <div className="div1">
        <img src={IMAGE1} alt="image1" style={{width:'600px'}} className="img11" />
       </div>
       <div className="box2">
   <p className="par1">
   Expanding Your
    Advertising <br/>
     reach!
     </p>
   <p className="par2">Smart User Acquisition Platform For Online Agencies,</p>
    <h4 className="par3" style={{fontSize:'25px',fontWeight:'bolder', marginTop:'10px',textAlign:'center'}}>Brands & Affiliates</h4>
    <div className="butn-box">
    <Link to='/login'>
      <button className="btn">
      <span className="spn">Login</span></button></Link>
      <Link to='/signup'>
      <button className="btn">
      <span className="spn">Sign Up</span></button></Link>
    </div>
       </div>
      </div>
      <Par2/>
      <Para3/>
      <Para4/>
      <Para5/>
      <Para6/>
      <Para7/>
      <Para8/>
      <Para9/>
      <Footer/>
      </div>
</div>
  );
};

export default Content;
