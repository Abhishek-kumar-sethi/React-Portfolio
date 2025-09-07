import './contact.css'
import contact from '/image/contact.png'
import telephone from '/image/telephone.png'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

export default function Contact (){
    return(
        <section className="contact" id='contact'>
            <div>
               <h2>Got an idea or a project in mind?</h2>
                <h3>Let’s connect and bring it to life together.</h3>

            </div>
            <div>
                <span>Available for:</span>
                <p> Freelance projects, collaborations, and full-time opportunities.</p>
                <span>Location:</span>
                <p>New Delhi, India</p>
                <span>Contact</span>
                <p style={{display: 'flex', flexDirection: 'column'}}>
                    <a href="mailto:abhisheksethi216@gmail.com">Mail:  abhisheksethi216@gmail.com</a>
                    <a href="tel:+91 9315293300">Phone: +91 9315293300</a>
                </p>
            </div>
        </section>
    )
}