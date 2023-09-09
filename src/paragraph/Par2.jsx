import React from 'react';
import './par2.css';
import BLUE from '../images/img2.jpg';
import ORANGE from '../images/img3.jpg';
import GREEN from '../images/img4.jpg';
import PURPLE from '../images/img5.jpg';

const Par2 = () => {
  return (
    <div className='parbox2'>
      <div className='parbox21'>
         <h3>Why Working With Us?</h3>
          <h3 className='pp1'>Our platform is Built for Direct <br/> Advertisers, Affiliates, Agencies <br/> & Partner Networks</h3>
          <p className='pp2'>With our extensive targeting choices and diversified sources of high-quality traffic from Pop, Push, Banner, and Native ads, you can maximize  your return on investment. Our user-friendly platform and knowledgeable support staff will walk you through each stage of your campaign journey. Utilize our cutting-edge technology with real-time reporting and statistics to gain insightful knowledge into the effectiveness of your online presence. Get started with Reacheffect today   and take your business to the next level.</p>
      </div>
      <div className='parbox22'>
       
<div class="flex-container">
  <div class="flex-item-left">
  <img className='circle' src={BLUE} alt='blue' style={{height:'70px'}}/>
  <h3>24/7 Online Support</h3>

  </div>
  <div class="flex-item-right">
  <img className='circle' src={ORANGE} alt='blue' style={{height:'70px'}}/>
  <h3>Multiple Ad Formats</h3>
  </div>
</div>
    <div class="flex-container" style={{marginTop:'20px'}}>
  <div class="flex-item-left">
  <img className='circle' src={GREEN} alt='blue' style={{height:'70px'}}/>
  <h3>Multiple Payment <br/>Solution</h3>
  </div>
  <div class="flex-item-right">
  <img className='circle' src={PURPLE} alt='blue' style={{height:'70px'}}/>
   <h3>Analytics Report in  <br/> real time</h3>
  </div>
</div>
         
      </div>
    </div>
  )
}

export default Par2
