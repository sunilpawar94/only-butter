import React from 'react'
import aboutimg1 from './assets/aboutimg1.png'
import abouimg3 from './assets/abouimg3.png'
import aboutimg4 from './assets/aboutimg4.png'
import heroimg from './assets/heroimg.png'


function Herosectwo() {
    return(

        <div className="heroabout">
            <div className="about-discrip">
                <h3>Elevate Your</h3>
                <h1>Brand</h1>
                <h4>Ensure the success</h4>
                <h4>your next campaign</h4>
                <h5>Barter campaigns no longer need to be inconvenient & time consuming.</h5>
                <h5>we transforms a tedious manual process into an automated flow</h5>
                <h5>allowing for seamless execution at every stage</h5>
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

export default Herosectwo