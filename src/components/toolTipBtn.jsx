import React from "react";
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";

const ToolTipBtn = ({ btnText, tooltipText, path }) => {
  return (
    <>
      <Link to={path} className="w-[100%] xsm:w-[48%] sm:w-auto ">
        <input
          type="button"
          value={btnText}
          className="btn btn-default no-margin mt-[8px] mr-[5px] w-[100%] xsm:w-[100%] sm:w-auto max-sm:truncate cursor-pointer"
          data-tip={tooltipText}
          data-tooltip-id="my-tooltip"
          data-tooltip-content={tooltipText}
        />
      </Link>
      <ReactTooltip
        id="my-tooltip"
        place="top"
        type="dark"
        effect="solid"
        style={{
          width: "180px",
          textAlign: "center",
          fontSize: "12px",
          padding: "4px",
          borderRadius: "5px",
        }}
      />
    </>
  );
};

export default ToolTipBtn;
