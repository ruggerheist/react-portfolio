// import React, { useState } from "react";

export default function Contact() {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     if (name === 'name') {
    //         setName(value);
    //     }
    //     if (name === 'email') {
    //         setEmail(value);
    //     }
    //     if (name === 'message') {
    //         setMessage(value);
    //     }
    // };

    return (
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
            </div>
            <div class="form-group">
                <label for="exampleName">Name</label>
                <input type="text" class="form-control" placeholder="What's Your Name?"/>
            </div>
            <div class="form-group">
                <label class="form-check-label" for="textarea" id="textarea">Check me out</label>
                <textarea rows="4" maxLength={300} required class="form-control"/>                
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
};