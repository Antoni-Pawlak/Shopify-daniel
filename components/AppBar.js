import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Drawer from "@mui/material/Drawer";
import GridViewIcon from "@mui/icons-material/GridView";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { Screen, THEME_COLOR } from "../lib/constants";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Avatar, Button, Collapse } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import DashBoard from "../pages/dashboard";
import Cart from "../pages/widgets/cart";
import Home from "../pages/widgets/home";
import Review from "../pages/widgets/review";
import Shop from "../pages/widgets/shop";
import Settings from "../pages/settings";

const drawerWidth = "18em";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const CustomAppBar = () => {
  const [isListExpanded, setListExpand] = useState(false);
  const [open, setOpen] = useState(true);
  const [activeScreen, setActiveScreen] = useState(Screen.DASHBOARD);

  const ListItemBlock = ({ text, children }) => {
    let title = text;
    if (typeof title === "string") {
      title = title.replace("Recommendations - ", "");
      title = title.replace("Order Placed / ", "");
      title = title.replace("- Profile & Payments", "");
    }
    return (
      <ListItem
        key={text}
        disablePadding
        selected={activeScreen === text}
        onClick={() => setActiveScreen(text)}
      >
        <ListItemButton>
          <ListItemIcon>{children}</ListItemIcon>
          <ListItemText primary={title} />
        </ListItemButton>
      </ListItem>
    );
  };

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth})`,
      backgroundColor: "white",
      marginLeft: `${drawerWidth}`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const ScreenView = () => {
    switch (activeScreen) {
      case Screen.DASHBOARD:
        return <DashBoard />;
      case Screen.HOME:
        return <Home />;
      case Screen.SHOP:
        return <Shop />;
      case Screen.CART:
        return <Cart />;
      case Screen.REVIEW:
        return <Review />;
      case Screen.SETTINGS:
        return <Settings />;
      default:
        return <DashBoard />;
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
            className="epilogue text_color"
          >
            {activeScreen}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton size="large">
              <HelpOutlineIcon />
            </IconButton>
            <IconButton size="large">
              <NotificationsNoneIcon />
            </IconButton>
            <Button variant="contained" className="logout_btn">
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: `0.5rem solid ${THEME_COLOR}`,
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        className="uppercase"
      >
        <div>
          <img
            style={{
              width: "70%",
              margin: "auto",
              display: "block",
              borderRadius: "0.5rem",
              marginTop: "1rem",
            }}
            src="https://cdn.discordapp.com/attachments/1003261217755906170/1003917883639877683/unknown.png"
          />
        </div>
        <List className="inter">
          <ListItemBlock text={Screen.DASHBOARD}>
            <GridViewIcon />
          </ListItemBlock>
          <ListItemButton
            onClick={() => {
              setActiveScreen(Screen.HOME);
              setListExpand((prevstate) => !prevstate);
            }}
          >
            <ListItemIcon>
              <FilterListOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={Screen.RECOMMENDATIONS} />
            {isListExpanded ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={isListExpanded} timeout="auto" unmountOnExit>
            <List sx={{ pl: 5 }} component="div" disablePadding>
              <ListItemBlock text={Screen.HOME}>
                <HomeOutlinedIcon />
              </ListItemBlock>
              <ListItemBlock text={Screen.SHOP}>
                <StoreOutlinedIcon />
              </ListItemBlock>
              <ListItemBlock text={Screen.CART}>
                <ShoppingCartOutlinedIcon />
              </ListItemBlock>
              <ListItemBlock text={Screen.REVIEW}>
                <DescriptionOutlinedIcon />
              </ListItemBlock>
            </List>
          </Collapse>
        </List>
        <Box sx={{ flexGrow: 1 }} />
        <ListItemBlock text={Screen.SETTINGS}>
          <SettingsOutlinedIcon />
        </ListItemBlock>
        <ListItem className="margin_block_med">
          <Avatar alt="Sriom Chakrabarti" />
          <ListItemText
            primary={
              <div className="margin_left_small">
                Customer Name
                <div className="font_size_sm margin_left_small">
                  company@example
                </div>
              </div>
            }
          />
        </ListItem>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <ScreenView />
      </Main>
    </Box>
  );
};

export default CustomAppBar;
