import React from "react";
import image2 from '../Assets/Group 167.png'
import image3 from '../Assets/Group 168.png'
import image4 from '../Assets/Group 168 (1).png'
import image5 from '../Assets/Group 69.png'

import App from "../App";
import { Button } from "react-bootstrap";
function Section2(){
    return(
<>
<div className='bg'>
    <div className="container">
<div className="row">


<img 

src={image2}
style={{paddingTop:'30px'}}              alt="Your Logo"
              width="100%"
              height="100%"
              className="d-inline-block align-top"
            />
<div className="col-lg6 col-sm-6">
<h2 style={{fontFamily:'inter', paddingTop:'40px' , fontSize:'40px'}}>Create<br></br>
your own <br></br>Web3 Masterpiece </h2>
<p style={{paddingTop:'20px'}}>Most entrepreneurs want to <br></br>create their own web3 sites,<br></br> unfortunately, they dont know<br></br> much about creating one. Web3Makr<br></br> makes it easier for newbies to<br></br> create a blockchain-based collectibles<br></br> solution without the hassle of <br></br> leaving their favorite creation tools<br></br>  and by simple drag and drop functionality.</p>
<Button type="button" variant="success" style={{ fontSize: '20px', backgroundColor: 'purple', padding: '15px 30px', borderRadius: '10px' }}>
                Start Building
                </Button>
                </div>
<div className="col-lg6 col-sm-6">
<img 
src={image3}
style={{paddingRight:'30px',paddingTop:'70px'}}
              alt="Your Logo"
              width="100%"
              height="100%"
              className="d-inline-block align-top"
/>
</div>
</div>
<div className="row">

<div className="col-lg6 col-sm-6">
<img 
src={image4}
style={{paddingRight:'30px',paddingTop:'70px'}}
              alt="Your Logo"
              width="100%"
              height="70%"
              className="d-inline-block align-top"
/>
</div>
<div className="col-lg6 col-sm-6">
<h2 style={{fontFamily:'inter', paddingTop:'40px' , fontSize:'50px'}}>Can be <br></br>
your own <br></br>changed to <br></br>customizable<br></br> ready made web3<br></br> dapps templates.  
 </h2><img 
src={image5}
style={{paddingRight:'30px',paddingTop:'70px'}}
              alt="Your Logo"
              width="30%"
              height="30%"
              className="d-inline-block align-top"
/>
</div>

</div>
</div>



</div>
</>

    ) ;
}
export default Section2;