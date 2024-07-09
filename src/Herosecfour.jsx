import React from 'react'
import aboutimg1 from './assets/aboutimg1.png'
import abouimg3 from './assets/abouimg3.png'
import aboutimg4 from './assets/aboutimg4.png'
import heroimg from './assets/heroimg.png'


function Herosecfour() {
    return(
        <div className="heroaboutfour">
            <div className="about-discrip3">
                <h3>Measure & Track Your</h3>
                <h1>Success</h1>
                <h4>Data-Driven Desicions For</h4>
                <h4>Big Wins</h4>
                <h5>Access real-time campaign performance reports soon after posting</h5>
                <h5>with first-party data directly from Instagram, YouTube.and Pinterest</h5>
                <h5>API. Optimise your activity with the support of our expert team</h5>
            </div>
            <div className="heroaboutimg">
                <div className="heroaboutimg1">
                    <div className="imgcontent1">
                    <img className="about-image1" src={aboutimg1} alt="about-img-pic" ></img>
                    </div>
                    <div className="imgcontent2">
                    <img className="about-image2" src={heroimg} alt="about-img-pic" ></img>
                    </div>

                </div>
                <div className="heroaboutimg2">
                    <div className="imgcontent3">
                    <img className="about-image3" src={abouimg3} alt="about-img-pic" ></img>
                    </div>
                    <div className="imgcontent4">
                    <img className="Hero-image4" src={aboutimg4} alt="hero-img-pic" ></img>
                    </div>

                </div>

            </div>
            
        </div>
       

        
    )

}

export default Herosecfour