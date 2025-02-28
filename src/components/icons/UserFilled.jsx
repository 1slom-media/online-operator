import { SvgIcon } from "@mui/material";

const UserFilled = (props) => {
  return (
    <SvgIcon
      {...props}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 15C17.21 15 19 13.21 19 11C19 8.79 17.21 7 15 7C12.79 7 11 8.79 11 11C11 13.21 12.79 15 15 15ZM15 17C12.33 17 7 18.34 7 21V22C7 22.55 7.45 23 8 23H22C22.55 23 23 22.55 23 22V21C23 18.34 17.67 17 15 17Z"
        fill="black"
        fill-opacity="0.6"
      />
    </SvgIcon>
  );
};

export default UserFilled;
