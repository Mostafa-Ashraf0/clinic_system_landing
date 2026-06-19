'use client';
import { FaLinkedin, FaFacebook, FaYoutube, FaWhatsapp, FaPhone, FaMailBulk } from "react-icons/fa";
import '../../../style/header.css';
import { useState, useEffect } from 'react';


const HeaderLinks = ()=>{
    const [scrolled, setScrolled] = useState(false);
      useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return(
        <div className="header-links-container">
            <ul>
                <li>
                    <a href=""><FaLinkedin size={16} color={scrolled?"white":"#0A66C2"} style={{transition:".3s ease"}}/></a>
                </li>
                <li>
                    <a href=""><FaFacebook size={16} color={scrolled?"white":"#1877F2"} style={{transition:".3s ease"}}/></a>
                </li>
                <li>
                    <a href=""><FaYoutube size={16} color={scrolled?"white":"#FF0000" } style={{transition:".3s ease"}}/></a>
                </li>
                <li>
                    <a href=""><FaWhatsapp size={16} color={scrolled?"white":"#25D366"} style={{transition:".3s ease"}}/></a>
                </li>
            </ul>
            <div className="header-links-contact">
                <a href="">
                    <FaPhone size={16} color={scrolled?"white":"#0A66C2"} style={{transition:".3s ease"}}/>
                    <span style={scrolled?{color:"white"}:{color:"black"}}>+201028129241</span>
                </a>
                 <a href="">
                    <FaMailBulk size={16} color={scrolled?"white":"#0A66C2"} style={{transition:".3s ease"}}/>
                    <span style={scrolled?{color:"white"}:{color:"black"}}>clinic@gmail.com</span>
                </a>
            </div>
        </div>
    )
}

export default HeaderLinks;