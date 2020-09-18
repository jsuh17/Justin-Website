import React from 'react';
import './Accolades.css';
import NavBar from '../components/navbar.js';
import llama from './llama_justin.png';
import superbowlIcon from './superbowl.svg';
import dpoyIcon from './dpoy.svg';
import uefaIcon from './uefa.svg';

function accolades() {
    return (
        <div className="Accolades">
            <header className="Accolades-background">
                <p className="Accolades-dummy"/>
                <img src={llama} className="llama"/>
            </header>
            <NavBar/>
            <div className="superbowl">
                <p className="superbowl-header">Super Bowl Champion</p>
                <img src={superbowlIcon} className="superbowl-image"/>
                <p className="superbowl-text">
                Justin’s stint with the Suhshank Redemption in 2019 was a master class 
                in fantasy football general management. From drafting Christian McCaffrey 
                to playing Daniel Jones on his NFL starting debut, Justin continually made 
                pivotal decisions en route to a 10-4 regular season record. Under his wise 
                leadership, the Suhshank Redemption swept through the postseason to claim 
                the Super Bowl Championship.
                </p>
            </div>
            <div className="dpoy">
                <p className="dpoy-header">Defensive Player of the Year</p>
                <p className="dpoy-text">
                Justin’s rookie year in the FKBC Summer League marked the arrival of a 
                superstar. Forcing a league leading 3.17 steals per game, Justin’s 
                oppressive full court defense won him the Defensive Player of the Year 
                award, and stole the hearts of fans across the world in the process. 
                Combined with his 3.67 points and 2.67 rebounds per game, Justin was a 
                threat to breakout for a triple single on any given night.
                </p>
                <img src={dpoyIcon} className="dpoy-image"/>
            </div>
            <div className="uefa">
                <p className="uefa-header">UEFA Champions League</p>
                <img src={uefaIcon} className="uefa-image"/>
                <p className="uefa-text">
                This is where Justin’s Champions League trophy would go if he had one. They 
                say it takes both talent and hard work to succeed, but unfortunately Justin 
                lacks both. However, he does have several rec soccer championship 
                trophies, mostly from getting carried by more talented and harder working 
                teammates. However, an often overlooked quality of a winner is luck, which 
                Justin apparently has just enough of.
                </p>
            </div>
        </div>
    );
}
 
export default accolades;