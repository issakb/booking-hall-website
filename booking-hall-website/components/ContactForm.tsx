import React, { useState } from 'react';
import { Form, Input, Button, Typography, Result } from 'antd';
import styles from '../styles/ContactForm.module.css';

const { Title } = Typography;

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm(); // <-- form instance

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      const res = await fetch('https://formspree.io/f/xgvylylw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        form.resetFields();        // <-- reset the form here
        setSubmitted(true);
      } else {
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={styles.container}>
        <Result
          status="success"
          title="Thank you for contacting us!"
          subTitle="We’ve received your message and will get back to you shortly."
        />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Title level={4} className={styles.title}>Contact Us</Title>
      <Form
        form={form}                      // <-- attach the form instance
        layout="vertical"
        onFinish={handleSubmit}
        className={styles.form}
      >
        {/* Form.Item fields remain unchanged */}
        <Form.Item
          label="Your Full Name"
          name="name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input placeholder="e.g., John Smith" />
        </Form.Item>

        <Form.Item
          label="Your Email Address"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input placeholder="you@example.com" />
        </Form.Item>

        <Form.Item label="Your Phone Number (optional)" name="phone">
          <Input placeholder="e.g., 07234567890" />
        </Form.Item>

        <Form.Item
          label="Name of Your Booking Hall or Venue"
          name="venueName"
          rules={[{ required: true, message: 'Please enter your venue name' }]}
        >
          <Input placeholder="Business name" />
        </Form.Item>

        <Form.Item label="Current Website URL (if any)" name="currentWebsite">
          <Input placeholder="https://example.com" />
        </Form.Item>

        <Form.Item
          label="Average Number of Bookings per Month"
          name="monthlyBookings"
          rules={[{ required: true, message: 'Please enter number of bookings' }]}
        >
          <Input type="number" placeholder="e.g., 20" min={0} />
        </Form.Item>

        <Form.Item label="Additional Information or Questions" name="additionalInfo">
          <Input.TextArea rows={4} placeholder="Anything else you want us to know" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className={styles.submitButton}
          >
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactForm;