import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <div className={styles.logo}>
                            <Image
                                src="/logo.png"
                                alt="NextEra Technolabs"
                                width={100}
                                height={45}
                            />
                        </div>
                        <p className={styles.description}>
                            Empowering businesses with cutting-edge technology solutions.
                            Your trusted partner in digital transformation.
                        </p>
                    </div>

                    <div className={styles.footerSection}>
                        <h3 className={styles.footerTitle}>Quick Links</h3>
                        <ul className={styles.footerLinks}>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className={styles.footerSection}>
                        <h3 className={styles.footerTitle}>Services</h3>
                        <ul className={styles.footerLinks}>
                            <li>SEO Optimization</li>
                            <li>Web Design</li>
                            <li>MERN Development</li>
                            <li>.NET Solutions</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>&copy; {currentYear} NextEra Technolabs. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

