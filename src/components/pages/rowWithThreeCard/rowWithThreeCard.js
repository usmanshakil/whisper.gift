import React, { useState } from 'react'
import { Row, Col } from "react-bootstrap"
import Badge from "../../../assets/imgs/App Icon/PNG/card logo/badge.png";
import Bill from "../../../assets/imgs/App Icon/PNG/card logo/bill.png";
import Network from "../../../assets/imgs/App Icon/PNG/card logo/network.png";
export default function RowWithThreeCard() {
    const [cardData] = useState([
        {
            backgroundColor: "#FFEA94",
            text: "Place your Whisper.Gift order.",
            logo: Bill
        }
        , {
            backgroundColor: "#FFEA94",
            text: "Whisper.Gift will attempt to contact the recipient to arrange delivery.",

            logo: Network
        }
        , {
            backgroundColor: "#E4FFEE",
            text: "f we're unable to secure shipping information within 72 hrs we'll refund your entire order(including service fee)",
            logo: Badge
        }

    ])
    return (
        <div className="container padding-medium-large">
            <Row className="default-margin  ">
                <Col className={"twoColumWithImageAndText-main-heading pt-5  w-100"} lg={12} md={12} sm={12}>
                    Gift delivered or your money back
                </Col>
                {cardData.map((item, index) =>
                    <Col key={index} className={"d-flex flex-column justify-content-start align-items-flex-start twoColumWithImageAndText-card  mt-3"} lg={4} md={4} sm={12}>
                        <div style={{ backgroundColor: `${item.backgroundColor}` }} className="d-flex justify-content-center align-items-center   circular-icon-container ">
                            <img src={item.logo} alt="illustration" />
                        </div>
                        <span >
                            {item.text}
                        </span>
                    </Col>
                )}


            </Row>
        </div>
    )
}
