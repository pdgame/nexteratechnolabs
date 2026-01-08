import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getServiceBySlug, getAllServiceSlugs } from '../../../data/servicesData';
import styles from './page.module.css';
import type { Metadata } from 'next';

interface ServicePageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const slugs = getAllServiceSlugs();
    return slugs.map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return {
            title: 'Service Not Found',
        };
    }

    return {
        title: `${service.title} | Nextera Technolabs`,
        description: service.shortDescription,
    };
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    return (
        <div className={styles.servicePage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <Link href="/#services" className={styles.backLink}>
                        ← Back to Services
                    </Link>
                    <div className={styles.heroContent}>
                        <div className={styles.icon}>{service.icon}</div>
                        <h1 className={styles.title}>{service.title}</h1>
                        <p className={styles.tagline}>{service.tagline}</p>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className={styles.overview}>
                <div className="container">
                    <div className={styles.overviewContent}>
                        <h2>Overview</h2>
                        <p className={styles.detailedDescription}>{service.detailedDescription}</p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className={styles.features}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Key Features</h2>
                    <div className={styles.featureGrid}>
                        {service.features.map((feature, index) => (
                            <div key={index} className={styles.featureCard}>
                                <div className={styles.featureIcon}>✓</div>
                                <p>{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className={styles.technologies}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Technologies We Use</h2>
                    <div className={styles.techGrid}>
                        {service.technologies.map((tech, index) => (
                            <div key={index} className={styles.techBadge}>
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className={styles.benefits}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Why Choose This Service?</h2>
                    <div className={styles.benefitsList}>
                        {service.benefits.map((benefit, index) => (
                            <div key={index} className={styles.benefitItem}>
                                <span className={styles.benefitNumber}>{String(index + 1).padStart(2, '0')}</span>
                                <p>{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Ready to Get Started?</h2>
                        <p>Let's discuss how {service.title.toLowerCase()} can help your business grow.</p>
                        <Link href="/#contact" className={styles.ctaButton}>
                            Contact Us Today
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
