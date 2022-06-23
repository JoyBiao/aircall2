import React, { useState } from "react";
import BottomTab from "./components/BottomTab/BottomTab.jsx";
import CallFeed from "./components/CallFeed/CallFeed.jsx";

import Header from "./Header.jsx";

const App = () => {
  const [tabValue, setTabValue] = useState(0);
  return (
    <div className="container">
      <Header setTabValue={setTabValue} />
      <div className="container-view">
        {tabValue == 0 ? (
          <CallFeed inbox={false} archived={false} />
        ) : tabValue == 1 ? (
          <CallFeed inbox={true} archived={false} />
        ) : (
          <CallFeed inbox={false} archived={true} />
        )}
      </div>
      <BottomTab />
    </div>
  );
};

// ReactDOM.render(<App />, document.getElementById("app"));

export default App;
