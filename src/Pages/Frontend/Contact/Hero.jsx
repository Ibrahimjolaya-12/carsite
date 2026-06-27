import React, { useState } from 'react';
import { Form, Input, Select, Button, Row, Col, Typography, message } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import BlurText from '../../../Components/BlurText';

const { Title, Paragraph, Text } = Typography;
const { Option } = Select;

const Hero = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    console.log("Submitted Form Values: ", values);
    
    setTimeout(() => {
      message.open({
        type: 'success',
        content: <span style={{ fontSize: '32px' }}>Your consultation request has been submitted successfully!</span>,
        duration: 3,
      });

      form.resetFields();
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="container contact-form-section" style={{ marginTop: "130px", marginBottom: "100px" }}>
      <Row gutter={[64, 32]} align="top">
        
        {/* LEFT COLUMN: Contact Info */}
        <Col xs={24} lg={10} className="contact-info-col">
          <div 
              className="hero-container bg-slate-900 text-black min-h-screen flex flex-col justify-center items-center px-4 text-capitalize hero-heading"
              style={{ fontSize: "85px", fontWeight: "400", lineHeight: "1.1", marginBottom: "30px" }}
            >
              {/* 1. ہیرو سیکشن کی مین ہیڈنگ - لفظ بہ لفظ اینیمیشن */}
              <BlurText
                text=" Schedule Your Consultation"
                delay={200}
                animateBy="words" // یہ پورے لفظ کو ایک ساتھ اینیمیٹ کرے گا
                direction="top"   // اوپر سے نیچے کی طرف آئے گا
                className="text-5xl md:text-7xl font-bold text-center mb-4"
              />
            </div>
          <Paragraph style={{ fontSize: "22px", color: "#555", fontWeight: "300", lineHeight: "1.6", marginBottom: "60px" }}>
            Let's discuss a bespoke detailing solution for your vehicle. We are ready to answer your questions and book your appointment.
          </Paragraph>

          <div style={{ marginBottom: "40px" }}>
            <Text type="secondary" style={{ fontSize: "30px", display: "block", marginBottom: "10px" }}>Address</Text>
            <Text style={{ fontSize: "24px", display: "block", fontWeight: "400" }}>500 Terry Francine St</Text>
            <Text style={{ fontSize: "24px", display: "block", fontWeight: "400" }}>San Francisco, CA 94158</Text>
          </div>

          <Row gutter={32}>
            <Col xs={24} md={12}>
              <Text type="secondary" style={{ fontSize: "30px", display: "block", marginBottom: "10px" }}>Telephone</Text>
              <Text style={{ fontSize: "24px", fontWeight: "400" }}>123-456-7890</Text>
            </Col>
            <Col xs={24} md={12}>
              <Text type="secondary" style={{ fontSize: "30px", display: "block", marginBottom: "10px" }}>Email</Text>
              <Text style={{ fontSize: "24px", fontWeight: "400" }}>ibrahimjolaya@gmail.com</Text>
            </Col>
          </Row>
        </Col>

        {/* RIGHT COLUMN: Ant Design Form */}
        <Col xs={24} lg={14} style={{ paddingTop: "20px" }} className="contact-form-col">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            requiredMark={false}
          >
            {/* Row 1: First Name + Last Name */}
            <Row gutter={24}>
              <Col xs={24} md={12}>
                <Form.Item
                  label={<span style={{ fontSize: "30px" }}>First name *</span>}
                  name="firstName"
                  rules={[{ required: true, message: 'Please enter your first name' }]}
                >
                  <Input style={{ height: "50px", borderRadius: "0px", border: "1px solid #000", fontSize:"25px" }} />
                </Form.Item>
              </Col>
              
              <Col xs={24} md={12}>
                <Form.Item
                  label={<span style={{ fontSize: "30px" }}>Last name *</span>}
                  name="lastName"
                  rules={[{ required: true, message: 'Please enter your last name' }]}
                >
                  <Input style={{ height: "50px", borderRadius: "0px", border: "1px solid #000", fontSize:"25px" }} />
                </Form.Item>
              </Col>
            </Row>

            {/* Row 2: Email + Phone */}
            <Row gutter={24}>
              <Col xs={24} md={12}>
                <Form.Item
                  label={<span style={{ fontSize: "30px" }}>Email *</span>}
                  name="email"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Please enter a valid email' }
                  ]}
                >
                  <Input style={{ height: "50px", borderRadius: "0px", border: "1px solid #000", fontSize:"25px" }} />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item
                  label={<span style={{ fontSize: "30px" }}>Phone *</span>}
                  name="phone"
                  rules={[{ required: true, message: 'Please enter your phone number' }]}
                >
                  <Input 
                    prefix={<GlobalOutlined style={{ color: '#000', marginRight: '5px' }} />}
                    style={{ height: "50px", borderRadius: "0px", border: "1px solid #000", fontSize:"25px" }} 
                  />
                </Form.Item>
              </Col>
            </Row>

            {/* Row 3: Vehicle + Service */}
            <Row gutter={24}>
              <Col xs={24} md={12}>
                <Form.Item
                  label={<span style={{ fontSize: "30px" }}>Vehicle Make & Model</span>}
                  name="vehicleModel"
                >
                  <Input style={{ height: "50px", borderRadius: "0px", border: "1px solid #000", fontSize:"25px" }} />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item
                  label={<span style={{ fontSize: "30px" }}>Desired Service</span>}
                  name="service"
                >
                  <Select 
                    placeholder="Select a service" 
                    style={{ height: "50px" }}
                    className="custom-select-black"
                  >
                    <Option value="interior">Interior Restoration</Option>
                    <Option value="exterior">Exterior Revival</Option>
                    <Option value="ceramic">Ceramic Supremacy</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label={<span style={{ fontSize: "30px" }}>Message</span>}
              name="message"
            >
              <Input.TextArea rows={2} style={{ fontSize:"25px", borderRadius: "0px", border: "1px solid #000", resize: "none" }} />
            </Form.Item>

            <Form.Item>
              <Button 
                type="primary" 
                htmlType="submit" 
                loading={loading}
                style={{ 
                  width: "100%", 
                  height: "55px", 
                  backgroundColor: "black", 
                  color: "white", 
                  borderRadius: "0px", 
                  fontSize: "20px",
                  fontWeight: "500",
                  border: "none"
                }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>

      </Row>
    </div>
  );
};

export default Hero;