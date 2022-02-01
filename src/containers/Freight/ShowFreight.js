import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getFreight, addFreight } from '../../actions/freight.action'
import { UpdateFreight } from './EditFreight'
import { Layout } from '../../components/Layout'
import { Input } from '../../components/UI/Input'
import './style.css';
import { AllFreight } from './Freights'

/**
* @author
* @function FreightCategory
**/

export const FreightCategory = (props) => {

    const [show, setShow] = useState(false);
    const [freightName, setFreightName] = useState('');
    const [freightRate, setFreightRate] = useState('');

    const freight = useSelector(state => state.freight);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFreight());
    }, [])

    const handleClose = () => {
        const form = {
            name: freightName,
            rate: freightRate
        };
        dispatch(addFreight(form));
        setShow(false);
        window.location.reload();
    };


    const close = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "70px" }}>
                            <h3>Freight Categories</h3>
                            <Button variant='success' onClick={handleShow} >Add New</Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div style={{ paddingTop: "20px" }}>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Freight Category</th>
                                        <th>Freight Rate</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        // freight.freightList.length > 0 ?
                                            freight.freightList.map(freight => (
                                                <>
                                                    <AllFreight allFreight={freight} />
                                                </>
                                            ))
                                            // : null
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Modal show={show} onHide={close}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Freight</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        value={freightName}
                        label={'Freight Category'}
                        placeholder={`Freight Category Name`}
                        onChange={(e) => setFreightName(e.target.value)}
                    />
                    <Input
                        value={freightRate}
                        label={'Freight Rate'}
                        placeholder={`Freight Category Rate`}
                        onChange={(e) => setFreightRate(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" className='refresh-button' onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

        </Layout>
    )
}