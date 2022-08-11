import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button, Switch } from "@mui/material";
import Banner from "./banner";
import InfoIcon from "@mui/icons-material/Info";
import { THEME_COLOR } from "../lib/constants";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: THEME_COLOR,
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#A9A9A9",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const Widgets = ({ pageTitle }) => {
  const Block = ({ title }) => {
    return (
      <div className="justify_self_center text_center">
        <div className="widget_title inter font_weight_bolder">{title}</div>
        <img
          style={{ height: "200px" }}
          src="https://user-images.githubusercontent.com/100185149/183108772-397e91a8-9914-4fb3-a063-bd49455ef2b1.png"
        />
        <div className="flexbox_row fb_row_justify_center">
          <InfoIcon className="margin_right_med" />
          <IOSSwitch className="theme_color" defaultChecked />
        </div>
      </div>
    );
  };
  return (
    <div>
      <Banner pageTitle={pageTitle} />
      <div className="grid_4_column">
        <Block title="Top Featured Products" />
        <Block title="New Arrivals" />
        <Block title="Most Popular Products" />
        <Block title="Recommended for you" />
        <Block title="Popular items by Views" />
        <Block title="Popular items by Purchase" />
      </div>
      <div className="flexbox_row flex_row_end bottom widget_save_block">
        <Button variant="contained">Save and Apply</Button>
      </div>
    </div>
  );
};
export default Widgets;
