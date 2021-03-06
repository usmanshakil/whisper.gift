import React from 'react'
import { Row, Col, Container } from "react-bootstrap"
import Customers from "../../../assets/imgs/App Icon/PNG/stisfaction/People images.png";
import Star from "../../../assets/imgs/App Icon/PNG/stisfaction/startt.png";
import Customer from "../../../assets/imgs/App Icon/PNG/stisfaction/Clip.png";
export default function CustomerStisfaction() {
    return (
      <div className="padding-top-large">
        <Row className="default-margin">
          <Col
            className={"twoColumWithImageAndText-image-area    w-100"}
            lg={6}
            md={6}
            sm={12}
            md={12}
          >
            <img
              className="twoColumWithImageAndText-image"
              alt="hero"
              src={Customers}
            />
          </Col>

          <Col
            className={
              "d-flex flex-column justify-content-center customerStisfaction-text-area CustomerStats "
            }
            lg={6}
            md={6}
            sm={12}
            md={12}

            // style="padding-right: 160px"
          >
            <div className="d-flex justify-content-start tracking-wider w-9/12 xl:w-10/12 2xl:w-10/12 font-bold meet-customer">
              <h1>Meet Customer Satisfaction by using WHISPER.GIFT</h1>
            </div>
            <span className="pt-3 pb-3 mobile-text tracking-wider 2xl:w-10/12">
              The rise of mobile devices transforms the way we consume elevant
              channels such as Facebook.
            </span>
            <div className="d-flex justify-content-start  w-100  mt-4">
              <img className="customer-star" src={Star} alt={"star1"} />
              <img className="customer-star" src={Star} alt={"star2"} />
              <img className="customer-star" src={Star} alt={"star3"} />
              <img className="customer-star" src={Star} alt={"star4"} />
              <img className="customer-star" src={Star} alt={"star5"} />
            </div>
            <div className="d-flex justify-content-start  w-100  mt-4">
              <h4>User friendly & Customizable</h4>
            </div>

            <span className="pt-3 pb-3 tracking-wide bring-text">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution. User generated content in
              real-time will have multiple touchpoints for offshoring.
            </span>
            <div className="d-flex justify-content-start  w-100  mt-4">
              <img className="customer-img " src={Customer} alt={"Customer"} />
              <div className=" ml-3 d-flex flex-column justify-content-start  w-100 pt-3">
                <h5>Zoltan Nemeth</h5>
                <span>CEO of Pixler Lab</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
}
