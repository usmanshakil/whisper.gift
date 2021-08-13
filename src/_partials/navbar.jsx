import React from "react";
// import Context from "../context/Context";
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";
import LOGO from "../assets/imgs/App Icon/PNG/navbar/Whisper.Gift-removebg-preview.png";
const NavBar = () => {
    // const { addSideBarClass, setAddSideBarClass } = useContext(Context);

    return (
        <>
            <Navbar className="main-nav-bar"
                collapseOnSelect expand="lg" variant="light" >

                <img src={LOGO} alt="logo1" className="logo1" />

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Link className="pl-4 nav-item" to="/">   Home   </Link>
                    </Nav>
                    <Nav>
                        <Link className="pl-4 nav-item" to="/how-it-work">   How it works   </Link>
                    </Nav>
                    <Nav>
                        <Link className="pl-4 nav-item" to="/thankyou"> Thank you  </Link>
                    </Nav>


                </Navbar.Collapse>
            </Navbar >
        </>
    );
};

export default NavBar;
