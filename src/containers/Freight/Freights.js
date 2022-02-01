import { useState } from 'react';
import { UpdateFreight } from './EditFreight';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { deleteFreightByID } from '../../actions';

export const AllFreight = ({ allFreight }) => {
    const [show, setShow] = useState(false);

    const newHandleShow = () => setShow(true);
    const close = () => setShow(false);
    // const dispatch = useDispatch();

    // const _id = allFreight._id;

    // const handleDelete = () => {
    //     const payload = { _id };
    //     dispatch(deleteFreightByID(payload));
    //     Swal.fire({
    //         icon: 'success',
    //         title: 'Freight Category Deleted!',
    //         showConfirmButton: true,
    //         timer: 1500
    //     }).then(function(){
    //         window.location.reload();
    //     })
    // }

    return (
        <>
            <tr key={allFreight._id}>
                <td>{ }</td>
                <td>{allFreight.name}</td>
                <td>BDT {allFreight.rate}/KG</td>
                <td style={{ width: "25%" }}>
                    {<Button onClick={newHandleShow} variant="outline-primary"><b>Update</b></Button>}{' '}
                    {/* {<Button onClick={handleDelete} variant="outline-danger"><b>Delete</b></Button>} */}
                </td>
            </tr>
            <Modal show={show} onHide={close}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Freight</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UpdateFreight theFreight={allFreight} />
                </Modal.Body>
            </Modal>
        </>
    )
}