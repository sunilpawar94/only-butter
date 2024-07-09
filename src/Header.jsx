import React from 'react'
import barterpic from './assets/barter.png'




function Header(){
    return(
        <div className="Header">
            
            <img className="Header-image" src={barterpic} alt="barter-pic" ></img>
            <div className="Content">
                <div>Home</div>
            </div>
            <div className="Content">
                <div>Who we are</div>
            </div>
            <div className="Content">
                <div>Expertice</div>
            </div>
            <div className="Content">
                <div>Services</div>
            </div>
            <div className="Content">
                <div>Creator</div>
            </div>
            <div className="Content">
                <div></div>
            </div>
            <div className="Content">
                <div>LOGIN</div>
            </div>
            <div className="Button">
                <button id="btn">SET DETAIL</button>
            </div>
            <div className="Symbol">
                <div><i class="uil uil-setting"></i></div>
            </div>
        </div>

    )
}

export default Header 