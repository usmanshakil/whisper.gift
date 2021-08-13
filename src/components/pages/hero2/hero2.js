import React from 'react'
import { Row, Col } from "react-bootstrap"
import IllustrationPNG from "../../../assets/imgs/App Icon/PNG/Layer 5.png";
export default function Hero2(props) {
    return (
        <div className="hero-container">
            <Row className="default-margin">
                <Col className={"d-flex flex-column justify-content-center align-items-center hero2-text-area container p-5 "} lg={12} md={12} sm={12}>
                    <h1>{props.title1}<span>{props.title2}</span></h1>
                </Col>
                <div className={"hero-footer-image-area pt-5 "}  >
                    {/* <img className="hero-footer-image-area" alt="hero" src={IllustrationPNG} /> */}
                </div>
            </Row>
        </div>
    )
}
