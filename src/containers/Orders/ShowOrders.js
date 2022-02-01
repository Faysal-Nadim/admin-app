import React, { useState } from "react";
import { Badge, Button, Modal } from "react-bootstrap";
import { EditOrder } from "./EditOrder";

/**
 * @author
 * @function ShowOrders
 **/

export const ShowOrders = ({ order }) => {
  const [show, setShow] = useState(false);
  const close = () => setShow(false);
  const edit = () => setShow(true);

  return (
    <>
      <tr key={order._id}>
        <td>{}</td>
        <td>{order.orderID}</td>
        <td>
          {order.orderStatus === "pending" ? (
            <Badge bg="primary">{order.orderStatus.toUpperCase()}</Badge>
          ) : order.orderStatus === "processing" ? (
            <Badge bg="secondary">{order.orderStatus.toUpperCase()}</Badge>
          ) : order.orderStatus === "in transit" ? (
            <Badge bg="info">{order.orderStatus.toUpperCase()}</Badge>
          ) : order.orderStatus === "delivered" ? (
            <Badge bg="success">{order.orderStatus.toUpperCase()}</Badge>
          ) : order.orderStatus === "canceled" ? (
            <Badge bg="danger">{order.orderStatus.toUpperCase()}</Badge>
          ) : order.orderStatus === "refunded" ? (
            <Badge bg="warning" text="dark">
              {order.orderStatus.toUpperCase()}
            </Badge>
          ) : (
            ""
          )}
        </td>
        <td>
          {order.invoiceStatus === "PAID" ? (
            <Badge bg="success">{order.invoiceStatus}</Badge>
          ) : order.invoiceStatus === "UNPAID" ? (
            <Badge bg="warning">{order.invoiceStatus}</Badge>
          ) : order.invoiceStatus === "PARTIALLY PAID" ? (
            <Badge bg="secondary">{order.invoiceStatus}</Badge>
          ) : (
            ""
          )}
        </td>
        <td>{order.shippingTotal ? `BDT ${order.shippingTotal}` : "N/A"}</td>
        <td>BDT {order.totalPrice}</td>
        <td>
          <Button variant="outline-success">
            <b>Details</b>
          </Button>{" "}
          <Button onClick={edit} variant="outline-secondary">
            <b>Update</b>
          </Button>
        </td>
      </tr>
      <Modal size="lg" show={show} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>Update Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditOrder key={order._id} details={order} />
        </Modal.Body>
      </Modal>
    </>
  );
};
