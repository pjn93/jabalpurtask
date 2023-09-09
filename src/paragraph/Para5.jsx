import React from 'react';
import './par5.css';
import BLUEICON from '../images/blueicon.jpg';
import ORANGEI from '../images/orangei.jpg';
import YELLOW from '../images/yellow.jpg';
import  SKY from '../images/sky.jpg';
import GREY from '../images/lavendar.jpg';
import PINK from '../images/pink.jpg';

const Para5 = () => {
  return (
    <div>
    <div className='parbox51'>
    <div className='div2'>
      <h1 className='h2'>What we offer</h1>
      </div>
      <div className='parbox511'>
    <div class="flex-container2">
  <div class="flex-item-left2">
  <div>
    <img src={BLUEICON} alt='blue' width='90px' height='90px'/>
  </div>
  <div className='card'>
  <h1>Website Traffic</h1>
  <p className='ppp'>Reach Your Desired Traffic Reach Millions Of Mobile/Tablets And Desktop Users</p>
</div>
  </div>
  
  <div class="flex-item-right2">
  <div>
    <img src={ORANGEI} alt='blue' width='90px' height='90px'/>
  </div>
  <div className='card'>
  <h1>TARGETING</h1>
  <p className='ppp'>
Effective Targeting Options For Performance Campaigns Wide Range Of Media Channels</p>
  </div>
</div>

  <div class="flex-item-right2">
  <div>
    <img src={YELLOW} alt='blue' width='90px' height='90px'/>
  </div>
  <div className='card'>
  <h1>AUDIENCE QUALITY</h1>
  <p className='ppp'>
Ensured By Advanced Anti-Fraud Traffic Filtering System And Trusted Picked Partner Lists</p>
  </div>
  </div>
</div>

    <div class="flex-container2" style={{marginTop:'20px'}}>

  <div class="flex-item-left2">
  <div>
    <img src={SKY} alt='blue' width='90px' height='90px'/>
  </div>
  <div className='card'>
  <h1>CREATIVE</h1>
  <p className='ppp'>
Multiple Ad Formats Push, Pops, Calendar, Native & Banner Ads</p>
  </div>
</div>

  <div class="flex-item-right2">
  <div>
    <img src={GREY} alt='blue' width='90px' height='90px'/>
  </div>
  <div className='card'>
  <h1>CPC/CPM/CPA/CPL</h1>
  <p className='ppp'>
Multiple Business Models Are Available In Our Network</p>
  </div>
</div>

  <div class="flex-item-right2">

  <div>
    <img src={PINK} alt='blue' width='90px' height='90px'/>
  </div>
  <div className='card'>
  <h1>24/7 Support</h1>
  <p className='ppp'>
Our support and moderation team Works 24/7 to ensure the best Service possible</p>
  </div>
  </div>

</div>
    </div>

    </div>
    <div className='parbox52'>
    <div className='parbox521'>
   <h5>TESTIMONALS</h5>
   <h1 style={{fontSize:'37px', marginTop:'-30px'}}>WHAT OUR CLIENTS SAY</h1>
   <p className='p5'>Reach Effect stays ahead of the curve with digital marketing trends and new online channels.</p>
    </div>
    <div className='parbox522'>
  <p className='paragraph2'>"I was Struggling with the technical Issue and your <br/> support team was able to resolve it quickly. I am so <br/> impressed with the level of customer service I received"</p>
  <div className='parbox5221'>
  <img src='https://clickflox.com/wp-content/uploads/2023/07/smiling-corporate-lady-2362136.jpg' alt='profile' className='img'/>
  <p style={{ color: "hwb(0 27% 73%)"}}><span style={{fontSize:'19px', color: "hwb(0 27% 73%)"}}>Nusrin Doe</span><br/><span>Designer</span></p>
</div>
  <div >

  </div>
    </div>
    </div>
    </div>
  )
}

export default Para5
