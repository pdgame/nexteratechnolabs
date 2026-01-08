import React from 'react';
import styles from './About.module.css';

const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '15+', label: 'Team Members' },
];

export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">About NextEra Technolabs</h2>
                <p className="section-subtitle">
                    Pioneering digital innovation with passion and expertise
                </p>

                <div className={styles.content}>
                    <div className={styles.textContent}>
                        <h3 className={styles.subtitle}>Who We Are</h3>
                        <p className={styles.description}>
                            At NextEra Technolabs, we are a team of passionate developers, designers, and digital strategists
                            committed to transforming your business through technology. With expertise spanning from modern
                            web frameworks like MERN and Angular to enterprise solutions with .NET, we deliver tailored
                            solutions that drive results.
                        </p>
                        <p className={styles.description}>
                            Our approach combines creativity with technical excellence, ensuring every project not only
                            meets but exceeds expectations. Whether you need a stunning Webflow website, comprehensive SEO
                            services, or a robust enterprise application, we have the skills and experience to bring your
                            vision to life.
                        </p>
                    </div>

                    <div className={styles.statsGrid}>
                        {stats.map((stat, index) => (
                            <div key={index} className={`card ${styles.statCard}`}>
                                <div className={styles.statNumber}>{stat.number}</div>
                                <div className={styles.statLabel}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
