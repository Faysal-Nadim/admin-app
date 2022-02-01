import React from "react";
import { Row, Col, Tabs, Tab } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import { Approved } from "./Approved";
import { Pending } from "./Pending";
import { Rejected } from "./Rejected";

/**
 * @author
 * @function Request
 **/

export const Request = (props) => {
  return (
    <Layout sidebar>
      <div style={{ marginTop: "70px" }}>
        <Row>
          <Col>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h3>Product Requests</h3>
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        <Col>
          <Tabs
            defaultActiveKey="approved"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="approved" title="APPROVED">
              <Approved />
            </Tab>

            <Tab eventKey="pending" title="PENDING">
              <Pending />
            </Tab>

            <Tab eventKey="rejected" title="REJECTED">
              <Rejected />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Layout>
  );
};
