import React from 'react';
import './para9.css';
import BOX1 from '../images/box1.jpg';
import BOX2 from '../images/box2.jpg';
import BOX3 from '../images/box3.jpg';
import BOX4 from '../images/box4.jpg';

const Para9 = () => {
  return (
    <div className='para9'>
      <div className='para91'>
        <h1 className='heading'>UPCOMING TOURS & DESTINATION</h1>
        <hr style={{border:'1.8px solid tomato', width:'55px' ,marginLeft:'0px', marginTop:'-5px'}}/>
        <p className='paragraph91'>
        Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris. Sinistra possedit litora ut nabataeaque. Setucant coepyterunt perveniunt animal! Concordi aurea nabataeaque seductaque constaque cepit sublime flexi nullus.
        </p>
        <button className='butn btn'>Learn more</button>
      </div>
      <div className='para92'>
      <div className='para921'>
         <img src={BOX1} alt='img11' className='box1 img12' width='400px' height='270px'/>
         <img src={BOX2} alt='img12'
        className='box1 img12' width='400px'
         />
      </div>
      <div className='para922'>
         <img className='img13' src={BOX3} alt='img13'
          width='400px' />
         <img src={BOX4} alt='img14' className='box1 img12' width='400px' height='250px'/>
      </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Para9
