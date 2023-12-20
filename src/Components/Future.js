import React from 'react';
import img5 from '../Assets/Group 180.png'
import img6 from '../Assets/Group 182.png'

function Future(){
    return(
<>
<div className='bg-dark'>
<div className='container' >
    <div className='row'>
        <div className='col-lg-12 col-sm-12 text-center text-white'style={{paddingtop:"30px"}}>
<br></br>
<br></br>
<h1>The future of Web3 NoCode  
</h1>
<p>Web3Makr allows you to incorporate top ranked blockchain platforms into your work through the drag and drop feature.
</p>
</div>
<br></br>
<br></br>
<div className='col-lg-6 col-sm-6  text-white'>

<br></br>
<br></br>
<h6>Multichain</h6>
<h6>Dashboard</h6>
<h6>Tool</h6>

</div>
<div className='col-lg-6 col-sm-6 '>
<img 
              src={img5}
              alt="Your Logo"
              width="70%"
              height="50%"
              className="d-inline-block align-top"
            />
<br></br>
<img 
              src={img6}
              alt="Your Logo"
              width="70%"
              height="50%"
              className="d-inline-block align-top"
            />

</div>   
</div>
</div>
</div>
</>

    );
}
export default Future;