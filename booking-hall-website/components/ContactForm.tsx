import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import styles from '../styles/ContactForm.module.css';

const { Title } = Typography;

const ContactForm: React.FC = () => {
  return (
    <div className={styles.container}>
      <Title level={4} className={styles.title}>Contact Us</Title>
      <form
        action="https://formspree.io/f/xgvylylw"
        method="POST"
        className={styles.form}
      >
        <Form layout="vertical">
          <Form.Item
            label="Your Full Name"
            name="name"
            required
          >
            <Input
              name="name"
              placeholder="e.g., John Smith"
              required
              aria-label="Full Name"
            />
          </Form.Item>

          <Form.Item
            label="Your Email Address"
            name="email"
            required
          >
            <Input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              aria-label="Email Address"
            />
          </Form.Item>

          <Form.Item
            label="Your Phone Number (optional)"
            name="phone"
          >
            <Input
              name="phone"
              placeholder="e.g.,  07234567890"
              aria-label="Phone Number"
            />
          </Form.Item>

          <Form.Item
            label="Name of Your Booking Hall or Venue"
            name="venueName"
            required
          >
            <Input
              name="venueName"
              placeholder="What’s the name of your business?"
              required
              aria-label="Venue Name"
            />
          </Form.Item>

          <Form.Item
            label="Current Website URL (if any)"
            name="currentWebsite"
          >
            <Input
              type="url"
              name="currentWebsite"
              placeholder="https://example.com"
              aria-label="Current Website URL"
            />
          </Form.Item>

          <Form.Item
            label="Average Number of Bookings per Month"
            name="monthlyBookings"
            required
          >
            <Input
              type="number"
              name="monthlyBookings"
              placeholder="e.g., 20"
              min={0}
              required
              aria-label="Average Bookings Per Month"
            />
          </Form.Item>

          <Form.Item
            label="Additional Information or Questions"
            name="additionalInfo"
          >
            <Input.TextArea
              name="additionalInfo"
              rows={4}
              placeholder="Anything else you want us to know"
              aria-label="Additional Information"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.submitButton}
            >
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </form>
    </div>
  );
};

export default ContactForm;