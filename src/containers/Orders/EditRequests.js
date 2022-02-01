import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Input } from '../../components/UI/Input';
import { generatePublicURL } from '../../urlconfig';
import { useDispatch } from 'react-redux';
import { updateReq } from '../../actions/order.action';

/**
* @author
* @function EditRequests
**/

export const EditRequests = ({ order, items }) => {
    const [quantity, setQuantity] = useState(items.quantity);
    const [freightRate, setFreightRate] = useState(items.freightRate);
    const [reqStatus, setReqStatus] = useState(items.reqStatus);
    const itemPrice = quantity * (items.price);
    const _id = order._id;
    const id = items._id;
    const request = items.request;
    const freightCategory = items.freightCategory;
    const price = items.price


    const dispatch = useDispatch();

    const updateProduct = (e) => {
        const updatedProduct = {
            id,
            _id,
            request,
            freightCategory,
            price,
            quantity, 
            freightRate, 
            reqStatus, 
            itemPrice
        };
        dispatch(updateReq(updatedProduct))
        e.preventDefault()
    }
    
    return (
        <>
            <Row>
                <Col>
                    <label style={{ marginBottom: "5px", marginTop: "5px" }}><b>Product ID {items.request.reqID}</b></label>
                </Col>
            </Row>
            <Row>
                <Col md={2}>
                    <div>
                        {
                            items.request.productImage.map(image => (
                                <div className='orderImg'>
                                    <img src={generatePublicURL(image.img)} />
                                </div>
                            ))
                        }

                    </div>
                </Col>
                <Col md={5}>
                    <div style={{ fontSize: "14px", paddingLeft: "30px" }}>
                        <div>
                            {
                                order.invoiceStatus === 'PAID' ?
                                    <div>
                                        <span>Quantity: <b>{quantity}</b></span>
                                    </div>
                                    :
                                    <div>
                                        <label>Quantity </label>
                                        <input
                                            type="number"
                                            value={quantity}
                                            onChange={(e) => setQuantity(e.target.value)}
                                        />
                                    </div>
                            }

                        </div>
                        <div>
                            <span>Total Item Price: <b>{itemPrice}</b></span>
                        </div>
                        <div>
                            <span>Freight: <b>{items.freightCategory}</b></span>
                        </div>
                        <div>
                            {
                                order.invoiceStatus === 'PAID' ?
                                    <div>
                                        <span>Freight Rate: <b>BDT {freightRate}/KG</b></span>
                                    </div>
                                    :
                                    <div>
                                        <label>Freight Rate </label>
                                        <input
                                            type="number"
                                            value={freightRate}
                                            onChange={(e) => setFreightRate(e.target.value)}
                                        />
                                    </div>
                            }
                        </div>
                        <div>
                            <span>Product Weight: <b>TBA</b></span>
                        </div>
                        <div>
                            <span>Total Freight Charge: <b>TBA</b></span>
                        </div>
                        <div>
                            <span>Tracking ID: <b>N/A</b></span>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div>
                        <label style={{ marginBottom: "5px" }}>Product Status</label>
                        <select
                            className='form-control'
                            value={reqStatus}
                            onChange={(e) => setReqStatus(e.target.value)}
                        >
                            <option value="">Select Status</option>
                            <option value="pending">Pending</option>
                            <option value="processing">Processing</option>
                            <option value="purchased">Purchased</option>
                            <option value="received by agent">Received By Agent</option>
                            <option value="preparing for shipment">Preparing For Shipment</option>
                            <option value="handover to airline">Handover To Airline</option>
                            <option value="arrived at destination airport">Arrived At Destination Airport</option>
                            <option value="released from customs">Released From Customs</option>
                            <option value="at alistorebd warehouse">At AliStoreBD Warehouse</option>
                            <option value="refund initiated">Refund Initiated</option>
                            <option value="processing for refund">Processing For Refund</option>
                            <option value="delivered">Delivered</option>
                            <option value="canceled">Canceled</option>
                            <option value="refunded">Refunded</option>
                        </select>
                    </div>
                </Col>
                <Col md={2}>
                <div style={{ textAlign: "center", marginTop: "28px" }}>
                        <Button onClick={updateProduct} variant="outline-success">Update</Button>
                    </div>
                </Col>
            </Row>

        </>
    )

}