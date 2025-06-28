import React from 'react';
import { Typography, Row, Col, Card, Divider, List, Grid } from 'antd';
import DemoGallery from './DemoGallery';
import DemoForm from './DemoForm';
import DemoSidebar from './DemoSidebar';
import styles from '../styles/DemoSection.module.css';

const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

type Testimonial = {
  client: string;
  quote: string;
};

type HallInfo = {
  name: string;
  tagline: string;
  description: string;
  capacity: number;
  features: string[];
  address: string;
  testimonials: Testimonial[];
};

const hallInfo: HallInfo = {
  name: 'Grand Oak Event Hall',
  tagline: 'Where memories are made',
  description: `Nestled in the heart of downtown, the Grand Oak Event Hall is the perfect venue
     for weddings, corporate events, and private parties. With elegant interiors and
     state-of-the-art facilities, we create unforgettable experiences.`,
  capacity: 250,
  features: [
    'Ample parking space',
    'Full AV and lighting setup',
    'On-site catering options',
    'Wheelchair accessible',
    'Free Wi-Fi',
  ],
  address: '123 Main Street, Birmingham, B1 2AB',
  testimonials: [
    {
      client: 'Emma R.',
      quote: 'Booking our wedding here was the best decision we made! The staff was amazing and the space beautiful.',
    },
    {
      client: 'James K.',
      quote: 'Professional and seamless event hosting. Highly recommend the Grand Oak!',
    },
  ],
};

const Testimonials: React.FC<{ testimonials: Testimonial[] }> = ({ testimonials }) => (
  <List
    itemLayout="vertical"
    dataSource={testimonials}
    renderItem={({ client, quote }) => (
      <List.Item>
        <blockquote className={styles.testimonial}>
          “{quote}”
          <br />
          <Text strong>- {client}</Text>
        </blockquote>
      </List.Item>
    )}
  />
);

const FeaturesList: React.FC<{ features: string[] }> = ({ features }) => (
  <ul className={styles.featuresList}>
    {features.map((feature, idx) => (
      <li key={idx}>{feature}</li>
    ))}
  </ul>
);

const DemoSection: React.FC = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <section className={styles.demoContainer} aria-labelledby="demo-section-title">
      <Title id="demo-section-title" level={2} className={styles.title}>
        Live Demo: {hallInfo.name}
      </Title>
      <Paragraph className={styles.tagline}>{hallInfo.tagline}</Paragraph>

      {isMobile ? (
        <>
          <DemoGallery />
          <Divider />
          <Card className={styles.card}>
            <Paragraph>{hallInfo.description}</Paragraph>
            <Title level={4}>Key Details</Title>
            <FeaturesList features={hallInfo.features} />
            <p>
              <Text strong>Capacity:</Text> {hallInfo.capacity} guests
            </p>
            <p>
              <Text strong>Address:</Text> {hallInfo.address}
            </p>
            <Divider />
            <Title level={4}>What Our Clients Say</Title>
            <Testimonials testimonials={hallInfo.testimonials} />
          </Card>
          <Divider />
          <DemoForm />
          <Divider />
          <DemoSidebar />
        </>
      ) : (
        <Row gutter={[32, 32]}>
          {/* Left Column */}
          <Col md={12}>
            <Card className={styles.card}>
              <Paragraph>{hallInfo.description}</Paragraph>
              <Title level={4}>Key Details</Title>
              <FeaturesList features={hallInfo.features} />
              <p>
                <Text strong>Capacity:</Text> {hallInfo.capacity} guests
              </p>
              <p>
                <Text strong>Address:</Text> {hallInfo.address}
              </p>
              <Divider />
              <Title level={4}>What Our Clients Say</Title>
              <Testimonials testimonials={hallInfo.testimonials} />
              <Divider />
              <DemoSidebar />
            </Card>
          </Col>

          {/* Right Column */}
          <Col md={12}>
            <DemoGallery />
            <Divider />
            <DemoForm />
          </Col>
        </Row>
      )}
    </section>
  );
};

export default DemoSection;