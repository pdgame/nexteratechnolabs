import React from 'react';
import Link from 'next/link';
import { servicesData } from '../src/data/servicesData';
import styles from './Services.module.css';

export default function Services() {
    return (
        <section id="services" className="section">
            <div className="container">
                <h2 className="section-title">Our Services</h2>
                <p className="section-subtitle">
                    Comprehensive technology solutions to elevate your digital presence
                </p>
                <div className={styles.grid}>
                    {servicesData.map((service) => (
                        <Link
                            key={service.id}
                            href={`/services/${service.slug}`}
                            className={`card ${styles.serviceCard}`}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <div className={styles.icon}>{service.icon}</div>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                            <p className={styles.serviceDescription}>{service.shortDescription}</p>
                            <div className={styles.learnMore}>
                                Learn More <span>→</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
