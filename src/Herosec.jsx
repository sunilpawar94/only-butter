import React from 'react'
import heroimg from './assets/heroimg.png'
import heroimg2 from './assets/heroimg2.png'



function Herosec(){
    return(
        <>
        <div className="herosec">
            <div className="headling1"><h3><span>World Class   </span>Influencer</h3></div>
            <div className="headling2"><h3>Marketing</h3></div>
        </div>
        <div className="herobodytext">
            <h3>India's largest influencer network and the most advanced influencer marketing</h3>
            <h3> platform. Collaborate directly with over 500,000 creators and drive tangible results </h3>
            <h3> and upto 5x better RoAS to scale your brand
            </h3>
        </div>
        <div className="heroimg">
        <img className="Hero-image" src={heroimg} alt="hero-img-pic" ></img>
        </div>
        <div className="herobutton">
        <div className="heroimg2">
        <img className="Hero-image2" src={heroimg2} alt="hero-img-pic2" ></img>
        </div>
        <div className="Button2">
            <button id="btn2">I'm a Brand</button>
        </div>
        <div className="Button3">
            <button id="btn3">I'm a Influencer</button>
        </div>

        </div>

        </>
    )
}
export default Herosec 