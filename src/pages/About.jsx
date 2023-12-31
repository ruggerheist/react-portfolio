import React from "react";
import profile from "../assets/profile.jpg";

export default function About() {
    return (
        <section class="about-me-wrapper">
        <h2 className="about-header">What About Rick?</h2>
        <img className="profile-pic" src={profile} alt="profilePic" style={{border: "2px solid #E2BF36"}}/>
        <p>
            I am a full stack web developer currently finishing my certificate at UPenn. I have experience with HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, MySQL, and Git.
            My background is in sales and project management and I currently run and manage a warehouse for a mid-sized roofing company. I have a bachelor's degree in professional studies from West Chester University, and I served in the United States Marine Corps with a combat deployment to Iraq. I am a problem solver, team player, and hard worker always looking forward to the next task. 
        </p>
        <p>
            I am currently looking for a part time postion or paid internship to continue learning and growing as a developer. I am also open to full time positions if the right opportunity presents itself.
        </p>
        <p>
            When I am not working, coding, or studying, I enjoy spending time with my wife and son, playing video games, snowboarding, and watching our Eagles Fly!
        </p>
        </section>
    );
}