import React from 'react'
import { Row, Col, Container } from "react-bootstrap"
import IllustrationPNG from "../../../assets/imgs/App Icon/PNG/googlapple/Vector Smart Object.png";
import Apple from "../../../assets/imgs/App Icon/PNG/googlapple/download-on-the-app-store-apple.png";
import PlayStore from "../../../assets/imgs/App Icon/PNG/googlapple/en_badge_web_generic.png";
export default function DownloadSection() {
    return (
        <div className="container downlaod-section padding-medium-large">
            <Row className="default-margin">
                <Col className={"d-flex flex-column justify-content-center align-items-center twoColumWithImageAndText-text-area "} lg={6} md={6} sm={12}>
                    <div className="d-flex justify-content-start w-100 ">
                        <h1>Download our App now !
                        </h1>
                    </div>
                    <span>   The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook.
                    </span>
                    <div className="d-flex justify-content-start flex-wrap w-100 mt-4">
                        <img className="google-image" alt="google" src={PlayStore} />
                        <img className="apple-image" alt="apple" src={Apple} />
                    </div>
                </Col>

                <Col className={"twoColumWithImageAndText-image-area    w-100"} lg={6} md={6} sm={12}>
                    <img className="twoColumWithImageAndText-image" alt="hero" src={IllustrationPNG} />
                </Col>
            </Row>
        </div>
    )
}
