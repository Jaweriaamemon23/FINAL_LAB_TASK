import React from 'react';
import App from '../App';
import but from '../Assets/Play Button.png'
import img from '../Assets/Group 166 (2).png'
import backgr from '../Assets/Group 166.png'
function HeroSection() {
  const bgStyle = {
    backgroundImage: 'backgr',
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh',
    display: 'flex',
  };

  return (
    <>
    <div className='bg2'>
    <div className='container bg text-center'>
          <div className='row'>
            <div className='col-lg-12 col-sm-12 col-md-12'>
              <h1 style={{paddingTop:"50px"}}>
                Web3Makr Redefining
                <br /> How You Create
              </h1>
              <p >Unlock the blockchain potential to create Web3 Applications</p>
    <br></br>
              <img 
              src={but}
              alt="Your Logo"
              width="55"
              height="55"
              className="d-inline-block align-top"
            />
    <br></br>
    
                  <img style={{paddingTop:"40px"}}
              src={img}
              alt="Your Logo"
              width="500"
              height="400"
              className="d-inline-block align-top"
            />
    
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
