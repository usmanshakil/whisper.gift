import React, { useContext, useState } from 'react'
import { Row, Col } from "react-bootstrap"
// import Modal from 'react-bootstrap/Modal'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Context from "../../../context/Context";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Collapsible from 'react-collapsible';
import IllustrationPNG from "../../../assets/imgs/App Icon/PNG/modal/gift.jpg";

const Mymodal = (props) => {
    const { state, changeModalStatus } = useContext(Context);
    const [steps, setSteps] = useState(1)
    const [phoneNumber, setPhoneNumber] = useState("")
    const handleStep1 = (e) => {
        setSteps(2)
    }
    const handleStep2 = () => {
        setSteps(3)
    }
    const handleStep3 = () => {
        props.setOpenModal(false)
    }
    const OrderSummaryMobile = () => {
        return (
            <Collapsible className="Collapsible  order-summary-mobile" trigger="Order Summary">
                <Row className='order-summary default-margin w-100'>
                    <Col className={" default-margin d-flex flex-column justify-content-flex-start  mt-3   "} lg={6} md={6} sm={6}>
                        <h6>  Your gift </h6>
                    </Col>
                    <Col className={" default-margin d-flex flex-column justify-content-flex-start    mt-3    "} lg={6} md={6} sm={6}>
                        <h6>   $0.00</h6>
                    </Col>
                    <Col className={" default-margin d-flex flex-column justify-content-flex-start  mb-2   "} lg={12} md={12} sm={12}>
                        <p>    Tell us the price of your gift and estimated shipping costs to complete your order. We'll try to use free shipping, but if that's not available you should include it here.</p>
                    </Col>
                    <Col className={" default-margin d-flex flex-column justify-content-flex-start     "} lg={6} md={6} sm={6}>
                        <h6>  Estimated Tax</h6>
                    </Col>
                    <Col className={" default-margin d-flex flex-column justify-content-flex-start     "} lg={6} md={6} sm={6}>
                        <h6>   $0.00</h6>
                    </Col>
                    <Col className={" default-margin d-flex flex-column justify-content-flex-start   mb-2   "} lg={12} md={12} sm={12}>
                        <p>    We'll charge you an estimated 10.25% local sales tax, The difference will be donated at the end of the year to user selected charities.</p>

                    </Col>

                    <Col className={" default-margin d-flex flex-column justify-content-flex-start     "} lg={6} md={6} sm={6}>
                        <h6>  Service Fee</h6>
                    </Col>
                    <Col className={" default-margin d-flex flex-column justify-content-flex-start     "} lg={6} md={6} sm={6}>
                        <h6>$0.00</h6>
                    </Col>
                    <Col className={" default-margin d-flex flex-column justify-content-flex-start      "} lg={12} md={12} sm={12}>
                        <p>     This flat rate fee allows us to operate the Whisper. Gift service.</p>
                    </Col>

                </Row>
            </Collapsible>
        )
    }
    const Step1 = () => {
        return (
            <Form onSubmit={(event) => handleStep1(event)}>

                <Form.Group className="mb-2" onChange={(event) => setPhoneNumber(event.target.value)} >
                    <Form.Label>Phone Number  </Form.Label>
                    <Form.Control type="text" placeholder="Enter Phone Number" />

                </Form.Group>
                <Form.Group className="mb-2"  >
                    <Form.Label> Confirmation code   </Form.Label>
                    <Form.Control type="email" placeholder=" Enter  Confirmation code " />

                </Form.Group>

                <div className="modal-subheading">
                    <span>Help us find the person you want to gift</span>
                </div>
                <Form.Group className="mb-2"  >
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter  Full Name" />
                </Form.Group>
                <Form.Group className="mb-2"  >
                    <Form.Label> Instagram Username </Form.Label>
                    <Form.Control type="text" placeholder=" Enter Instagram Username" />
                </Form.Group>
                <Form.Group className="mb-2"  >
                    <Form.Label> Phone </Form.Label>
                    <Form.Control type="number" placeholder="Enter Phone" />
                </Form.Group>
                <Form.Group className="mb-2"  >
                    <Form.Label>   Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>

                <div className="d-flex justify-content-center flex-wrap mt-2">
                    <Button variant="primary" type="submit" className="btn-modal">
                        Next
                                 </Button>
                    <Button variant="primary" onClick={() => props.setOpenModal(false)} className="btn-modal">
                        Close
                                 </Button>
                </div>

            </Form>
        )
    }

    const Step2 = () => {
        return (
            <Form className="d-flex flex-column  justify-content-between" onSubmit={handleStep2}>
                <div className="">
                    <Form.Group className="mb-2 mt-3" >
                        <Form.Label>Url of the gift    </Form.Label>
                        <Form.Control type="text" placeholder="https://www.instagram.com/notdummy/?hl=en" />

                    </Form.Group>
                    <Form.Group className="mb-2 mt-3"  >
                        <Form.Label>Price     </Form.Label>
                        <Form.Control type="number" placeholder=" Enter  Confirmation code " />

                    </Form.Group>

                    <Form.Group className="mb-2 mt-3  "  >
                        <Form.Label>Get Message (Optional)  </Form.Label>
                        <Form.Control type="textarea" placeholder="Enter you message" />
                    </Form.Group>

                </div>

                <Form.Group className="mb-4 mt-4" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Allow a recipient to choose a cash gift instead of gift that you selected" />
                </Form.Group>

                <div className="d-flex justify-content-center flex-wrap padding-top-large1 ">
                    <Button variant="primary" type="submit" className="btn-modal">
                        Next
                                 </Button>
                    <Button variant="primary" onClick={() => props.setOpenModal(false)} className="btn-modal">
                        Close
                                 </Button>
                </div>

            </Form>
        )
    }
    const Step3 = () => {
        return (
            <Form onSubmit={handleStep3}>

                <Form.Group className="mb-3" >
                    <Form.Label>Full Name  </Form.Label>
                    <Form.Control type="text" placeholder="Enter   Full Name " />

                </Form.Group>
                <Form.Group className="mb-3"  >
                    <Form.Label>   Phone Number   </Form.Label>
                    <Form.Control type="email" placeholder=" Enter    Phone Number " />

                </Form.Group>


                <Form.Group className="mb-4"  >
                    <Form.Label>Address  </Form.Label>
                    <Form.Control type="text" placeholder="Enter    Address" />
                </Form.Group>
                <Form.Group className="mb-4"  >
                    <Form.Label>    Apt,Suit </Form.Label>
                    <Form.Control type="text" placeholder=" Enter    Apt,Suit" />
                </Form.Group>
                <div className="d-flex setp3-city-zip">
                    <Form.Group className="mb-4"  >
                        <Form.Label> City </Form.Label>
                        <Form.Control type="text" placeholder="Enter City" />
                    </Form.Group>
                    <Form.Group className="mb-4 "  >
                        <Form.Label className=" "> State </Form.Label>
                        <Form.Control type="text" placeholder="Enter State" />
                    </Form.Group>
                    <Form.Group className="mb-4"  >
                        <Form.Label className=" "> Zip </Form.Label>
                        <Form.Control type="number" placeholder="Enter Zip" />
                    </Form.Group>
                </div>
                <Form.Group className="mb-4"  >
                    <Form.Label>    Country</Form.Label>
                    <Form.Control type="text" placeholder="Enter Country" />
                </Form.Group>

                <div className="d-flex justify-content-center flex-wrap">
                    <Button variant="primary" type="submit" className="btn-modal">
                        Place   Order
                                 </Button>
                    <Button variant="primary" onClick={() => props.setOpenModal(false)} className="btn-modal">
                        Close
                                 </Button>
                </div>

            </Form>
        )
    }
    return (
        <Modal toggle={() => props.setOpenModal(false)} size="xl" isOpen={props.openModal}  >
            <div className="modal-container " >
                <div className="d-flex justify-content-center align-items-center  ">
                    <Row className="default-margin modal-transparent-bg d-flex  justify-content-center   ">

                        <Col className={" default-margin     d-imagearea-none "} lg={6} md={6} sm={12}>
                            <img className="modal-left-image " src={IllustrationPNG} alt="test" />
                        </Col>
                        <Col className={" default-margin     modal-imputs-area    "} lg={6} md={12} sm={12}>
                            <div>
                                <div className="modal-heading">
                                    <h2>About the gift </h2>
                                </div>
                                {/* order summary mobile view */}

                                <OrderSummaryMobile />

                                {/* order-summay */}

                                {steps === 1 ? <Step1 /> : (steps === 2) ? <Step2 /> : (steps === 3) ? <Step3 /> : ""}

                            </div>
                        </Col>
                    </Row>
                    <Row className="default-margin order-summary-desktop">
                        <Col style={{ padding: "30px" }} className={" default-margin d-flex flex-column justify-content-flex-start   modal-imputs-area  "} lg={12} md={12} sm={12}>
                            <Form className="order-summary"  >
                                <div className="modal-heading">
                                    < h2 > Order Summary</h2>
                                </div>
                                <Row Row className="default-margin pt-4 pb-4 " >
                                    <Col className={" default-margin d-flex flex-column justify-content-flex-start       "} lg={6} md={6} sm={6}>
                                        <h6>  Your gift</h6>
                                    </Col>
                                    <Col className={" default-margin d-flex flex-column justify-content-flex-start      "} lg={6} md={6} sm={6}>
                                        <h6>   $0.00</h6>
                                    </Col>
                                    <Col className={" default-margin d-flex flex-column justify-content-flex-start  mb-2   "} lg={12} md={12} sm={12}>
                                        <p>    Tell us the price of your gift and estimated shipping costs to complete your order. We'll try to use free shipping, but if that's not available you should include it here.</p>
                                    </Col>
                                    <Col className={" default-margin d-flex flex-column justify-content-flex-start     "} lg={6} md={6} sm={6}>
                                        <h6>  Estimated Tax</h6>
                                    </Col>
                                    <Col className={" default-margin d-flex flex-column justify-content-flex-start     "} lg={6} md={6} sm={6}>
                                        <h6>   $0.00</h6>
                                    </Col>
                                    <Col className={" default-margin d-flex flex-column justify-content-flex-start   mb-2   "} lg={12} md={12} sm={12}>
                                        <p>    We'll charge you an estimated 10.25% local sales tax, The difference will be donated at the end of the year to user selected charities.</p>

                                    </Col>

                                    <Col className={" default-margin d-flex flex-column justify-content-flex-start     "} lg={6} md={6} sm={6}>
                                        <h6>  Service Fee</h6>
                                    </Col>
                                    <Col className={" default-margin d-flex flex-column justify-content-flex-start     "} lg={6} md={6} sm={6}>
                                        <h6>$0.00</h6>
                                    </Col>
                                    <Col className={" default-margin d-flex flex-column justify-content-flex-start      "} lg={12} md={12} sm={12}>
                                        <p>     This flat rate fee allows us to operate the Whisper. Gift service.</p>
                                    </Col>
                                </Row>

                            </Form>

                        </Col>
                    </Row>
                </div>

            </div >
        </Modal >

    )
}
export default Mymodal
