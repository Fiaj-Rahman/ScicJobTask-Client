import React from 'react';

// Sample styles (you might want to use CSS modules or styled-components for better organization)
const styles = {
    container: {
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    header: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    serviceList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    serviceItem: {
        padding: '15px',
        border: '1px solid #ddd',
        borderRadius: '8px',
    },
    contactInfo: {
        marginTop: '20px',
        textAlign: 'center',
    },
};

const services = [
    {
        id: 1,
        title: 'Web Development',
        description: 'Custom web development solutions tailored to your business needs.',
    },
    {
        id: 2,
        title: 'SEO Optimization',
        description: 'Improve your website’s visibility and search engine ranking.',
    },
    {
        id: 3,
        title: 'Digital Marketing',
        description: 'Comprehensive digital marketing strategies to grow your online presence.',
    },
    {
        id: 4,
        title: 'Graphic Design',
        description: 'Creative design solutions for your brand and marketing materials.',
    },
];

const Service = () => {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1>Our Services</h1>
                <p>We offer a range of services to help your business thrive online.</p>
            </header>
            
            <section style={styles.serviceList}>
                {services.map(service => (
                    <div key={service.id} style={styles.serviceItem}>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                    </div>
                ))}
            </section>

            <footer style={styles.contactInfo}>
                <h2>Contact Us</h2>
                <p>If you have any questions or need more information, feel free to reach out to us:</p>
                <p>Email: info@yourcompany.com</p>
                <p>Phone: (123) 456-7890</p>
            </footer>
        </div>
    );
};

export default Service;
