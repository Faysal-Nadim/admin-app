import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { EditRequests } from "./EditRequests";
import { updateOrder } from "../../actions/order.action";
import "./style.css";

/**
 * @author
 * @function EditOrder
 **/

export const EditOrder = ({ details }) => {
  const [orderStatus, setOrderStatus] = useState(details.orderStatus);
  const [invoiceStatus, setInvoiceStatus] = useState(details.invoiceStatus);
  const [totalPrice, setTotalPrice] = useState(details.totalPrice);
  const [shippingTotal, setShippingTotal] = useState(details.shippingTotal);
  const [invoiceTotal, setInvoiceTotal] = useState(details.invoiceTotal);
  const _id = details._id;
  const dispatch = useDispatch();

  const updatedOrder = (e) => {
    const newOrder = {
      _id: _id,
      orderStatus: orderStatus,
      invoiceStatus: invoiceStatus,
      totalPrice: totalPrice,
    };
    dispatch(updateOrder(newOrder));
    e.preventDefault();
  };

  return (
    <>
      <Form>
        <Row>
          <Col>
            <label>
              <b>Order ID {details.orderID}</b>
            </label>
          </Col>
          <Col>
            <label>
              <b>Order Date {details.orderTime}</b>
            </label>
          </Col>
        </Row>
        <Row style={{ marginTop: "5px" }}>
          <Col>
            <label style={{ marginBottom: "5px" }}>Order Status</label>
            <select
              className="form-control"
              value={orderStatus}
              onChange={(e) => setOrderStatus(e.target.value)}
            >
              <option value="">Select Status</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="in transit">In Transit</option>
              <option value="delivered">Delivered</option>
              <option value="canceled">Canceled</option>
              <option value="refunded">Refunded</option>
            </select>
          </Col>
          <Col>
            <label style={{ marginBottom: "5px" }}>Invoice Status</label>
            <select
              className="form-control"
              value={invoiceStatus}
              onChange={(e) => setInvoiceStatus(e.target.value)}
            >
              <option value="">Select Invoice Status</option>
              <option value="PAID">PAID</option>
              <option value="UNPAID">UNPAID</option>
              <option value="PARTIALLY PAID">PARTIALLY PAID</option>
            </select>
          </Col>
          <Col>
            {details.invoiceStatus === "PAID" ? (
              <div>
                <label style={{ marginBottom: "5px" }}>Buying Total</label>
                <br />
                <input disabled className="form-control" value={totalPrice} />
              </div>
            ) : (
              <div>
                <label style={{ marginBottom: "5px" }}>Buying Total</label>
                <br />
                <input
                  className="form-control"
                  value={totalPrice}
                  onChange={(e) => setTotalPrice(e.target.value)}
                />
              </div>
            )}
          </Col>
          <Col>
            {details.invoiceStatus === "PAID" ? (
              <div>
                <label style={{ marginBottom: "5px" }}>Shipping Total</label>
                <br />
                <input
                  disabled
                  className="form-control"
                  value={shippingTotal}
                />
              </div>
            ) : (
              <div>
                <label style={{ marginBottom: "5px" }}>Shipping Total</label>
                <br />
                <input
                  className="form-control"
                  value={shippingTotal}
                  onChange={(e) => setShippingTotal(e.target.value)}
                />
              </div>
            )}
          </Col>
          <Col>
            {details.invoiceStatus === "PAID" ? (
              <div>
                <label style={{ marginBottom: "5px" }}>Invoice Total</label>
                <br />
                <input disabled className="form-control" value={invoiceTotal} />
              </div>
            ) : (
              <div>
                <label style={{ marginBottom: "5px" }}>Invoice Total</label>
                <br />
                <input
                  className="form-control"
                  value={invoiceTotal}
                  onChange={(e) => setInvoiceTotal(e.target.value)}
                />
              </div>
            )}
          </Col>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col>
            <label style={{ fontSize: "20px" }}>
              <b>Ordered Items</b>
            </label>
          </Col>
        </Row>

        <Row>
          {details.orderItems.map((reqs) => (
            <EditRequests order={details} items={reqs} />
          ))}
        </Row>
        <Row>
          <Col>
            <Button
              onClick={updatedOrder}
              style={{ marginTop: "20px" }}
              variant="secondary"
            >
              Update Order
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
