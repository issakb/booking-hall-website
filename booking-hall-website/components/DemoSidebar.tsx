import React from 'react';
import { Typography, Collapse } from 'antd';
import styles from '../styles/DemoSidebar.module.css';

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const reasonsToChooseUs = [
  'Rated 5 stars by 130+ customers',
  'Over 200 events hosted yearly',
  '99% customer satisfaction rate',
];

const faqs = [
  {
    question: 'Can I customize my booking form?',
    answer: 'Yes, we tailor your form to match your business needs and branding.',
  },
  {
    question: 'How fast can I launch my site?',
    answer: 'Typically within 7–10 business days once we receive your content and preferences.',
  },
  {
    question: 'Do you support mobile bookings?',
    answer: 'Absolutely. Your site will be fully responsive and mobile-friendly.',
  },
];

const DemoSidebar: React.FC = () => {
  return (
    <aside className={styles.sidebarContainer} aria-label="Additional info section">
      <section className={styles.socialProofList}>
        <Title level={5} className={styles.sectionTitle}>Why Choose Us?</Title>
        <ul className={styles.reasonList}>
          {reasonsToChooseUs.map((reason, index) => (
            <li key={index}>• {reason}</li>
          ))}
        </ul>
      </section>

      <section className={styles.faqList}>
        <Title level={5} className={styles.sectionTitle}>FAQs</Title>
        <Collapse accordion>
          {faqs.map((faq, index) => (
            <Panel header={faq.question} key={index}>
              <Paragraph>{faq.answer}</Paragraph>
            </Panel>
          ))}
        </Collapse>
      </section>

      <section className={styles.contactInfo}>
        <Title level={5} className={styles.sectionTitle}>Contact Info</Title>
        <Paragraph>Email: contact@grandoak.com</Paragraph>
        <Paragraph>Phone: +44 1234 567890</Paragraph>
        <Paragraph>Address: 123 Main Street, Birmingham, B1 2AB</Paragraph>
      </section>

      <section className={styles.mapContainer}>
        <iframe
          title="Location map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.202642019439!2d-1.8998!3d52.4895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bd2b50dbd18f%3A0x8d8eecc0a01d7e4d!2s123%20Main%20Street%2C%20Birmingham%20B1%202AB!5e0!3m2!1sen!2suk!4v1719426161165"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </aside>
  );
};

export default DemoSidebar;