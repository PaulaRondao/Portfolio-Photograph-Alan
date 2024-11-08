"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Link from "next/link";
import MyLogo from "./logo";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../app/styles/styles";
import { Button } from "@mui/material";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      component="nav"
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        paddingTop: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Link href="/">
        <MyLogo />
      </Link>
      <Divider />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ListItem disablePadding>
          <Link href="/home" passHref>
            <Typography
              sx={{
                padding: "8px 24px",
              }}
            >
              Home
            </Typography>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/portfolio" passHref>
            <Typography
              sx={{
                padding: "8px 24px",
              }}
            >
              Portfolio
            </Typography>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/videos" passHref>
            <Typography
              sx={{
                padding: "8px 24px",
              }}
            >
              Videos
            </Typography>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/about" passHref>
            <Typography
              sx={{
                padding: "8px 24px",
              }}
            >
              About
            </Typography>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/contact" passHref>
            <Typography
              sx={{
                padding: "8px 24px",
              }}
            >
              Contact
            </Typography>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        {/* <CssBaseline /> */}
        <AppBar
          component="header"
          sx={{
            boxShadow: "none",
            backgroundColor: "white",
            borderBottom: "1px #D6D7DD solid",
            color: "#222021",
            width: "100%",
          }}
        >
          <Toolbar
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              minWidth: isLargeScreen ? "768px" : "auto",
            }}
          >
            <nav
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>

              <Box
                sx={{
                  display: { xs: "none", sm: "flex", color: "#222021" },
                }}
              >
                <Link href="/" style={{ margin: "0px 16px" }}>
                  <MyLogo />
                </Link>
              </Box>

              <Box
                sx={{
                  display: { xs: "none", sm: "flex", color: "#222021" },
                  textAlign: "center",
                  margin: "auto",
                }}
              >
                <Link href="/home" passHref style={{ margin: "0px 16px" }}>
                  Home
                </Link>

                <Link href="/portfolio" passHref style={{ margin: "0px 16px" }}>
                  Portfolio
                </Link>

                <Link href="/videos" passHref style={{ margin: "0px 16px" }}>
                  Videos
                </Link>

                <Link href="/about" passHref style={{ margin: "0px 16px" }}>
                  About
                </Link>

                <Link href="/contact" passHref style={{ margin: "0px 16px" }}>
                  Contact
                </Link>
              </Box>
              <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true,
                }}
                sx={{
                  display: { xs: "block", sm: "none" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                  },
                }}
              >
                {drawer}
              </Drawer>
            </nav>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
