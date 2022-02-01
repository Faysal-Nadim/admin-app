import React, { useEffect } from "react";
import { Badge, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { rejectedRequest } from "../../actions";
import "./style.css";

/**
 * @author
 * @function Approved
 **/

export const Rejected = (props) => {
  const request = useSelector((state) => state.request);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(rejectedRequest());
  }, []);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <div style={{ paddingTop: "20px" }}>
            <Table style={{ fontSize: "15px" }} striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>ID</th>
                  <th>Ship From</th>
                  <th>Status</th>
                  <th>Product Price</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                {request.requestListR.length > 0
                  ? request.requestListR.map((request) => (
                      <tr key={request._id}>
                        <td>{}</td>
                        <td>{request.reqID}</td>
                        <td style={{ width: "10%" }}>{request.shipFrom}</td>
                        <td style={{ width: "10%" }}>
                          <Badge bg="danger">
                            {request.status.toUpperCase()}
                          </Badge>
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
