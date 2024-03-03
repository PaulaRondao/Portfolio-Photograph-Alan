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
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import Link from "next/link";
import MyLogo from "./logo";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
      <Link href="/homepage">
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
    <Box
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <CssBaseline />
      <AppBar
        component="header"
        sx={{
          boxShadow: "none",
          backgroundColor: "white",
          borderBottom: "1px #D6D7DD solid",
          color: "#222021",
          display: "flex",
          flexDirection: "row",
          position: "relative",
          width: "100%",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            position: "relative",
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
              // display: ["none", "block", "flex"],
              display: { xs: "none", sm: "block" },
              // display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button>
              <Link href="/homepage" style={{ padding: "8px 24px" }}>
                <MyLogo />
              </Link>
            </Button>
            {/* <nav> */}
            <List
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
              }}
            ></List>
            <ListItem
              sx={{ display: { xs: "none", sm: "block" }, color: "#222021" }}
            >
              <Link href="/about" passHref>
                <Typography
                  sx={{
                    padding: "8px 16px",
                  }}
                >
                  About
                </Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/portfolio" passHref>
                <Typography
                  sx={{
                    padding: "8px 16px",
                  }}
                >
                  Portfolio
                </Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/videos" passHref>
                <Typography
                  sx={{
                    padding: "8px 16px",
                  }}
                >
                  Videos
                </Typography>
              </Link>
              {/* </nav> */}
            </ListItem>
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <Link
              href="https://www.paula-rondao.com"
              target="_blank"
              style={{ paddingRight: "15px" }}
            >
              <Tooltip title="Lien Facebook">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Facebook"
                  role="img"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 39C9.50659 39 1 30.4934 1 20C1 9.50659 9.50659 1 20 1C30.4934 1 39 9.50659 39 20C39 30.4934 30.4934 39 20 39ZM0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20ZM22.2218 10L25 10.0036L24.9916 13.8727L23.0034 13.8736C21.8899 13.8736 21.6874 14.3418 21.6874 15.2673V17.1918H24.8832L24.8857 21.2955H21.6874L21.684 30H17.784L17.7874 21.2955H15V17.1909H17.7874V14.9227C17.7874 11.9309 19.5277 10 22.2218 10Z"
                    fill="#222021"
                  />
                </svg>
              </Tooltip>
            </Link>
            <Link
              href="https://www.paula-rondao.com"
              target="_blank"
              style={{ paddingRight: "15px" }}
            >
              <Tooltip title="Lien Instagram">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Instagram"
                  role="img"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 39C9.50659 39 1 30.4934 1 20C1 9.50659 9.50659 1 20 1C30.4934 1 39 9.50659 39 20C39 30.4934 30.4934 39 20 39ZM0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20ZM17.1474 15.7253C17.9917 15.1617 18.9845 14.8608 20 14.8608C20.6748 14.8592 21.3431 14.9907 21.9669 15.2479C22.5906 15.5052 23.1573 15.8829 23.6344 16.3596C24.1116 16.8363 24.4897 17.4025 24.7471 18.0256C25.0046 18.6487 25.1363 19.3165 25.1346 19.9906C25.1346 21.0052 24.8336 21.997 24.2693 22.8407C23.7051 23.6842 22.9032 24.3417 21.9649 24.7299C21.0267 25.1182 19.9944 25.2198 18.9982 25.0218C18.0022 24.8239 17.0874 24.3353 16.3693 23.618C15.6512 22.9006 15.1622 21.9865 14.964 20.9914C14.7659 19.9964 14.8676 18.9649 15.2562 18.0275C15.6449 17.0902 16.303 16.289 17.1474 15.7253ZM18.1423 22.7682C18.6922 23.1353 19.3386 23.3312 20 23.3312C20.8868 23.3312 21.7374 22.9793 22.3644 22.3528C22.9915 21.7264 23.3438 20.8766 23.3438 19.9906C23.3438 19.3299 23.1476 18.684 22.7802 18.1346C22.4129 17.5854 21.8907 17.1571 21.2796 16.9043C20.6686 16.6514 19.9964 16.5853 19.3476 16.7142C18.6991 16.8431 18.1032 17.1612 17.6356 17.6284C17.168 18.0956 16.8495 18.6909 16.7205 19.3389C16.5915 19.987 16.6577 20.6586 16.9108 21.2691C17.1638 21.8795 17.5925 22.4012 18.1423 22.7682ZM26.3388 15.3432C26.4764 15.1375 26.5498 14.8956 26.5498 14.6481C26.5498 14.3163 26.4179 13.998 26.183 13.7634C25.9481 13.5288 25.6296 13.3969 25.2974 13.3969C25.0497 13.3969 24.8076 13.4703 24.6016 13.6078C24.3957 13.7453 24.2352 13.9407 24.1404 14.1693C24.0456 14.3979 24.0208 14.6495 24.0691 14.8922C24.1175 15.1349 24.2368 15.3579 24.4119 15.5328C24.5871 15.7078 24.8101 15.827 25.0531 15.8752C25.2961 15.9235 25.5479 15.8987 25.7767 15.804C26.0055 15.7094 26.2011 15.549 26.3388 15.3432ZM29.9442 15.8736C29.9737 14.3273 29.3935 12.831 28.3281 11.7079C27.2038 10.6239 25.6949 10.03 24.1327 10.0563C22.5047 9.98123 17.4953 9.98123 15.8673 10.0563C14.3108 10.0226 12.8037 10.6025 11.6719 11.6703C10.6007 12.7996 10.0199 14.3063 10.0564 15.8617C9.98121 17.4883 9.98121 22.493 10.0564 24.1195C10.0199 25.6749 10.6007 27.1816 11.6719 28.3109C12.8037 29.3788 14.3108 29.9586 15.8673 29.9249C17.5203 30.025 22.4796 30.025 24.1327 29.9249C25.6897 29.9613 27.1977 29.3812 28.3281 28.3109C29.3994 27.1816 29.9801 25.6749 29.9436 24.1195C30.0186 22.4969 30.0188 17.5125 29.9442 15.8736ZM27.0605 27.057C27.388 26.7298 27.6446 26.3391 27.8146 25.9087V25.8961C28.2644 24.7729 28.238 22.3145 28.2209 20.7179C28.218 20.4471 28.2154 20.2011 28.2154 19.9906C28.2154 19.78 28.218 19.5341 28.2209 19.2635C28.238 17.6694 28.2643 15.2189 27.8146 14.0851C27.6446 13.6548 27.388 13.2639 27.0605 12.9368C26.733 12.6096 26.3419 12.3532 25.9111 12.1833C23.9669 11.7906 21.9795 11.656 20 11.7829C18.0248 11.6558 16.0413 11.7904 14.1014 12.1833C13.6676 12.3512 13.2739 12.6084 12.9459 12.9382C12.618 13.268 12.3631 13.663 12.1979 14.0976C11.7431 15.2335 11.7658 17.7352 11.7803 19.3297C11.7825 19.5793 11.7846 19.8067 11.7846 20.0031C11.7846 20.1997 11.7825 20.4269 11.7803 20.6763C11.7658 22.2686 11.7431 24.762 12.1979 25.9087C12.3679 26.3391 12.6246 26.7298 12.9521 27.057C13.2795 27.3842 13.6707 27.6405 14.1014 27.8104C16.0413 28.2033 18.0248 28.3379 20 28.2108C21.9795 28.3378 23.9669 28.2032 25.9111 27.8104C26.3419 27.6405 26.733 27.3842 27.0605 27.057Z"
                    fill="#222021"
                  />
                </svg>
              </Tooltip>
            </Link>
            <Link
              href="/contact"
              style={{
                backgroundColor: "#222021",
                borderRadius: "48px",
                padding: "12px 24px",
                color: "white",
              }}
            >
              Let&apos;s Talk
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
    </Box>
  );
}
