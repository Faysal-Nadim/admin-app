import React from 'react';
import { Badge, Button, Modal } from 'react-bootstrap';
import { EditRequest } from './EditRequest';
import { useState } from 'react';
import { RejectRequest } from './RejectRequest';

/**
* @author
* @function ShowPending
**/

export const ShowPending = ({ pendingReq }) => {

    const [show, setShow] = useState(false);
    const [rshow, setrShow] = useState(false);


    const newHandleShow = () => setShow(true);
    const rejectShow = () => setrShow(true);
    const close = () => setShow(false);
    const Rclose = () => setrShow(false);


    return (
        <>
            <tr key={pendingReq._id}>
                <td>{ }</td>
                <td>{pendingReq.reqID}</td>
                <td style={{ width: "10%" }}>{pendingReq.shipFrom}</td>
                <td style={{ width: "10%" }} ><Badge bg="primary">{pendingReq.status.toUpperCase()}</Badge></td>
                <td style={{ width: "25%" }}>{pendingReq.note}</td>
                <td style={{ width: "20%" }}>
                    {<Button onClick={newHandleShow} variant="outline-success"><b>Approve</b></Button>}{' '}
                    {<Button onClick={rejectShow} variant="outline-danger"><b>Reject</b></Button>}
                </td>
                <Modal size="lg" show={show} onHide={close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Approve Request</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditRequest editReq={pendingReq} />
                    </Modal.Body>
                </Modal>
                <Modal show={rshow} onHide={Rclose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Reject Request</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <RejectRequest rejectReq={pendingReq} />
                    </Modal.Body>
                </Modal>
            </tr>
        </>
    )

}