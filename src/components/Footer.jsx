import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer>
            <div>
                <h6>Created by Rick Heist circa 2023</h6>
                <h6>Email: heistrdev@gmail.com</h6>
                <a href="www.linkedin.com/in/rickheist">
                    <FontAwesomeIcon icon={faLinkedin} className='svg-inline--fa' />
                </a>
                <a href="https://github.com/ruggerheist">
                    <FontAwesomeIcon icon={faGithub} className='svg-inline--fa'/>
                <a href="https://twitter.com">
                    <FontAwesomeIcon icon={faTwitter} className='svg-inline--fa'/>
                </a>
                </a>
            </div>
        </footer>
    )
};