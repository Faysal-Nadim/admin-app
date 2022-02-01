import React, { useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { pendingRequest } from "../../actions";
import "./style.css";
import { ShowPending } from "./ShowPending";

/**
 * @author
 * @function Pending
 **/

export const Pending = (props) => {
  const request = useSelector((state) => state.request);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pendingRequest());
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
                  <th>Note</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {request.requestListP.map((request) => (
                  <>
                    <ShowPending pendingReq={request} />
                  </>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
