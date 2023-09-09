import React from 'react';
import PARA4 from '../images/para4.jpg'
import './para4.css';

const Para4 = () => {
  return (
   
      <div className='parbox42'>
    <div className='parbox421'>
    <div class="flex-container1">
  <div class="flex-item-left1">
  <h1 style={{color:'tomato', fontSize:'3.4rem'}}>80K+</h1>
  <p className='ppp'>Active Publisher</p>

  </div>
  <div class="flex-item-right1">
  <h1 style={{color:'tomato',fontSize:'3.4rem'}}>40%</h1>
  <p className='ppp'>Desktop Traffic</p>
  </div>
</div>
    <div class="flex-container1" style={{marginTop:'20px'}}>
  <div class="flex-item-left1">
  <h1 style={{color:'tomato', fontSize:'3rem'}}>100Million</h1>
  <p className='ppp'>User with top <br/> performing ad formats</p>
  </div>
  <div class="flex-item-right1">
  <h1 style={{color:'tomato', fontSize:'3.4rem'}}>60%</h1>
  <p className='ppp'>Mobile/Tablet Traffic</p>
  </div>
</div>
    </div>
    <div className='parbox422'>
    <img src={PARA4} className='img422'  alt='img7' width='600' height='550' style={{marginTop:'-20px'}}/>
</div>

    </div>
  )
}

export default Para4
