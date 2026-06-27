import React from "react";
import video from "../../../assets/file.mp4";
import video2 from "../../../assets/car-video.mp4";
import car1 from "../../../assets/car1.avif";
import car2 from "../../../assets/car2.avif";
import s1 from "../../../assets/s1.avif";
import s2 from "../../../assets/s2.avif";
import s3 from "../../../assets/s3.avif";
import s4 from "../../../assets/s4.avif";
import s5 from "../../../assets/s5.avif";
import s6 from "../../../assets/s6.avif";
import s7 from "../../../assets/s7.avif";

// 3 بار ../ لگانے سے آپ صحیح فولڈر (src) میں پہنچ کر Components تک رسائی حاصل کر لیں گے
import BlurText from '../../../Components/BlurText';

import { Col, Image, Row, Typography } from "antd";

// FIXED: Ek hi bar clean Swiper imports aur modules ko load kiya hai
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Swiper core styles
import "swiper/css";
import "swiper/css/navigation";
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

import { PhoneFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title } = Typography;

const handleAnimationComplete = () => {
    console.log('Hero text animation finished!');
}

const Hero = () => {
  return (
    <>
      <main className="video-container">
        {/* Video Background */}
        <video autoPlay loop muted playsInline className="bg-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Main Grid Content */}
        <div className="content container-fluid">
          <Row className="w-100">
            <Col span={7}>



              <div className="hero-container bg-slate-900 text-black  min-h-screen flex flex-col justify-center items-center px-4" style={{fontWeight:"500",lineHeight:"60px",fontSize:"85px"}}>
                {/* 1. ہیرو سیکشن کی مین ہیڈنگ - لفظ بہ لفظ اینیمیشن */}
                <BlurText
                  text="Automotive "
                  delay={200}
                  animateBy="words" // یہ پورے لفظ کو ایک ساتھ اینیمیٹ کرے گا
                  direction="top" // اوپر سے نیچے کی طرف آئے گا
                  className="text-5xl md:text-7xl font-bold text-center mb-4"
                />

                {/* 2. ہیرو سیکشن کا مخصوص ذیلی ٹیکسٹ (Sub-heading) - حرف بہ حرف اینیمیشن */}
                <BlurText
                  text="perfection,"
                  delay={50} // حروف کے لیے ڈیلے کم رکھنا بہتر ہے ورنہ بہت سلو لگے گا
                  animateBy="letters" // یہ ایک ایک حرف (letter) کو الگ اینیمیٹ کرے گا
                  direction="bottom" // نیچے سے اوپر کی طرف آئے گا
                  onAnimationComplete={handleAnimationComplete}
                  className="text-lg md:text-xl text-gray-400 text-center max-w-2xl mb-8"
                />
                <BlurText
                  text=" redefined"
                  delay={50} // حروف کے لیے ڈیلے کم رکھنا بہتر ہے ورنہ بہت سلو لگے گا
                  animateBy="letters" // یہ ایک ایک حرف (letter) کو الگ اینیمیٹ کرے گا
                  direction="bottom" // نیچے سے اوپر کی طرف آئے گا
                  onAnimationComplete={handleAnimationComplete}
                  className="text-lg md:text-xl text-gray-400 text-center max-w-2xl mb-8"
                />

                {/* تمہارے باقی ہیرو سیکشن کے بٹنز یا امیجز یہاں آئیں گے */}
                
              </div>




            </Col>
            <Col span={7}>
              <h3
                className="text-dark mb-4"
                style={{ fontSize: "28px", lineHeight: "1.5" }}
              >
                We provide an unrivaled standard of vehicle care, restoring and
                protecting your automotive investment with scientific precision.
              </h3>
              <Link
                className="hover-link"
                to="/contact"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: "12px 24px",
                  textDecoration: "none",
                  fontSize: "20px",
                }}
              >
                Get a Quote
              </Link>
            </Col>
          </Row>
        </div>

        {/* Floating Bottom Phone Number */}
        <div className="bottom-phone">
          <a href="tel:1234567890" className="phone-link">
            <PhoneFilled className="phone" />
            <span>123-456-7890</span>
          </a>
        </div>
      </main>

      {/* ====== SPECTRUM SECTION - Added className for mobile targeting ====== */}
      <div
        className="container spectrum-section"
        style={{ marginTop: "180px" }}
      >
        <Row>
          <Col span={8}>
            <img src={car1} alt="" className="img-fluid" />
          </Col>
          <Col span={8}>
            <div className="hero-container bg-slate-900 text-black  min-h-screen flex flex-col justify-center items-center px-4"style={{ fontSize: "50px" }} className="text-capitalize">
                {/* 1. ہیرو سیکشن کی مین ہیڈنگ - لفظ بہ لفظ اینیمیشن */}
                <BlurText
                  text=" A spectrum of detailing excellence "
                  delay={200}
                  animateBy="words" // یہ پورے لفظ کو ایک ساتھ اینیمیٹ کرے گا
                  direction="top" // اوپر سے نیچے کی طرف آئے گا
                  className="text-5xl md:text-7xl font-bold text-center mb-4"
                />
                
              </div>

          </Col>
        </Row>
      </div>

      {/* ====== DETAILING SECTION - Added className for mobile targeting ====== */}
      <div
        className="container detailing-section"
        style={{ marginTop: "50px" }}
      >
        <Row>
          <Col
            span={12}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <img src={car2} alt="" className="img-fluid" />
          </Col>
          <Col span={8}>
            <h5 style={{ fontSize: "25px" }} className="text-capitalize mb-4">
              From intensive restoration to protective ceramic coatings, our
              services are tailored to the unique needs of your vehicle
            </h5>
            <Link
              className="hover-link"
              to="/services"
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "12px 45px",
                textDecoration: "none",
                fontSize: "25px",
              }}
            >
              Discover Our Services
            </Link>
          </Col>
        </Row>
      </div>

      {/* ====== ARTISTRY SECTION - Added className for mobile targeting ====== */}
      <div
        className="artistry-section"
        style={{
          marginTop: "200px",
          overflowX: "hidden",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Row>
          <Col span={8}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="video2"
              style={{ width: "100%", width: "700px" }}
            >
              <source src={video2} type="video/mp4" />
            </video>
          </Col>
          <Col span={8}>
            <div className="hero-container bg-slate-900 text-black  min-h-screen flex flex-col justify-center items-center px-4 text-capitalize" style={{ fontSize: "60px", fontWeight: "550" }}>
                {/* 1. ہیرو سیکشن کی مین ہیڈنگ - لفظ بہ لفظ اینیمیشن */}
                <BlurText
                  text="where artistry meets engineering"
                  delay={200}
                  animateBy="words" // یہ پورے لفظ کو ایک ساتھ اینیمیٹ کرے گا
                  direction="top" // اوپر سے نیچے کی طرف آئے گا
                  className="text-5xl md:text-7xl font-bold text-center mb-4"
                />
                
              </div>
            <h1
              style={{ fontSize: "25px", marginTop: "25px", width: "420px" }}
              className="text-capitalize"
            >
              Our multi-stage process combines cutting-edge technology with
              time-honored techniques, ensuring a flawless finish that endures.
              We treat every vehicle as a masterpiece in the making.
            </h1>
          </Col>
        </Row>
      </div>

      {/* ====== PROOF SECTION - Added className for mobile targeting ====== */}
      <div className="container proof-section" style={{ marginTop: "180px" }}>
        <Row>
          <Col span={8}>
           <div className="hero-container bg-slate-900 text-black  min-h-screen flex flex-col justify-center items-center px-4"style={{ fontSize: "80px",fontWeight:"600" }} className="text-capitalize">
                {/* 1. ہیرو سیکشن کی مین ہیڈنگ - لفظ بہ لفظ اینیمیشن */}
                <BlurText
                  text=" the proof is in the polish"
                  delay={200}
                  animateBy="words" // یہ پورے لفظ کو ایک ساتھ اینیمیٹ کرے گا
                  direction="top" // اوپر سے نیچے کی طرف آئے گا
                  className="text-5xl md:text-7xl font-bold text-center mb-4"
                />
                
              </div>
          </Col>
          <Col span={8}>
            <h1 style={{ fontSize: "30px" }} className="text-capitalize">
              Witness the transformative results our clients experience.
            </h1>
          </Col>
        </Row>

        {/* FIXED: Swiper Slider Wrapper Context */}
        <Row className="mt-5">
          <Col span={24}>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={1} // Mobile pe 1 image
              breakpoints={{
                769: {
                  slidesPerView: 2, // 769px se zyada pe 2 images (desktop)
                },
              }}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image src={s1} alt="Car Slide 1" style={{ height: "500px" }} />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={s2}
                  alt="Car Slide 2"
                  style={{ height: "500px" }}
                  width={650}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={s3} alt="Car Slide 3" style={{ height: "500px" }} />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={s4} alt="Car Slide 4" style={{ height: "500px" }} />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={s5} alt="Car Slide 5" style={{ height: "500px" }} />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={s6}
                  alt="Car Slide 6"
                  style={{ height: "500px" }}
                  width={650}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={s7}
                  alt="Car Slide 7"
                  style={{ height: "500px" }}
                  width={650}
                />
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </div>

      {/* ====== ENDORSED SECTION - Added className for mobile targeting ====== */}
      <div
        className="container endorsed-section"
        style={{ marginTop: "180px" }}
      >
        <Row>
          <Col span={8}>
            <div className="hero-container bg-slate-900 text-black  min-h-screen flex flex-col justify-center items-center px-4" style={{ fontSize: "80px",fontWeight:"500" }} className="text-capitalize">
                {/* 1. ہیرو سیکشن کی مین ہیڈنگ - لفظ بہ لفظ اینیمیشن */}
                <BlurText
                  text="Endorsed by Connoisseurs"
                  delay={200}
                  animateBy="words" // یہ پورے لفظ کو ایک ساتھ اینیمیٹ کرے گا
                  direction="top" // اوپر سے نیچے کی طرف آئے گا
                  className="text-5xl md:text-7xl font-bold text-center mb-4"
                />
                
              </div>
          </Col>
        </Row>
      </div>

      {/* ====== TESTIMONIALS - Added className for mobile targeting ====== */}
      <div className="container mt-5 mb-5">
        <Row
          className="cards d-flex gap-3 testimonials-row"
          justify="space-between"
        >
          <Col
            span={7}
            className="card px-4 pt-3"
            style={{ backgroundColor: "#E6E6E6", minHeight: "270px" }}
          >
            <Title level={3} style={{ fontSize: "24px", fontWeight: "300" }}>
              "Solstice Detailing didn't just clean my car; they revived it. The
              attention to detail is simply on another level."
            </Title>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginTop: "15px",
              }}
            >
              Kaelen Astor
            </p>
          </Col>

          <Col
            span={7}
            className="card px-4 pt-3"
            style={{ backgroundColor: "#E6E6E6", minHeight: "270px" }}
          >
            <Title level={3} style={{ fontSize: "24px", fontWeight: "300" }}>
              "The ceramic coating is flawless. The depth of shine and
              protection is beyond anything I've seen before. True
              professionals."
            </Title>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginTop: "15px",
              }}
            >
              Seraphina Vale
            </p>
          </Col>

          <Col
            span={7}
            className="card px-4 pt-3"  
            style={{ backgroundColor: "#E6E6E6", minHeight: "270px" }}
          >
            <Title level={3} style={{ fontSize: "24px", fontWeight: "300" }}>
              "Their team possesses an expertise that inspires total confidence.
              My classic car has never looked better."
            </Title>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginTop: "15px",
              }}
            >
              Orion Brixton
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Hero;
