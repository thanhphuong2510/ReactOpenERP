import React from 'react';
import './styles.scss';
import Image from "../../Assets/Image";
import {Nav} from "react-bootstrap";

const SlideBar = ()=>{
    return(
        <div className="col-2 max-height ">
            <Nav defaultActiveKey="/home" className="flex-column">
                <img src={Image.logoVMTS} width="70%" className="m-lg-3" />
                <Nav.Link href="/home" className="ml-0">
                    <ul className="d-flex flex-column">
                        Overview
                        <li>User Overview </li>
                        <li>Projects Overview</li>
                        <li>Working Summary</li>
                    </ul>
                </Nav.Link>
                <Nav.Link eventKey="link-1">
                    <ul className="d-flex flex-column">
                        Project
                        <li>Issues</li>
                    </ul>
                </Nav.Link>
                <Nav.Link eventKey="link-2">
                    <ul className="d-flex flex-column">
                        Overtime
                        <li>Employee Overtime </li>
                        <li>Overtime Summary</li>
                    </ul>
                </Nav.Link>
                <Nav.Link eventKey="link-1">
                    <ul className="d-flex flex-column">
                        Report
                        <li>My list</li>
                    </ul>
                </Nav.Link>
            </Nav>

            <h6 className="d-flex mt-lg-5 justify-content-center">VMT Solution</h6>
        </div>
    )
}
export default SlideBar;