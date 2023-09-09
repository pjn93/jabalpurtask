import React from 'react';
import './par3.css'
import BINANCE from '../images/binance.jpg';
import PAXUM from '../images/paxum.jpg';
import PAYONEER from '../images/payoneer.jpg';
import PAYPAL from '../images/paypal.jpg';
import VISA from '../images/visa.jpg';
import WIRE from '../images/wire.jpg';


const Para3 = () => {
  return (
    <div className='parbox3'>
    <div className='parbox31'>
    <h1 className='h1'>MULTIPLE PAYMENT SOLUTIONS</h1>
    <div className='parbox311'>
    <img className='
    img1' src={PAYPAL} alt='img1'/>

    <img className='
    img1' src={PAYONEER} alt='img2'/>

    <img className='
    img1' src={WIRE} alt='img3'/>
    </div>
    <div className='parbox311 pp31'>
    <img className='
    img1' src={VISA} alt='img4'/>
    <img className='
    img1' src={BINANCE}  alt='img5'/>
   <img className='
    img1' src={PAXUM} alt='img6'/>
    </div>
    </div>

    <div className='parbox32'>
    <div className='parbox321'>
    <img className='mobile' src="https://clickflox.com/wp-content/uploads/2023/07/c11.webp" alt='img7' width='470' height='770' style={{marginTop:'-20px'}}/>
    </div>
    <div className='parbox322'>
    <h1>PAY ONLY FOR QUALIFIED USERS</h1>
    <p className='para'>
Advertising With Reacheffect Is A Wise Decision That Pays Off In The <br/>
Long Run. You’ll Pay Only For Qualified Users To Increase Your Return <br/>
On Investment (ROI) And Decrease Your Cost Per Acquisition (CPA). By <br/>
Focusing On A Specific Audience, You’ll Increase Your Chances Of <br/>
Converting Potential Customers, Which In Turn Leads To A Greater ROI <br/>
And Lower CPA.
</p>
</div>

    </div>

  </div>
  )
}

export default Para3
