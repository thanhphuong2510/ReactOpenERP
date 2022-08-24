import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { TbMessages } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";
import Dropdown from 'react-bootstrap/Dropdown';
import { BsFilePersonFill } from "react-icons/bs";
import './styles.scss'
const NavBar = () =>{
    return(
        <>
            <Navbar className="NavColor">
                <Nav className="me-auto justify-content-start">
                    <Nav.Link href="#home" className="actice">Project</Nav.Link>
                    <Nav.Link href="#features">Messaging</Nav.Link>
                    <Nav.Link href="#pricing">Human Resources</Nav.Link>
                    <Nav.Link href="#pricing">Management System</Nav.Link>
                    <Nav.Link href="#pricing">Reporting</Nav.Link>
                </Nav>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home"><TbMessages /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1"><AiOutlineMail/></Nav.Link>
                    </Nav.Item>
                    <Dropdown>
                        <Dropdown.Toggle className="colornone" id="dropdown-basic">
                           <BsFilePersonFill/> User Name
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </Nav>
            </Navbar>

        </>
    )
}
export default NavBar;