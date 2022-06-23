import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as api from "../../api/index.jsx";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./index.css";
import Moment from "react-moment";

const CallDetail = () => {
  const { id } = useParams();
  const [isArchived, setIsArchived] = useState(false);
  const [callDetail, setCallDetail] = useState(null);
  useEffect(() => {
    api.getCall(id).then((res) => {
      setIsArchived(res.data.is_archived);
      setCallDetail(res.data);
    });
  }, []);
  const handleArchive = () => {
    api.postCall(id, !isArchived);
    setIsArchived((pre) => !pre);
  };
  return (
    <div className="container">
      <Link to="/" className="goBackButton">
        <ArrowBackIosIcon style={{ color: "black" }} />
        Go back
      </Link>
      <div className="container-view">
        <div className="detailPaper2">
          <p style={{ marginTop: "35px" }}>
            {callDetail && `From: ${callDetail.from}`}
          </p>
          <hr />
          <p>{callDetail && `via ${callDetail.via}`}</p>
          <hr />
          <p>
            {callDetail &&
              `${callDetail.direction} ${callDetail.duration} minutes`}
          </p>
          <hr />
          <Moment format="MMMM, Do YYYY" style={{ marginTop: "10px" }}>
            {callDetail && callDetail.created_at}
          </Moment>
          <Moment format="LT" style={{ margin: "10px" }}>
            {callDetail && callDetail.created_at}
          </Moment>
          <hr />
          <p style={{ marginBottom: "25px" }}>
            {callDetail && `${callDetail.call_type}`}
          </p>
        </div>
        <button className="archiveButton" onClick={handleArchive}>
          {isArchived ? "Unarchive" : "Archive"}
        </button>
      </div>
    </div>
  );
};

export default CallDetail;
