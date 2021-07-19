import { React, useState, useEffect } from 'react';
import '../../css/prefixed/About.css';
import Typewriter from 'typewriter-effect';
//import { Link } from 'react-router-dom';
import Resume from '../../Documents/CV-Nicolas-Denorme.pdf';

function About() {

    const [isHidden, setIsHidden] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {

            setIsHidden(false);

        }, 17000);
        return () => clearTimeout(timer);
    }, []);

    

    return (
        <section id="about">
            <div className="writer-wraper">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80)
                            .typeString("<h1 className='main-title'>Hello, my name is Nicolas Denorme.</h1>")
                            .start()
                    }}

                    options={{
                        cursor: ""
                    }}

                />
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.pauseFor(2500)
                            .changeDelay(80)
                            .typeString("<h3 className='other-title'>I am a junior Web Developer specialized in the <strong classname='bold'>Javascript</strong> language.</h3>")
                            .start()
                    }}
                    options={{
                        cursor: ""
                    }}

                />
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.pauseFor(8000)
                            .changeDelay(80)
                            .typeString("<h3 className='other-title'>Feel free to take a look at my latest projects on the web portfolio page.</h3>")
                            .start()
                    }}
                    options={{
                        cursor: ""
                    }}

                />
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.pauseFor(15000)
                            .changeDelay(80)
                            .typeString("<h3 className='other-title'>Remotely available.</h3>")
                            .start()
                    }}
                    options={{
                        cursor: ""
                    }}

                />
            </div>
            <div className="btn-container">
                <a href={Resume} target="blank"><button className={isHidden ? 'hidden' : 'btn'}><span className="hire-me">Download Resume</span></button></a>
            </div>
        </section>
    );
}

export default About;

