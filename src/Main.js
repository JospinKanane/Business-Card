import React from "react";
import Mail from "./img/Gmail.svg";

const Main = () => <main>
    <div id='intro'>
        <span id='name'>Laura Smith</span>
        <span id='work'>FrontEnd Developer</span>
        <span id='website'>laurasmith.website</span>
        <button>
            <img src={Mail} alt=''/>
            <span>Email</span>
        </button>
    </div>
    <div id='text'>
        <h3>About</h3>
        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h3>Interests</h3>
        <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
    </div>

</main>

export default Main;