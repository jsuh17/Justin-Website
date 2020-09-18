import React from 'react';
import './Projects.css';
import NavBar from '../components/navbar.js';
import cloud from './cloud.svg';

function projects() {
    return (
        <div className="Projects">
            <header className="Projects-background">
                <p className="Projects-dummy"/>
            </header>
            <NavBar/>
            <div className="turkeybowl">
                <p className="turkeybowl-header"> Turkey Bowl</p>
                <div className="turkeybowl-wrapper">
                    <p className="turkeybowl-text">
                    After 8 years of experience in Turkey Bowl football, Justin is still 
                    searching for his first ring. His youth career consisted of years of 
                    falling just short, highlighted by a cinderella run in 2013 culminating 
                    in a blowout defeat in the finals.
                    </p>
                    <p className="turkeybowl-text">
                    After believing his journey was over upon his high school graduation, 
                    Justin was ecstatic to find a second chance in North Carolina. Unfortunately, 
                    in his 4-year contract cut short by logistical issues and a global pandemic, 
                    Justin only added another heartbreaking finals loss to his resume.
                    </p>
                    <p className="turkeybowl-text">
                    If this is the end of the road, Justin finds solace in knowing that he joins 
                    the pantheon of legends including Barry Sanders and Randy Moss who were never 
                    able to overcome the final hurdle.
                    </p>
                </div>
            </div>
            <div className="hair">
                <p className="hair-header"> Hair Cultivation </p>
                <div className="hair-wrapper">
                    <p className="hair-text">
                    Where others saw a pandemic, Justin saw an opportunity. A hermetic isolation 
                    devoid of social interaction, while not ideal, was the perfect environment to 
                    test the limits of the genetics he was blessed/cursed with. Faced with this 
                    once in a lifetime chance, Justin decided to unleash the wild and uncontrollable 
                    mess that is his hair.
                    </p>
                    <p className="hair-text">
                    March 2, 2020, the last day that a blade touched Justin’s hair. Over 6 months 
                    and nearly 3 inches later, Justin is pleased with the results, but still feels 
                    as though there is still much undiscovered potential left to uncover. He hopes 
                    the project still has many months left to go. It started as a bit of a joke, 
                    but now it has become an essential part of Justin’s personality and the only 
                    thing people talk to him about.
                    </p>
                </div>
            </div>
            <div className="marriage">
                <p className="marriage-header"> Covenental Matrimony </p>
                <div className="marriage-wrapper">
                    <p className="marriage-text">
                    Justin had hoped to be further along this project at this point in time, but remains 
                    confident in God’s plan and timing.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default projects;
