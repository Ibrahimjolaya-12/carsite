import { Row, Col, Typography, Image } from "antd";
import React from "react";
import ser1 from "../../../assets/ser-1.avif";
import ser3 from "../../../assets/ser-3.avif";
import car from "../../../assets/ser-car.mp4";
import s7 from "../../../assets/s7.avif";
import { Link } from "react-router-dom";
// FIXED: پاتھ کو اپنے فولڈر سٹرکچر کے مطابق چیک کر لیں، اگر ایرر آئے تو ایک اور ../ لگا لینا
import BlurText from "../../../Components/BlurText"; 

const { Title, Paragraph } = Typography;

const Hero = () => {
  return (
    <>
      <main className="container hero-main">

        {/* Header Section */}
        <Row className="mb-5">
          <Col span={24}>
            <div 
              className="hero-container bg-slate-900 text-black min-h-screen flex flex-col justify-center items-center px-4 text-capitalize hero-heading"
              style={{ fontSize: "50px" }}
            >
              {/* 1. ہیرو سیکشن کی مین ہیڈنگ - لفظ بہ لفظ اینیمیشن */}
              <BlurText
                text="our detailing sanctions"
                delay={200}
                animateBy="words" // یہ پورے لفظ کو ایک ساتھ اینیمیٹ کرے گا
                direction="top"   // اوپر سے نیچے کی طرف آئے گا
                className="text-5xl md:text-7xl font-bold text-center mb-4"
              />
            </div>
            
            <p className="hero-subheading fs-3">
              Choose the definitive treatment for your vehicle
            </p>
          </Col>
        </Row>

        {/* Service Cards */}
        <Row gutter={[32, 48]} justify="space-between">

          <Col xs={24} sm={24} md={7} lg={7} xl={7}>
            <Image width={350}
              src={ser1}
              alt="Interior"
              preview={false}
              className="service-img"
            />
            <div className="mt-4">
              <Title level={2}>Interior Restoration</Title>
              <Paragraph className="service-para">
                A comprehensive deep clean of all interior surfaces, from
                leather conditioning to fabric shampooing, returning your cabin
                to showroom condition.
              </Paragraph>
            </div>
          </Col>

          <Col xs={24} sm={24} md={7} lg={7} xl={7}>
            <Image width={350}
              src={s7}
              alt="Exterior"
              preview={false}
              className="service-img"
            />
            <div className="mt-4">
              <Title level={2}>Exterior Revival</Title>
              <Paragraph className="service-para">
                A meticulous process involving decontamination, multi-stage
                paint correction, and application of premium waxes or sealants
                for a brilliant, durable shine.
              </Paragraph>
            </div>
          </Col>

          <Col xs={24} sm={24} md={7} lg={7} xl={7}>
            <Image width={350}
              src={ser3}
              alt="Exterior"
              preview={false}
              className="service-img"
            />
            <div className="mt-4">
              <Title level={2}>Ceramic Supremacy</Title>
              <Paragraph className="service-para">
                 The ultimate in paint protection. We apply professional-grade
                ceramic coatings that provide unparalleled gloss,
                hydrophobicity, and resistance to environmental.
              </Paragraph>
            </div>
          </Col>

        </Row>
      </main>

      {/* Full Width Video Section */}
      <div className="video-wrapper-full">
        <video autoPlay loop muted playsInline className="bg-video1">
          <source src={car} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="content1 container">
          <Row className="w-100">
            <Col
              xs={24} sm={22} md={14} lg={10} xl={8}
              className="video-col"
            >
              <Title
                level={1}
                className="text-capitalize video-title"
              >
                enhance your protection
              </Title>
              <h3 className="video-subtitle mb-4">
                We provide an unrivaled standard of vehicle care, restoring and
                protecting your automotive investment with scientific precision.
              </h3>
              <Link className="quote-btn" to="/contact">
                Get a Quote
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Hero;