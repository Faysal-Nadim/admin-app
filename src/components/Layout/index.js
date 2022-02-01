import React, { useEffect, useState } from 'react';
import { Header } from '../Header';
import { NavLink } from 'react-router-dom';
import { Col, Row, Container, Accordion } from 'react-bootstrap';
import './style.css'

/**
* @author
* @function Layout
**/

export const Layout = (props) => {
    const [expand, setExpand] = useState(false);

    return (
        <>
            <Header />
            {
                props.sidebar ?
                    <Container fluid>
                        <Row>
                            <Col md={2} className='sidebar' style={{ display: "flex" }}>
                                <ul>
                                    <li><NavLink exact to={`/`}>Dashboard</NavLink> </li>
                                    <li><NavLink to={`/requests`}>Requests</NavLink></li>
                                    <li><NavLink to={`/orders`}>Orders</NavLink> </li>
                                    <li><NavLink to={`/freights`}>Freight Category</NavLink> </li>
                                </ul>
                            </Col>
                            <Col md={10} style={{ marginLeft: "200px" }} >
                                {props.children}
                            </Col>
                        </Row>
                    </Container>
                    : props.children
            }
        </>
    )
}