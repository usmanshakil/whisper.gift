import React, { useState } from 'react'
import { Row, Col, Container } from "react-bootstrap"
import IllustrationPNG from "../../../assets/imgs/App Icon/PNG/howitwork/circle.jpg";
export default function HowItWorkSteps() {

    const [stepsData] = useState([
        {
            backgroundColor: "#FFEA94",
            text: "Find a gift for someone from any website.",
            step: "Step 1"
        }
        , {
            backgroundColor: "#FFEA94",
            text: " Tell us about that someone by providing a public instagram or mobile number. ",

            step: "Step 2"
        }
        , {
            backgroundColor: "#E4FFEE",
            text: " Tell us about the gift by providing the url, size, color, and cost.",
            step: "Step 3"
        },
        {
            backgroundColor: "#FFEA94",
            text: " Place your order with Whisper. Gifts paying for the gift and our $10.00  flat rate service fee",
            step: "Step 4"
        }
        , {
            backgroundColor: "#FFEA94",
            text: " We collect shipping info by messaging  the recipient that an anonymous person is trying to send them a gift.They accept  by providing shipping details. ",

            step: "Step 5"
        }
        , {
            backgroundColor: "#E4FFEE",
            text: " We buy and ship the gift on your behalf including either a personalized  or anonymous note.",
            step: "Step 6"
        }

    ])
    return (
      <>
        <div className="padding-medium-large mb-3">
          {/* desktop view  */}
          <div className="  howItWorkSteps-dektop pt-4">
            <Row className="default-margin ">
              {/* ist */}
              <Col
                className={
                  "d-flex flex-column justify-content-center align-items-center howItWorkSteps-text-area "
                }
                lg={4}
                md={4}
                sm={12}
              >
                <Row className="default-margin">
                  <Col
                    className={
                      "d-flex flex-column justify-content-center align-items-center howItWorkSteps-text-area mb-5"
                    }
                    lg={12}
                    md={12}
                    sm={12}
                  >
                    <span className="pl-24 pb-5 text-right">
                      {stepsData[1].text}{" "}
                    </span>
                  </Col>
                  <Col
                    className={
                      "d-flex flex-column justify-content-center align-items-center howItWorkSteps-text-area mt-5"
                    }
                    lg={12}
                    md={12}
                    sm={12}
                  >
                    <span className="pl-20 text-right">
                      {" "}
                      {stepsData[2].text}{" "}
                    </span>
                  </Col>
                </Row>
              </Col>
              {/* 2nd */}
              <Col
                className={
                  "d-flex flex-column justify-content-center align-items-center howItWorkSteps-image-area "
                }
                lg={4}
                md={4}
                sm={4}
              >
                <Row className="default-margin">
                  <Col
                    className={
                      "d-flex flex-column justify-content-center align-items-center howItWorkSteps-text-area "
                    }
                    lg={12}
                    md={12}
                    sm={12}
                  >
                    <span className="pb-4">
                      {stepsData[0].text}{" "}
                    </span>
                  </Col>
                  <Col
                    className={
                      "d-flex flex-column justify-content-center align-items-center howItWorkSteps-text-area "
                    }
                    lg={12}
                    md={12}
                    sm={12}
                  >
                    <img
                      className="twoColumWithImageAndText-image"
                      alt="hero"
                      src={IllustrationPNG}
                    />
                  </Col>
                  <Col
                    className={
                      "d-flex flex-column justify-content-center align-items-center howItWorkSteps-text-area "
                    }
                    lg={12}
                    md={12}
                    sm={12}
                  >
                    <span className="text-center pt-3"> {stepsData[3].text} </span>
                  </Col>
                </Row>
              </Col>
              {/* 3rd */}
              <Col
                className={
                  "d-flex flex-column justify-content-center align-items-center howItWorkSteps-text-area "
                }
                lg={4}
                md={4}
                sm={12}
              >
                <Row className="default-margin">
                  <Col
                    className={
                      "d-flex flex-column justify-content-center align-items-center howItWorkSteps-text-area mb-4"
                    }
                    lg={12}
                    md={12}
                    sm={12}
                  >
                    <span className="pr-5"> {stepsData[5].text} </span>
                  </Col>
                  <Col
                    className={
                      "d-flex flex-column justify-content-center align-items-center howItWorkSteps-text-area mt-4"
                    }
                    lg={12}
                    md={12}
                    sm={12}
                  >
                    <span className="pr-16"> {stepsData[4].text} </span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>

          {/* mobile view */}
          <div className="  howItWorkSteps-mobile">
            <Row className="default-margin  ">
              <Col
                className={"twoColumWithImageAndText-main-heading pt-5  w-100"}
                lg={12}
                md={12}
                sm={12}
              >
                Setps :
              </Col>
              {stepsData.map((item, index) => (
                <Col
                  key={index}
                  className={
                    "d-flex flex-column justify-content-start align-items-flex-start twoColumWithImageAndText-card  mt-3"
                  }
                  lg={4}
                  md={4}
                  sm={12}
                >
                  <div
                    style={{ backgroundColor: `${item.backgroundColor}` }}
                    className="d-flex justify-content-center align-items-center   circular-icon-container "
                  >
                    {item.step}
                  </div>
                  <span>{item.text}</span>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </>
    );
}
