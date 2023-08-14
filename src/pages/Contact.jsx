// import React, { useState } from "react";

export default function Contact() {
    return (
        <form className="contact-wrapper">
            <h2 className="contact-header">Contact Me</h2>
            <div className="form-group">
                <label for="exampleInputEmail1"></label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
            </div>
            <div className="form-group">
                <label for="exampleName"></label>
                <input type="text" className="form-control" placeholder="What's Your Name?"/>
            </div>
            <div className="form-group">
                <label className="form-check-label" for="textarea" id="textarea"></label>
                <textarea rows="4" maxLength={300} required className="form-control" placeholder="What would you like to tell me?"/>                
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
};