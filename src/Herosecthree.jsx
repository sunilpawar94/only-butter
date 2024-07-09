import React from "react";
import aboutimg1 from './assets/aboutimg1.png'
import abouimg3 from './assets/abouimg3.png'
import aboutimg4 from './assets/aboutimg4.png'
import heroimg from './assets/heroimg.png'


function Herosecthree() {
    return(
        <div className="heroabouthree">
            
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
            <div className="about-discrip2">
                <h3>Empowered Creators Micro,</h3>
                <h2>Nano & Beyond</h2>
                <h4>Ensure the success</h4>
                <h1>your next campaign</h1>
                <h5>Barter campaigns no longer need to be inconvenient & time consuming.</h5>
                <h5>we transforms a tedious manual process into an automated flow</h5>
                <h5>allowing for seamless execution at every stage</h5>
            </div>




        </div>
    )
}

export default Herosecthree