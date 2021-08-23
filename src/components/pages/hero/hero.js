import React from 'react'
import { Row, Col, Container } from "react-bootstrap"
import Gift from "../../../assets/imgs/App Icon/PNG/Layer 12.png";
import IllustrationPNG from "../../../assets/imgs/App Icon/PNG/Layer 5.png";
import { useHistory } from "react-router-dom";
import Circle from "../../../assets/imgs/App Icon/JPG/circle.jpg";
import Cross from "../../../assets/imgs/App Icon/JPG/cross.jpg";
import Square from "../../../assets/imgs/App Icon/JPG/square.jpg";


export default function Hero() {
    const history = useHistory()
    return (
      <div className="hero-container relative">
        <Container>
          <Row className="default-margin">
            <Col
              className={
                "d-flex flex-column justify-content-center align-items-center hero-text-area relative"
              }
              lg={6}
              md={12}
              sm={12}
            >
              <img className="square-img" src={Square} />
              <img className="cross-img" src={Cross} />

              <h1>Make your move gift you anyone.</h1>
              <span>
                {" "}
                Don't know the shipping address, no problem. We track down
                shipping information and send the gift for you. You stay
                anonymous (or not).{" "}
              </span>
              <div className="d-flex justify-content-start w-100 mt-4">
                <button
                  onClick={() => {
                    history.push("/how-it-work");
                  }}
                  className="hero-btn"
                >
                  Learn more
                </button>
              </div>
            </Col>
            <Col
              className={"  hero-image-area  p-0 relative"}
              lg={6}
              md={12}
              sm={12}
            >
              <img className="circle-img2" src={Circle} />

              <img className="hero-image" alt="hero" src={Gift} />
            </Col>
          </Row>
        </Container>
        <div className={"hero-footer-image-area relative"}>
          {/* <img className="absolute cross-img" src={Cross} /> */}
          <img className="absolute cross-img1" src={Cross} />
          <img className="absolute cross-img2" src={Cross} />

          <img
            className="hero-footer-image-area"
            alt="hero"
            src={IllustrationPNG}
          />
        </div>
      </div>
    );
}
