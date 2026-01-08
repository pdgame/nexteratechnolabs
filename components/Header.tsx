'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Image
                        src="/logo.png"
                        alt="NextEra Technolabs"
                        width={100}
                        height={45}
                        priority
                    />
                </div>

                <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
                    <button
                        className={styles.navLink}
                        onClick={() => scrollToSection('home')}
                    >
                        Home
                    </button>
                    <button
                        className={styles.navLink}
                        onClick={() => scrollToSection('services')}
                    >
                        Services
                    </button>
                    <button
                        className={styles.navLink}
                        onClick={() => scrollToSection('about')}
                    >
                        About
                    </button>
                    <button
                        className={styles.navLink}
                        onClick={() => scrollToSection('contact')}
                    >
                        Contact
                    </button>
                </nav>

                <button
                    className={styles.hamburger}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={isMobileMenuOpen ? styles.hamburgerOpen : ''}></span>
                    <span className={isMobileMenuOpen ? styles.hamburgerOpen : ''}></span>
                    <span className={isMobileMenuOpen ? styles.hamburgerOpen : ''}></span>
                </button>
            </div>
        </header>
    );
}
