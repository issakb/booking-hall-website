import React from 'react';
import { Typography, Row, Col } from 'antd';
import Layout from '../components/Layout';
import styles from '../styles/About.module.css';

const { Title, Paragraph } = Typography;

const About: React.FC = () => {
  return (
    <>
      <Row justify="center" className={styles.container}>
        <Col xs={24} md={20} lg={16}>
          <Title level={1}>About Us</Title>
          <Paragraph>
            At <strong>Your Agency</strong>, we specialize in building beautiful, modern, and
            mobile-friendly websites tailored specifically for booking halls and event venues.
          </Paragraph>

          <Paragraph>
            We understand how important it is for hall owners to have a professional online presence
            that helps attract more customers and increase bookings. Our mission is to help you
            showcase your venue and streamline the booking process with an easy-to-use website.
          </Paragraph>

          <Paragraph>
            Whether you're just getting started or want to upgrade your current site, we work closely
            with you to deliver a customized website ready in days.
          </Paragraph>

          <Paragraph>
            Our websites feature:
            <ul>
              <li>Responsive design that looks great on any device</li>
              <li>SEO-friendly structure to boost your visibility online</li>
              <li>Integrated modern booking forms to convert visitors into customers</li>
              <li>Photo galleries that beautifully showcase your venue</li>
            </ul>
          </Paragraph>

          <Paragraph>
            Ready to take your booking hall online? <strong>Get in touch</strong> and let's build
            something great together.
          </Paragraph>
        </Col>
      </Row>
    </>
  );
};

export default About;