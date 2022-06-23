import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import DialpadIcon from "@mui/icons-material/Dialpad";

const BottomTab = () => {
  const [value, setValue] = useState(0);
  return (
    <div style={{ borderTop: "2px solid rgb(237, 228, 217)" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<CallIcon />} />
        <BottomNavigationAction label="Contacts" icon={<PersonIcon />} />
        <BottomNavigationAction label="KeyPad" icon={<DialpadIcon />} />
        <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
      </BottomNavigation>
    </div>
  );
};

export default BottomTab;
