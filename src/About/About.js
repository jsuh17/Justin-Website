import React from 'react';
import './About.css';
import picture from './about_picture.svg';
import NavBar from './../components/navbar.js';


function about() {
    return (
        <div className="About">
            <header className="About-background">
                <p className="About-dummy"/>
            </header>
            <NavBar/>
            <p className="About-name"> Justin J. Suh </p>
            <span className="About-content">
                <img src={picture} className="About-picture"/>
                <p className="About-blurb">
                    Justin is a senior at Duke University majoring in Computer Science and minoring 
                    in Psychology. He was born on December 9, 1998 in Los Angeles, California, but 
                    moved to Northern Virginia when he was very young. He has an older brother and a 
                    younger sister, but as the only one amongst his siblings with a sense of filial 
                    piety, Justin is alone in living with and serving their parents. Currently, Justin 
                    juggles his time between school, stupid side projects, practicing guitar, and 
                    watching Korean dramas. He dreams of one day becoming fluent in Korean so that he 
                    doesn’t need to look at that subtitles while he watches. 
                </p>
            </span>
        </div>
    );
}
 
export default about;