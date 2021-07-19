import React from 'react';
import travel from '../../img/voyage.png';
import memory1 from '../../img/preview-xl.jpg';
import memory2 from '../../img/preview.jpg';
import calculator from '../../img/calculator.jpg';
import resume from '../../img/resume.jpg';
import '../../css/prefixed/Portfolio.css';


function Portfolio() {
    return (
        <section id="portfolio">
            <div id="title-portfolio">
                <h1 id="main-title-portfolio">Web Developer Portfolio</h1>
                <h3 id="subtitle-portfolio">From my very first projects in pure HTML5, CSS3, Javascript, to more advanced projects in React and Node Js. Check out my latest web software development portfolio projects.</h3>
            </div>
            <div className="project">
                <a href="https://www.nicolasdenorme.fr/">
                    <img src={resume} alt="Beautiful resume"/>
                </a>
                <p className='caption'>You already know this one. Building my online resume and portfolio made me practice the following skills : React JS, Webpack,NPM, Node JS,Responsive Website Design,MongoDB, Figma and CSS3. I did everything from the design to the realization and deployment.</p>
            </div>
            <div className="project">
                <a href="https://calculator.nicolasdenorme.fr/">
                    <img src={calculator} alt="Calculator"/>
                </a>
                <p className='caption'>A small calculator app written in HTML5,CSS3 and pure Javascript.</p>
            </div>
            <div className="project">
                <a href="https://snake.nicolasdenorme.fr/">
                    <img src="https://image.winudf.com/v2/image/Y29tLnNuYWtlY29tcGFueS5zbmFrZWdhbWVfc2NyZWVuXzFfanhsM21pams/screen-1.jpg?fakeurl=1&type=.jpg" alt="snake game"/>
                </a>
                <p className='caption'>We all know this game, I have created a website version of it with pure Javascript.</p>
            </div>
            <div className="project">
                <a href="https://memorygame.nicolasdenorme.fr/">
                    <img src={memory1} alt="memory game"/>
                </a>
                <p className='caption'>Another memory game, with the same technologies as the previous one but with a better layout.</p>
            </div>
            <div className="project">
                <a href="https://memory.nicolasdenorme.fr/">
                    <img src={memory2} alt="memory game"/>
                </a>
                <p className='caption'>A memory game also written in pure HTML5,CSS3 and Javascript. Check it out!</p>
            </div>
            <div className="project">
                <a href="https://travel.nicolasdenorme.fr/">
                    <img src={travel} alt="travel agency"/>
                </a>
                <p className='caption'>This is my very first project when I have started this journey to become a Web Developer, HTML5 and CSS3 only.</p>
            </div>
        </section>
    );
}

export default Portfolio;
