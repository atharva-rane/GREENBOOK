import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useNavigate, useLocation } from "react-router-dom"; // <-- useLocation added
import "../styles/Navbar.css";

const pages = ["Home", "About", "Carbon-Credits", "Dashboard"];

export default function Navbar() {
  const [dark, setDark] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // <-- get current path

  const getPath = (page) => (page === "Home" ? "/" : `/${page.toLowerCase()}`);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: 250,
        bgcolor: dark ? "#064e3b" : "#95d5b2",
        height: "100%",
      }}
    >
      <List>
        {pages.map((page) => {
          const path = getPath(page);
          const isActive = location.pathname === path; // <-- check if current page
          return (
            <ListItem key={page} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(path);
                  setMobileOpen(false);
                }}
              >
                <ListItemText
                  primary={page}
                  sx={{ color: isActive ? "#064e3b" : "white" }} // <-- active color dark green
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Divider sx={{ bgcolor: "rgba(255,255,255,0.3)" }} />

      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setDark(!dark)}>
            {dark ? (
              <Brightness7Icon sx={{ color: "white", mr: 1 }} />
            ) : (
              <Brightness4Icon sx={{ color: "white", mr: 1 }} />
            )}
            <ListItemText primary="Dark/Light Mode" sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: dark
            ? "linear-gradient(90deg,#064e3b,#065f46)"
            : "linear-gradient(90deg,#95d5b2,#52b788)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl" disableGutters>
          <Toolbar
            sx={{
              width: "100%",
              px: { xs: 2, md: 4 },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                cursor: "pointer",
                flexShrink: 0,
                mr: 2,
              }}
              onClick={() => navigate("/")}
            >
              <span className="leaf">🍃</span> GREENBOOK
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                gap: 3,
                flexWrap: "nowrap",
                overflow: "hidden",
              }}
            >
              {pages.map((page) => {
                const path = getPath(page);
                const isActive = location.pathname === path;
                return (
                  <Button
                    key={page}
                    sx={{
                      color: isActive ? "#064e3b" : "white", // <-- active color
                      fontWeight: 700,
                      textTransform: "none",
                      whiteSpace: "nowrap",
                    }}
                    onClick={() => navigate(path)}
                  >
                    {page}
                  </Button>
                );
              })}
            </Box>

            <IconButton
              sx={{ display: { xs: "none", md: "flex" }, color: "#fff" }}
              onClick={() => setDark(!dark)}
            >
              {dark ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>

            <IconButton
              sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        anchor="left"
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
