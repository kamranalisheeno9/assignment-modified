import React from 'react';

function Footer(props) {
    return (
        <div className='footer-container'>

        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
         <p style={{color:"white",textAlign:"center",padding:"50px",marginTop:"20px",textTransform:"uppercase",backgroundColor:"#404040",color:"gray",cursor:"pointer"}}>Link 1</p>   
         <p style={{color:"white",textAlign:"center",padding:"50px",marginTop:"20px",textTransform:"uppercase",backgroundColor:"#404040",color:"gray",cursor:"pointer"}}>Link 2</p>   
         <p style={{color:"white",textAlign:"center",padding:"50px",marginTop:"20px",textTransform:"uppercase",backgroundColor:"#404040",color:"gray",cursor:"pointer"}}>Link 3</p>   
         <p style={{color:"white",textAlign:"center",padding:"50px",marginTop:"20px",textTransform:"uppercase",backgroundColor:"#404040",color:"gray",cursor:"pointer"}}>Link 4</p>   
        </div>
        </div>
    );
}

export default Footer;