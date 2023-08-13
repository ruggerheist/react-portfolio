// import React, { useState } from "react";

export default function Contact() {
    return (
        <form>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
            </div>
            <div className="form-group">
                <label for="exampleName">Name</label>
                <input type="text" className="form-control" placeholder="What's Your Name?"/>
            </div>
            <div className="form-group">
                <label className="form-check-label" for="textarea" id="textarea">I like messages</label>
                <textarea rows="4" maxLength={300} required className="form-control" placeholder="What would you like to say?"/>                
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
};