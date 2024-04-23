import React from 'react';
import homeimg from "../assets/welcome.png"
import "./homecomp.css"


const Home = () => {
    return (
        <div style={{backgroundColor:"antiquewhite"}}>
            <img className='image-homecom' src={homeimg}></img>
            
        </div>
    );
}

export default Home;
