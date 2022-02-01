import React, { useEffect } from "react";
import { Layout } from "../../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { getAllOrder } from "../../actions/order.action";
import { Row, Col, Container, Table, Badge, Button } from "react-bootstrap";
import { ShowOrders } from "./ShowOrders";

/**
 * @author
 * @function Orders
 **/

export const Orders = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrder());
  }, []);

  const order = useSelector((state) => state.order);

  console.log(order);

  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "70px",
              }}
            >
              <h3>Orders</h3>
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
                    <th>Order ID</th>
                    <th>Order Status</th>
                    <th>Invoice Status</th>
                    <th>Shipping Total</th>
                    <th>Buying Total</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {order.orderList.length > 0
                    ? order.orderList
                        .slice()
                        .reverse()
                        .map((orders) => (
                          <ShowOrders key={orders._id} order={orders} />
                        ))
                    : ""}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
