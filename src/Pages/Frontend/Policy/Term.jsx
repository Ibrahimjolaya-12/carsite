import React from "react";
import { Row, Col } from "antd";

const Term = () => {
  return (
    <>
      <div
        className="container-fluid Term-container px-0"
        style={{ marginTop: "150px" }}
      >
        {/* Top Edge-to-Edge Black Disclaimer Box */}

        {/* Main Content Area */}
        <div className="container mt-5">
          <Row justify="center">
            <Col xs={24} lg={20}>
              <div className="page-wrapper">
                <h1 style={{ fontSize: "60px" }}>Terms & Conditions</h1>

                <h1>Term Policy - the basics</h1>
                <p style={{ fontSize: "25px" }}>
                  Having said that, a Term Policy is a legally binding document
                  that is meaningful to establish the legal relations between
                  you and your customers regarding how and if you will provide
                  them with a Term. Online businesses selling products or
                  services are sometimes required to present their Term policy
                  to comply with local consumer protection laws.
                </p>

                <h1>A legal disclaimer</h1>
                <p style={{ fontSize: "25px" }}>
                  The explanations and information provided on this page are
                  only general and high-level explanations and information on
                  how to write your own document of Terms & Conditions. You
                  should not rely on this article as legal advice or as
                  recommendations regarding what you should actually do, because
                  we cannot know in advance what are the specific terms you wish
                  to establish between your business and your customers and
                  visitors. We recommend that you seek legal advice to help you
                  understand and to assist you in the creation of your own Terms
                  & Conditions.
                </p>

                <h1>Terms & Conditions - the basics</h1>
                <p style={{ fontSize: "25px" }}>
                  Having said that, Terms and Conditions (“T&C”) are a set of
                  legally binding terms defined by you, as the owner of this
                  website. The T&C set forth the legal boundaries governing the
                  activities of the website visitors, or your customers, while
                  they visit or engage with this website. The T&C are meant to
                  establish the legal relationship between the site visitors and
                  you as the website owner.
                </p>

                <p style={{ fontSize: "25px" }}>
                  T&C should be defined according to the specific needs and
                  nature of each website. For example, a website offering
                  products to customers in e-commerce transactions requires T&C
                  that are different from the T&C of a website only providing
                  information (like a blog, a landing page, and so on).
                </p>
                <p style={{ fontSize: "25px" }}>
                  T&C provide you as the website owner the ability to protect
                  yourself from potential legal exposure, but this may differ
                  from jurisdiction to jurisdiction, so make sure to receive
                  local legal advice if you are trying to protect yourself from
                  legal exposure.
                </p>

                <h1>What to include in the T&C document</h1>
                <p style={{ fontSize: "25px" }}>
                  Generally speaking, T&C often address these types of issues:
                  Who is allowed to use the website; the possible payment
                  methods; a declaration that the website owner may change his
                  or her offering in the future; the types of warranties the
                  website owner gives his or her customers; a reference to
                  issues of intellectual property or copyrights, where relevant;
                  the website owner’s right to suspend or cancel a member’s
                  account; and much, much more.
                </p>

                
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Term;
