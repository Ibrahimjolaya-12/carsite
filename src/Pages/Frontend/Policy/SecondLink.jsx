import React from "react";
import { Row, Col } from "antd";

const SecondLink = () => {
  return (
    <>
      {/* FIXED: px-0 lagaya taake fluid container sides par padding na chore */}
      <div className="container-fluid accessibility-container px-0" style={{ marginTop: "150px" }}>
        
        {/* FIXED: Row se bahar nikala aur edge-to-edge display block banaya */}
        <div style={{ backgroundColor: "black", color: "white", width: "100%", padding: "50px 80px" }}>
          <p style={{ fontSize: "28px", margin: 0, lineHeight: "1.6", fontWeight: "300" }}>
            The purpose of the following template is to assist you in writing
            your accessibility statement. Please note that you are responsible
            for ensuring that your site's statement meets the requirements of
            the local law in your area or region. *Note: This page currently
            has several sections. Once you complete editing the Accessibility
            Statement below, you need to delete this section. To learn more
            about this, check out our article “Accessibility: Adding an
            Accessibility Statement to Your Site”.
          </p>
        </div>

        {/* Niche wala content grid separate kar diya standard spacing ke sath */}
        <div className="container mt-5">
          <Row justify="center">
            <Col xs={24} lg={20}>
              <div className="page-wrapper">
                <h1>Accessibility Statement</h1>

                <p className="last-updated">
                  This statement was last updated on <em>June 24, 2026</em>.
                </p>

                <p>
                  We at <em>Solstice Detailing</em> are working to make our site
                  accessible to people with disabilities.
                </p>

                <h2>What web accessibility is</h2>

                <p>
                  An accessible site allows visitors with disabilities to browse
                  the site with the same or a similar level of ease and enjoyment
                  as other visitors. This can be achieved with the help of
                  supporting technologies, such as screen readers and tools that
                  enlarge text.
                </p>

                <h2>What we are doing</h2>

                <p>
                  We are working hard to increase the accessibility and usability
                  of our website and in doing so adhere to many of the available
                  standards and guidelines. We are currently working to achieve
                  WCAG 2.1 AA conformance level of the Web Content Accessibility
                  Guidelines (WCAG).
                </p>

                <h2>Declaration of partial compliance</h2>

                <p>
                  The content on this site may have sections that are not yet
                  fully accessible, as we are in the process of making
                  improvements. If you find anything that is not accessible to
                  you, please contact us.
                </p>

                <h2>Accessibility arrangements in the organization</h2>

                <p>
                  Our management team acts as our accessibility coordinator. If
                  you experience any difficulty in accessing any part of this
                  website, please feel free to contact us.
                </p>

                <h2>Contact us</h2>

                <p>
                  If you wish to report an accessibility issue, have any questions
                  or need assistance, please contact our Support Team:
                </p>

                <p className="contact-info">
                  <strong>Name:</strong> <em>Solstice Detailing Support</em>
                  <br />
                  <strong>Phone:</strong> <em>123-456-7890</em>
                  <br />
                  <strong>Email:</strong> <em>ibrahimjolaya@gmail.com</em>
                </p>
              </div>
            </Col>
          </Row>
        </div>

      </div>
    </>
  );
};

export default SecondLink;