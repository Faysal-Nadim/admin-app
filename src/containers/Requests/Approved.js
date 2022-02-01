import React, { useEffect } from "react";
import { Badge, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { approvedRequest } from "../../actions";
import "./style.css";

/**
 * @author
 * @function Approved
 **/

export const Approved = (props) => {
  const request = useSelector((state) => state.request);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(approvedRequest());
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col>
          <div style={{ paddingTop: "20px" }}>
            <Table style={{ fontSize: "15px" }} striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>ID</th>
                  <th>Ship From</th>
                  <th>Status</th>
                  <th>Freight Category</th>
                  <th>Product Price</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                {request.requestListA.length > 0
                  ? request.requestListA.map((request) => (
                      <tr key={request._id}>
                        <td>{}</td>
                        <td>{request.reqID}</td>
                        <td style={{ width: "10%" }}>{request.shipFrom}</td>
                        <td style={{ width: "10%" }}>
                          <Badge bg="success">
                            {request.status.toUpperCase()}
                          </Badge>
                        </td>
                        <td style={{ width: "15%" }}>
                          <b>{request.freightCat.name}</b>
                        </td>
                        <td style={{ width: "15%" }}>
                          {
                            <>
                              {" "}
                              {request.price ? `BDT ${request.price}` : "N/A"}
                            </>
                          }
                        </td>
                        <td>{request.note}</td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
