import { Col, Row, Typography, Image } from "antd";
import React from "react";
import gal1 from "../../../assets/gal-1.avif";
import gal2 from "../../../assets/gal-2.avif";
import gal3 from "../../../assets/gal-3.avif";
import gal4 from "../../../assets/gal-4.avif";
import gal5 from "../../../assets/gal-5.avif";
import gal6 from "../../../assets/gal-6.avif";
import gal7 from "../../../assets/gal-7.avif";

const { Title } = Typography;

const Hero = () => {
  return (
    <main className="gallery-main-container">
      <div className="container px-3">
        {/* Header Section */}
        <Row className="mb-5">
          <Col className="part1" span={24}>
            <Title level={1} className="text-capitalize gallery-main-title">
              a portfolio of precision
            </Title>
            <h3 className="gallery-subtitle">
              Explore a curated collection of our recent work, showcasing the
              transformative power of a Solstice detail
            </h3>
          </Col>
        </Row>

        {/* Gallery Grid Section */}
        <Image.PreviewGroup>
          {/* FIRST ROW: 2 Big Horizontal Images */}
          <Row gutter={[32, 32]} className="mb-4">
            <Col xs={24} sm={12}>
              <div className="gallery-img-wrapper row-height-400">
                <Image alt="Car Detail 1" src={gal1} />
              </div>
            </Col>
            <Col xs={24} sm={12}>
              <div className="gallery-img-wrapper row-height-400">
                <Image alt="Car Detail 2" src={gal2} />
              </div>
            </Col>
          </Row>

          {/* SECOND ROW: 3 Vertical Images */}
          <Row gutter={[32, 32]} className="mb-4">
            <Col xs={24} sm={12} md={8}>
              <div className="gallery-img-wrapper row-height-450">
                <Image alt="Car Detail 3" src={gal3} />
              </div>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <div className="gallery-img-wrapper row-height-450">
                <Image alt="Car Detail 4" src={gal4} />
              </div>
            </Col>
            <Col xs={24} sm={24} md={8}>
              <div className="gallery-img-wrapper row-height-450">
                <Image alt="Car Detail 5" src={gal5} />
              </div>
            </Col>
          </Row>

          {/* THIRD ROW: Remaining 2 Images to balance layout */}
          <Row gutter={[32, 32]}>
            <Col xs={24} sm={12}>
              <div className="gallery-img-wrapper row-height-400">
                <Image alt="Car Detail 6" src={gal6} />
              </div>
            </Col>
            <Col xs={24} sm={12}>
              <div className="gallery-img-wrapper row-height-400">
                <Image alt="Car Detail 7" src={gal7} />
              </div>
            </Col>
          </Row>
        </Image.PreviewGroup>
      </div>
    </main>
  );
};

export default Hero;