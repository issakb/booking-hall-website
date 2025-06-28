import React from 'react';
import Link from 'next/link';
import { Typography, Row, Col, Button, Divider } from 'antd';
import DemoSection from '../components/DemoSection';
import styles from '../styles/Home.module.css';

const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  return (
    <>
      <section className={styles.container}>
        <Row justify="center">
          <Col xs={24} md={24} lg={24}>
            <Title level={1} className={styles.heading}>
              Own a Booking Hall?
            </Title>

            <Paragraph className={styles.paragraph}>
              Your customers are searching online — if you’re not there, they’ll book somewhere else. We build
              beautiful, mobile-friendly websites like the example below to help your venue get noticed and booked.
            </Paragraph>

            <ul className={styles.featureList}>
              <li>Modern, easy-to-use booking form</li>
              <li>Photo gallery showcasing your space</li>
              <li>Responsive design optimized for all devices</li>
              <li>SEO-friendly structure to boost your visibility</li>
            </ul>

            <Paragraph className={styles.paragraph}>
              Explore the example website below. We can customize a website just for your venue, ready in days.
            </Paragraph>

            <div className={styles.buttonGroup}>
              <Link href="/contact" passHref legacyBehavior>
                <Button type="primary" size="large" aria-label="Start Now - Get a Free Quote">
                  Start Now – Get a Free Quote
                </Button>
              </Link>
              <Button
                type="default"
                size="large"
                onClick={() => {
                  document.getElementById('demo-section-title')?.scrollIntoView({ behavior: 'smooth' });
                }}
                aria-label="View Example Website"
              >
                View Example Website
              </Button>
            </div>
          </Col>
        </Row>
      </section>

      <Divider />

      <DemoSection />
    </>
  );
};

export default Home;
