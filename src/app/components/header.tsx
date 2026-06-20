'use client';
import '../../style/header.css';
import Button from './Button';
import HeaderLinks from './header/HeaderLinks';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Header = ()=>{
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
        <header className={scrolled?'header-scroll':'header'}>
            <HeaderLinks/>
            <div className="header-container">
                <div className='img'>
                    <Image 
                    width={200}
                    height={60}
                    src="/Alliance_Healthcare_logo.svg" 
                    alt="" />
                </div>
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>About</li>
                    <li>Why</li>
                    <li>Pricing</li>
                    <li>Clients</li>
                </ul>
                <Button
                link='#'
                backgroundColor=''
                color=''
                text='Try the demo'
                backgroundImage='linear-gradient(135deg, rgb(10, 102, 194) 0%, rgb(8, 88, 168) 50%, rgb(8, 78, 150) 100%)'
                />
            </div>
        </header>
    )
};

export default Header;