import React from 'react';
import './para8.css';
import ARR from '../images/arr.png'

const Para8 = () => {
  return (
    <div className='para8'>
    <div className='parabox8' style={{ width:'50%', textAlign:'left', float:'right'}}>
      <h1 style={{fontSize:'2.2rem'}}>EXPLORE THE WORLD</h1>
      <hr style={{border:'1.8px solid #fb2056;', width:'60px' ,marginLeft:'0px'}}/>
      <p className='para81'>Diremit mundi mare undae nunc mixtam tanto sibi. Nubes unda concordi.<br/> Fert his. Recessit mentes praecipites locum caligine sui egens erat. Silvas <br/> caeli regna.</p>
      <button className="btn3 button">
              <div style={{display:'flex',  justifyContent:'center', gap:'10px'}}>
              <h4> Learn More</h4>
              <img src={ARR} alt="arr" width='20px' height='20px' style={{marginTop:'15px'}}/>
              </div>
             </button>
    </div>
    </div>
  )
}

export default Para8
