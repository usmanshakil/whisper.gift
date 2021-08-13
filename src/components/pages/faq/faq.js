import React from 'react'
import { Row, Col, Container } from "react-bootstrap"
import Accordian from './accordian'
export default function FAQ() {

    return (
        <Container className="container padding-medium-large">
            <Row className="default-margin  ">
                <Col className={"faq-main-heading d-flex flex-column justify-content-center text-center pt-5  "} lg={12} md={12} sm={12}>
                    <h1> Frequently asked questions</h1>
                    <Container>
                        <span>The rise of mobile devices transforms the way we consume information entirely
                            and the world's most elevant channels such as Facebook.</span>
                    </Container>
                </Col>
                <Col lg={12} md={12} sm={12}>
                    <Row className=" faq-box">
                        <Col className={"faq-sub-heading d-flex flex-column justify-content-flex-start     "} lg={12} md={12} sm={12}>
                            <h1> Frequently asked questions</h1>

                            <span>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.

                             Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring</span>

                        </Col>

                        <Col className={"faq-sub-heading d-flex   justify-content-flex-start     "} lg={12} md={12} sm={12}>
                            <Accordian />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
