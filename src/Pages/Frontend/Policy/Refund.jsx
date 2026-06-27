import React from "react";
import { Row, Col } from "antd";

const Refund = () => {
  return (
    <>
      <div className="container-fluid refund-container px-0" style={{ marginTop: "150px" }}>
        
        

        {/* Main Content Area */}
        <div className="container mt-5">
          <Row justify="center">
            <Col xs={24} lg={20}>
              <div className="page-wrapper">
                <h1 style={{fontSize:"60px"}}>Refund Policy</h1>

                <h1>Refund Policy - the basics</h1>
                <p style={{fontSize:"25px"}}>
                  Having said that, a Refund Policy is a legally binding document that is
                  meaningful to establish the legal relations between you and your customers
                  regarding how and if you will provide them with a refund. Online
                  businesses selling products or services are sometimes required to present their 
                  refund policy to comply with local consumer protection laws.
                </p>

                <h1>What to include in the Refund Policy</h1>
                <p style={{fontSize:"25px"}}>
                  Generally speaking, a Refund Policy often addresses these types of
                  issues: the timeframe for asking for a refund; will you be offering a
                  full or partial refund; under what conditions will you allow a refund;
                  what will you use as proof of purchase and how should the customers
                  return the product; and more.
                </p>

                <h1>Our Refund Policy</h1>
                <p style={{fontSize:"25px"}}>
                  We at <em>Solstice Detailing</em> offer a booking refund and service cancellation
                  policy that lasts <em>7</em> days prior to your scheduled appointment. If 
                  <em> 7</em> days have gone by since your booking confirmation without notice,
                  unfortunately we can't offer you a full refund or rescheduling.
                </p>

                <p style={{fontSize:"25px"}}>
                  To be eligible for a service deposit return, your cancellation request must be 
                  submitted through our official channels with a valid booking receipt or confirmation email.
                </p>

                <h1>Non-returnable items & services</h1>
                <p style={{fontSize:"25px"}}>
                  Several types of custom packages are exempt from being refunded once the chemical 
                  application process (like Ceramic Coating or Paint Protection Film treatments) has started 
                  on the vehicle.
                </p>

                <h1>Refunds (if applicable)</h1>
                <p style={{fontSize:"25px"}}>
                  Once your cancellation request is received and processed, we will send you an email to
                  notify you of the approval or rejection of your refund based on the timeframe. If you are approved,
                  then your refund will be processed, and a credit will automatically be
                  applied to your credit card or original method of payment within 5-7 working days.
                </p>

                <h1>Contact us</h1>
                <p style={{fontSize:"25px"}}>
                  If you have any questions about our Refund Policy, please contact us at:
                </p>
                
                <p style={{fontSize:"25px"}} className="contact-info">
                  <strong>Company:</strong> <em>Solstice Detailing Support</em>
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

export default Refund;