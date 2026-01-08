'use client';

import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToServices = () => {
        const element = document.getElementById('services');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Transforming Ideas Into
                        <span className={styles.gradient}> Digital Excellence</span>
                    </h1>
                    <p className={styles.subtitle}>
                        We are NextEra Technolabs - your trusted partner in cutting-edge web development,
                        SEO optimization, and enterprise solutions. From MERN stack to .NET, Angular to Webflow,
                        we bring your vision to life with innovation and expertise.
                    </p>
                    <div className={styles.cta}>
                        <button className="btn btn-primary" onClick={scrollToContact}>
                            Get Started
                        </button>
                        <button className="btn btn-secondary" onClick={scrollToServices}>
                            View Services
                        </button>
                    </div>
                </div>
                <div className={styles.illustration}>
                    <div className={styles.floatingCard}></div>
                    <div className={styles.floatingCard}></div>
                    <div className={styles.floatingCard}></div>
                </div>
            </div>
            <div className={styles.backgroundElements}>
                <div className={styles.circle1}></div>
                <div className={styles.circle2}></div>
                <div className={styles.circle3}></div>
            </div>
        </section>
    );
}
