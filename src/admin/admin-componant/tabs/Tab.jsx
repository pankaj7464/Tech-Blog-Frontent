import React from "react";
import { NavLink } from "react-router-dom";
import SubTab from "./SubTabs";

function Tab(props) {
  return (
    <div
      className="px-4 text-c6 border-x-[3px] border-transparent cursor-pointer my-2"
      // ref={tabRef[props.index]} - Removed this line since tabRef is not defined here
    >
      <NavLink
        to={props.subtabs[0].link}
        className="flex items-center gap-3 py-2 overflow-hidden flex-nowrap"
        // onClick={clickHandler} - Removed this line for now
      >
        {/* Your tab content */}
      </NavLink>
      <div>
        {/* SubTab is conditionally rendered based on onlyIcons */}
        {true && (
          <SubTab subtabs={props.subtabs} index={props.index} />
        )}
      </div>
    </div>
  );
}

export default Tab;
