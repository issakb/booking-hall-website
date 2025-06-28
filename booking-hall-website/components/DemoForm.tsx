import React from 'react';
import { Form, Input, Button, DatePicker, TimePicker, Select, InputNumber, message } from 'antd';
import type { Rule } from 'antd/es/form';
import dayjs, { Dayjs } from 'dayjs';
import styles from '../styles/DemoForm.module.css';
import { Typography } from 'antd';

const { TextArea } = Input;
const { Option } = Select;

interface DemoBookingFormValues {
  name: string;
  email: string;
  phone?: string;
  businessName?: string;
  eventType?: string;
  date?: Dayjs;
  startTime?: Dayjs;
  endTime?: Dayjs;
  guests?: number;
  contactMethod?: string;
  message?: string;
}

const { Title } = Typography;

export default function DemoBookingForm() {
  const [form] = Form.useForm<DemoBookingFormValues>();

  const emailRules: Rule[] = [
    { required: true, message: 'Please enter your email' },
    { type: 'email', message: 'Please enter a valid email' },
  ];

  const requiredRules: Rule[] = [
    { required: true, message: 'This field is required' },
  ];

  const disablePastDates = (current: Dayjs) => {
    return current && current < dayjs().startOf('day');
  };

  const handleSubmit = async (values: DemoBookingFormValues) => {
    const formattedValues = {
      ...values,
      date: values.date ? values.date.format('YYYY-MM-DD') : '',
      startTime: values.startTime ? values.startTime.format('HH:mm') : '',
      endTime: values.endTime ? values.endTime.format('HH:mm') : '',
    };

    try {
      const response = await fetch('https://formspree.io/f/xgvylylw', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedValues),
      });

      if (response.ok) {
        message.success('Form submitted successfully!');
        form.resetFields();
      } else {
        message.error('Failed to submit form. Please try again.');
      }
    } catch (error) {
      message.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <Title level={4} className={styles.title}>
        Book the Grand Oak Event Hall
      </Title>
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      style={{ maxWidth: 600, margin: '0 auto' }}
    >
      <Form.Item label="Full Name" name="name" rules={requiredRules}>
        <Input placeholder="Your full name" />
      </Form.Item>

      <Form.Item label="Email" name="email" rules={emailRules}>
        <Input placeholder="you@example.com" />
      </Form.Item>

      <Form.Item label="Phone Number" name="phone">
        <Input placeholder="Optional phone number" />
      </Form.Item>

      <Form.Item label="Business Name" name="businessName">
        <Input placeholder="Your business or venue name" />
      </Form.Item>

      <Form.Item label="Event Type" name="eventType">
        <Select placeholder="Select event type">
          <Option value="wedding">Wedding</Option>
          <Option value="corporate">Corporate Meeting</Option>
          <Option value="birthday">Birthday Party</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Event Date" name="date" rules={requiredRules}>
        <DatePicker
          style={{ width: '100%' }}
          disabledDate={disablePastDates}
          format="YYYY-MM-DD"
        />
      </Form.Item>

      <Form.Item label="Start Time" name="startTime" rules={requiredRules}>
        <TimePicker style={{ width: '100%' }} format="HH:mm" />
      </Form.Item>

      <Form.Item label="End Time" name="endTime" rules={requiredRules}>
        <TimePicker style={{ width: '100%' }} format="HH:mm" />
      </Form.Item>

      <Form.Item label="Number of Guests" name="guests" rules={requiredRules}>
        <InputNumber min={1} max={1000} style={{ width: '100%' }} placeholder="Estimated number of guests" />
      </Form.Item>

      <Form.Item label="Preferred Contact Method" name="contactMethod">
        <Select placeholder="How should we contact you?">
          <Option value="email">Email</Option>
          <Option value="phone">Phone</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Additional Requirements / Comments" name="message">
        <TextArea rows={4} placeholder="Anything else you'd like us to know?" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Submit Booking Request
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
}