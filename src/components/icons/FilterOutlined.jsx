import { SvgIcon } from "@mui/material";
import React from "react";

const FilterOutlined = (props) => {
  return (
    <SvgIcon
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.5 3.5H2.5L10.5 12.96V19.5L14.5 21.5V12.96L22.5 3.5Z"
        stroke="#7897B3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SvgIcon>
  );
};

export default FilterOutlined;
