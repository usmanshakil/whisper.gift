import React from 'react'
import { Row, Col, Container } from "react-bootstrap"
import Gift from "../../../assets/imgs/App Icon/PNG/Layer 12.png";
import IllustrationPNG from "../../../assets/imgs/App Icon/PNG/Layer 5.png";
import { useHistory } from "react-router-dom";
export default function Hero() {
    const history = useHistory()
    return (
        <div className="hero-container">
            <Container>
                <Row className="default-margin">
                    <Col className={"d-flex flex-column justify-content-center align-items-center hero-text-area        "} lg={6} md={12} sm={12}>

                        <h1>Make your move gift you anyone.</h1>
                        <span>     Don't know the shipping address, no problem. We track down
                        shipping information and send the gift for you. You stay
                    anonymous (or not). </span>
                        <div className="d-flex justify-content-start w-100 mt-4">
                            <button onClick={() => { history.push('/how-it-work') }} className="hero-btn" >Learn more</button>
                        </div>

                    </Col>
                    <Col className={"  hero-image-area  p-0"} lg={6} md={12} sm={12}>
                        <img className="hero-image" alt="hero" src={Gift} />
                    </Col>
                    {/* <div className={"hero-footer-image-area"}  >
                        <img className="hero-footer-image-area" alt="hero" src={IllustrationPNG} />
                    </div> */}
                </Row>
            </Container>

        </div>
    )
}
