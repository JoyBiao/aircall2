import React, { useEffect, useState } from "react";
import * as api from "../../api/index.jsx";
import CallSingle from "../CallSingle/CallSingle.jsx";
import "./index.css";
import ArchiveIcon from "@mui/icons-material/Archive";

const CallFeed = ({ inbox, archived }) => {
  const [calls, setCalls] = useState([]);
  const [inboundCalls, setInboundCalls] = useState([]);
  const [archivedCalls, setArchivedCalls] = useState([]);

  // get different types of calls data
  useEffect(() => {
    api.getCalls().then((res) => {
      setCalls(
        res.data.filter((call) => {
          return call.is_archived == false;
        })
      );

      setInboundCalls(
        res.data.filter((call) => {
          return call.direction == "inbound";
        })
      );

      setArchivedCalls(
        res.data.filter((call) => {
          return call.is_archived == true;
        })
      );
    });
  }, [calls]);

  // archive all the calls
  const archiveAll = () => {
    calls.forEach((call) => {
      api.postCall(call.id, true);
    });
  };

  return (
    <div className="callFeedContainer">
      <div className="archiveAllButton" onClick={archiveAll}>
        <ArchiveIcon className="archiveIcon" />
        <p className="archiveAllText">Archive all calls</p>
      </div>
      <div className="callsList">
        {!inbox &&
          !archived &&
          calls.map((call) => (
            <div key={call.id}>
              <CallSingle call={call}>{call.from}</CallSingle>
            </div>
          ))}
        {inbox &&
          inboundCalls.map((call) => (
            <div key={call.id}>
              <CallSingle call={call}>{call.from}</CallSingle>
            </div>
          ))}
        {archived &&
          archivedCalls.map((call) => (
            <div key={call.id}>
              <CallSingle call={call}>{call.from}</CallSingle>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CallFeed;
