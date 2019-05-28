import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import './Socials.css';

const Socials = () => {
    return (
        <div className='socials'>
            <div>
                <a href='https://wwww.facebook.com'><FaFacebookF size={15} /></a>
            </div>
            <div>
                <a href='https://wwww.twitter.com'><FaTwitter size={15} /></a>
            </div>
            <div>
                <a href='https://wwww.instagram.com'><FaInstagram size={15} /></a>
            </div>
        </div>
    )
}

export default Socials;