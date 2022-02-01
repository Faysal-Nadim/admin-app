import React, { useEffect, useState } from 'react'
import { Input } from '../../components/UI/Input'
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getFreight, upRequest } from '../../actions';


/**
* @author
* @function EditRequest
**/

export const EditRequest = ({ editReq }) => {

    const freight = useSelector(state => state.freight);

    const _id = editReq._id;
    const [freightCat, setFreightCat] = useState(editReq.freightCat);
    const [reqID, setReqID] = useState(editReq.reqID);
    const [title, setTitle] = useState('');
    const [productLink, setProductLink] = useState(editReq.productLink);
    const [note, setNote] = useState(editReq.note);
    const [price, setPrice] = useState('');
    const [productImage, setProductImage] = useState([]);
    const [status, setStatus] = useState(editReq.status);
    const [estDelivery, setEstDelivery] = useState('');
    const [shipFrom, setShipFrom] = useState(editReq.shipFrom);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFreight());
    }, [])

    const handleImage = (e) => {
        setProductImage([...productImage, e.target.files[0]]);
    }

    const updatedRequest = () => {

        const form = new FormData();

        form.append("_id",_id);
        form.append("freightCat", freightCat);
        form.append("title", title);
        form.append("productLink", productLink);
        form.append("note", note);
        form.append("price", price);
        form.append("status", status);
        form.append("estDelivery", estDelivery);
        form.append("shipFrom", shipFrom);

        for(let pic of productImage){
            form.append("productImage", pic);
        }

        dispatch(upRequest(form));
    }

    return (
        <>
            <Form onSubmit={updatedRequest}>
                <Row>
                    <Col>
                        <label><b>Request ID {reqID}</b></label>
                    </Col>
                </Row>
                <Row style={{ marginTop: "5px" }}>
                    <Col>
                        <label>Freight Category</label>
                        <select
                            className='form-control'
                            value={freightCat}
                            onChange={(e) => setFreightCat(e.target.value)}
                        >
                            <option>Select Freight Category</option>
                            {
                                freight.freightList.map(option =>
                                    <option key={option._id} value={option._id}>{`${option.name} (BDT ${option.rate}/KG)`}</option>
                                )
                            }
                        </select>
                    </Col>
                    <Col>
                        <label>Request Status</label>
                        <select
                            label={'Request Status'}
                            className='form-control'
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="">Select Status</option>
                            <option value="pending">Pending</option>
                            <option value="approved">Approved</option>
                            <option value="rejected">Rejected</option>
                        </select>
                    </Col>
                    <Col>
                    <label>Country Of Origin</label>
                        <select
                            label={'Country Of Origin'}
                            className='form-control'
                            value={shipFrom}
                            onChange={(e) => setShipFrom(e.target.value)}
                        >
                            <option value="">Select Origin</option>
                            <option value="UK">UK</option>
                            <option disabled value="USA">USA</option>
                            <option value="China">China</option>
                        </select>
                    </Col>
                </Row>

                <Row style={{ marginTop: "5px" }}>
                    <Col>
                        <Input
                            label={'Product Title'}
                            placeholder={'Enter Product Title'}
                            value={title}
                            type={'text'}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <Input
                            label={'Product Link'}
                            placeholder={'Enter Product Title'}
                            value={productLink}
                            type={'text'}
                            onChange={(e) => setProductLink(e.target.value)}
                        />
                    </Col>
                </Row>
                
                <Row style={{ marginTop: "5px" }}>
                    <Col>
                        <Input
                            label={'Product Price'}
                            placeholder={'Enter Product Price'}
                            value={price}
                            type={'text'}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <Input
                            label={'Estimated Delivery Time'}
                            placeholder={'Enter Estimated Delivery Time'}
                            value={estDelivery}
                            type={'text'}
                            onChange={(e) => setEstDelivery(e.target.value)}
                        />
                    </Col>
                </Row>
                <Row style={{ marginTop: "5px" }}>
                    <Col>
                        <Input
                            label={'Request Notes'}
                            placeholder={'Product Variatons'}
                            value={note}
                            type={'text'}
                            onChange={(e) => setNote(e.target.value)}
                        />
                    </Col>
                    <Col>
                    {
                        editReq.productImage.map((pic, index) => (
                            <div key={index}>
                                {pic.name}
                            </div>
                        ))
                    }
                        <Input
                            label={'Product Picture'}
                            placeholder={'Choose File'}
                            type={'file'}
                            onChange={handleImage}
                        />
                    </Col>
                </Row>
                

                <Button style={{ marginTop: '10px' }} variant="primary" type="submit">
                    Approve
                </Button>
            </Form>
        </>
    )

}