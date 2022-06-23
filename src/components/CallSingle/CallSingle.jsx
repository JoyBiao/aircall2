import React from "react";
import "./index.css";
import Moment from "react-moment";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

const CallDetail = ({ call }) => {
  return (
    <div className="detailContainer">
      <div>
        ························· &nbsp;
        <Moment className="momentText" format="MMMM, Do YYYY">
          {call.created_at}
        </Moment>
        &nbsp; ·························
      </div>

      <div className="detailPaper">
        <PhoneCallbackIcon className="callInIcon" />
        <div className="detailText">
          <h3 className="from">{call.from}</h3>
          <p className="momentText">{call.direction}</p>
        </div>
        <Moment className="momentText" format="LT">
          {call.created_at}
        </Moment>
        <Link to={`/detail/${call.id}`}>
          <ExpandCircleDownIcon
            style={{ color: "black", margin: "0rem 1rem" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default CallDetail;
