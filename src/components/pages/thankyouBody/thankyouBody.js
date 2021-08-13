import React from 'react'
import { Row, Col, Container } from "react-bootstrap"
import IllustrationPNG from "../../../assets/imgs/App Icon/PNG/thank you/Layer 24.png";
import * as Icon from 'react-feather';
import { Link } from "react-router-dom";
export default function ThankyouBody() {
    return (
        <div className="  thankyou-body">
            <Container>
                <Row className="default-margin ">
                    <Col className={"d-flex flex-column justify-content-center align-items-center thankyou-body-box "} lg={12} md={12} sm={12}>
                        <img className="twoColumWithImageAndText-image" alt="hero" src={IllustrationPNG} />
                        <div className="d-flex justify-content-center align-items-center  text-center thankyou-body-heading">
                            <h1>Thank you  </h1>
                        </div>
                        <div className="d-flex justify-content-center align-items-center  text-center thankyou-body-sub-heading">
                            <h5>Lorem ipsum dolor smith Lorem ipsum dolor smith Lorem ipsum dolor smith </h5>
                        </div>
                        <span className="thankyou-body-text text-center"> Lorem ipsum dolor smith Lorem ipsum dolor smith Lorem ipsum dolor smithLorem ipsum dolor smithLorem ipsum dolor smithLorem ipsum dolor smithLorem ipsum dolor smithLorem ipsum dolor smith  </span>
                        <div className="d-flex justify-content-center align-items-center  text-center mt-4 thankyou-body-links">

                            <Link to="/">Home</Link>
                        </div>
                        <div className="d-flex justify-content-center align-items-center  text-center thankyou-body-social-links ">

                            <span className="thankyou-link-fb">  <Link to="/">  <Icon.Twitter color="white" className="footer-call   " />     </Link></span>
                            <span className="thankyou-link-in  ml-1">   <Link to="/">  <Icon.Instagram color="white" className="footer-call " />     </Link></span>
                            <span className="thankyou-link-twitter  ml-1">   <Link to="/">  <Icon.Facebook color="white" className="footer-call  " />     </Link></span>

                        </div>
                    </Col>
                </Row></Container>
        </div>
    )
}
