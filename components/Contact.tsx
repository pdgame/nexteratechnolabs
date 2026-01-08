'use client';

import React, { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', service: '', message: '' });
        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">
                    Ready to start your project? Let&apos;s discuss how we can help you succeed
                </p>

                <div className={styles.contactWrapper}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={styles.input}
                                required
                                placeholder="Your Name"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.input}
                                required
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="service" className={styles.label}>Service Interested In</label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className={styles.select}
                                required
                            >
                                <option value="">Select a service</option>
                                <option value="seo">SEO Services</option>
                                <option value="web-design">Web Design</option>
                                <option value="mern">MERN Stack Development</option>
                                <option value="webflow">Webflow Development</option>
                                <option value="dotnet">.NET & .NET MVC</option>
                                <option value="angular">Angular Development</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={styles.textarea}
                                required
                                placeholder="Tell us about your project..."
                                rows={5}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>

                    <div className={styles.contactInfo}>
                        <div className={`card ${styles.infoCard}`}>
                            <div className={styles.infoIcon}>📧</div>
                            <h3 className={styles.infoTitle}>Email</h3>
                            <p className={styles.infoText}>nexteratechnolabs@gmail.com</p>
                        </div>

                        <div className={`card ${styles.infoCard}`}>
                            <div className={styles.infoIcon}>📱</div>
                            <h3 className={styles.infoTitle}>Phone</h3>
                            <p className={styles.infoText}>+91 8780236393</p>
                        </div>

                        <div className={`card ${styles.infoCard}`}>
                            <div className={styles.infoIcon}>📍</div>
                            <h3 className={styles.infoTitle}>Location</h3>
                            <p className={styles.infoText}>Surat, Gujarat</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
