// import styles from './css/nav.module.css';
import React from 'react';

export default function Nav({setpage}) {
    return (
        <nav>
            <ul class="nav nav-justified">
                <li class="nav-link" onClick={() => setpage('About')}> About ME </li>
                <li class="nav-link" onClick={() => setpage('Portfolio')}> Portfolio </li>
                <li class="nav-link" onClick={() => setpage('Contact')}> Contact </li>
                <li class="nav-link" onClick={() => setpage('Resume')}> Resume </li>
            </ul>
        </nav>        
    )
}