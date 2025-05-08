import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import CompanyProfile from "./pages/CompanyProfile";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    "Home",
    "Company Profile",
    "Services",
    "FAQ",
    "Contact",
    "Blog",
  ];

  const drawer = (
    <div style={{ width: 250 }}>
      <Typography
        variant="h6"
        style={{ padding: "16px 0", textAlign: "center" }}
      >
        Websthal
      </Typography>
      <List>
        {menuItems.map((text) => {
          const path = `/${text.toLowerCase().replace(/ /g, "-")}`;
          const isActive =
            location.pathname === path ||
            (path === "/home" && location.pathname === "/");

          return (
            <ListItem
              button
              key={text}
              onClick={() => {
                navigate(path);
                setMobileOpen(false);
              }}
              selected={isActive}
              sx={{
                borderRadius: 1,
                my: 0.5,
                transition: "background-color 0.3s ease",
                backgroundColor: isActive
                  ? "rgba(98, 0, 234, 0.1)"
                  : "transparent",
                "&:hover": {
                  backgroundColor: "rgba(98, 0, 234, 0.2)",
                },
              }}
            >
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "primary.main" : "inherit",
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: "#6200ea" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Websthal
          </Typography>
          <div style={{ display: "flex" }}>
            {menuItems.map((text) => {
              const path = `/${text.toLowerCase().replace(/ /g, "-")}`;
              const isActive =
                location.pathname === path ||
                (path === "/home" && location.pathname === "/");

              return (
                <Button
                  key={text}
                  onClick={() => navigate(path)}
                  sx={{
                    display: { xs: "none", sm: "block" },
                    position: "relative",
                    mx: 1,
                    color: isActive ? "#fff" : "inherit",
                    backgroundColor: isActive
                      ? "rgba(255, 255, 255, 0.2)"
                      : "transparent",
                    borderRadius: "20px",
                    transition:
                      "background-color 0.3s ease, transform 0.2s ease",
                    fontWeight: isActive ? "bold" : "normal",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.25)",
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  {text}
                </Button>
              );
            })}
          </div>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <main style={{ marginTop: "64px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
    </div>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
