import React, { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { rejectRequestByID } from "../../actions/req.action";

/**
 * @author
 * @function RejectRequest
 **/

export const RejectRequest = ({ rejectReq }) => {
  const _id = rejectReq._id;
  const [status, setStatus] = useState(rejectReq.status);
  const [reqID, setReqID] = useState(rejectReq.reqID);

  const dispatch = useDispatch();

  const rejectRequest = (e) => {
    const form = {
      _id,
      status: status,
    };
    dispatch(rejectRequestByID(form));
    e.preventDefault();
  };

  return (
    <>
      <Row>
        <Col>
          <b>Do You Want To Reject This Request?</b>
          <h5>{reqID}</h5>
        </Col>
        <Col>
          <label>Request Status</label>
          <select
            label={"Request Status"}
            className="form-control"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </Col>
      </Row>

      <Button
        onClick={rejectRequest}
        style={{ marginTop: "10px" }}
        variant="danger"
      >
        Reject
      </Button>
    </>
  );
};
