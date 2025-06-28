import React from 'react';
import { Typography, Row, Col } from 'antd';
import ContactForm from '../components/ContactForm';
import styles from '../styles/ContactPage.module.css';

const { Title, Paragraph } = Typography;

const Contact: React.FC = () => {
  return (
    <div className={styles.container}>
      <Row justify="center">
        <Col xs={24} md={16} lg={12}>
          <Title level={2}>Get in Touch</Title>
          <Paragraph>
            Interested in a custom website for your booking hall? Fill out the form below and we'll get back to you!
          </Paragraph>
          <ContactForm />
        </Col>
      </Row>
    </div>
  );
};

export default Contact;