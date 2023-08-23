import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function SubTab(props) {
  const location = useLocation();
  return (
    <div className="overflow-hidden transition-all duration-500 max-h-[0px]">
      {props.subtabs.map((subtab, index) => (
        <NavLink
          to={subtab.link}
          key={index}
          className="flex items-center gap-3 py-2 press-1"
        >
          {/* Your sub-tab content */}
        </NavLink>
      ))}
    </div>
  );
}

export default SubTab;
