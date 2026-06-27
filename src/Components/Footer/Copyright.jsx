import React from "react";
import { Row, Col, Typography } from "antd";
import { FacebookFilled, HeartFilled, InstagramOutlined, YoutubeFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Paragraph, Title } = Typography;
const year = new Date().getFullYear();

const Copyright = () => {
  return (
    <footer className="footer-container">
      <div className="container-fluid footer-inner-wrap">
        
        {/* TOP BLOCK: Brand, Address, Socials */}
        <Row gutter={[24, 32]} align="middle" className="footer-top-row">
          {/* Brand Name */}
          <Col xs={24} md={8} className="text-center-mobile fs-2">
            <h1 className="brand-title">Solstice Detailing</h1>
          </Col>
          
          {/* Address & Details */}
          <Col xs={24} md={8} className="text-center-mobile contact-links-block">
            <a href="#" className="footer-link-text fs-2">
              500 Terry Francine St, San Francisco, CA 94158
            </a>
            <a href="tel:1234567890" className="footer-link-text fs-2">
              123 - 456 - 7890
            </a>
            <a href="mailto:ibrahimjolaya@gmail.com" className="footer-link-text fs-2">
              ibrahimjolaya@gmail.com
            </a>
          </Col>
          
          {/* Social Icons */}
          <Col xs={24} md={8} className="socials-col-block">
            <div className="social-icons-wrapper">
              <FacebookFilled className="social-icon" />
              <InstagramOutlined className="social-icon" /> 
              <YoutubeFilled className="social-icon" />
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        {/* BOTTOM BLOCK: Navigation Policies and Legal Text */}
        <Row gutter={[24, 24]} align="middle" className="footer-bottom-row">
          {/* Policy Links Group */}
          <Col xs={24} md={14} className="policies-links-col">
            <div className="policies-group">
              <Link to="/policy" className="policy-item-link fs-4">Privacy policy</Link>
              <Link to="/refund" className="policy-item-link fs-4">Refund Policy</Link>
              <Link to="/accessibility" className="policy-item-link fs-4">Accessibility Statement</Link>
              <Link to="/terms" className="policy-item-link fs-4">Terms & Conditions</Link>
            </div>
          </Col>
          
          {/* Copyright text rights */}
          <Col xs={24} md={10} className="copyright-credits-col">
            <p className="credits-text fs-3">
              &copy; {year}, All rights reserved. Made by Ibrahim JolaYa <HeartFilled style={{ color: 'red' }} />
            </p>
          </Col>
        </Row>

      </div>
    </footer>
  );
};

export default Copyright;