import React, { useContext } from 'react'
import { Row, Col } from "react-bootstrap"
import Context from "../../../context/Context";
import IllustrationPNG from "../../../assets/imgs/App Icon/PNG/Component 1 – 1.png";
import Mymodal from '../modal/modal';
export default function TwoColumWithImageAndText(props) {
    const { state, changeModalStatus } = useContext(Context);

    return (
        <div className="container padding-medium-large">
            <Row className="default-margin">

                <Col className={"twoColumWithImageAndText-image-area    w-100"} lg={6} md={6} sm={12}>
                    <img className="twoColumWithImageAndText-image" alt="hero" src={IllustrationPNG} />
                </Col>
                <Col className={"d-flex flex-column justify-content-center align-items-center twoColumWithImageAndText-text-area "} lg={6} md={6} sm={12}>

                    <div className="d-flex justify-content-start w-100 ">
                        <h1>Send your gift now
                        </h1>
                    </div>
                    <span>    What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </span>
                    <div className="d-flex justify-content-start w-100 mt-4">
                        <button onClick={() => { props.openModal(true) }} className="hero-btn" >Send Gift  </button>
                    </div>
                </Col>
                <Mymodal />
            </Row>
        </div>
    )
}
