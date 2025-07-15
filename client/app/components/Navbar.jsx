"use client";
import { FaWallet } from "react-icons/fa6";
import Link from "next/link";
import Button from "@mui/material/Button";
import { Input } from "@/components/ui/input";
import { react, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { getUserProfile } from "../utils/api";
import { useEffect } from "react";
import { useNotification } from "../context/NotificationContext";

import MoreIcon from "@mui/icons-material/MoreVert";

const pages = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/aboutus" },
  { name: "Contact", path: "/contact" },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [user, setUser] = useState(null);
  const { notifications } = useNotification();
  const [notifAnchor, setNotifAnchor] = useState(null);

  const handleNotifOpen = (e) => setNotifAnchor(e.currentTarget);
  const handleNotifClose = () => setNotifAnchor(null);
  const notifOpen = Boolean(notifAnchor);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile();
        if (data != null) {
          setIsLoggedIn(true);
        } // Save user info if needed
        // User is authenticated
      } catch (err) {
        setIsLoggedIn(false); // Not authenticated
      }
    };

    fetchProfile();
  }, []);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {isLoggedIn ? (
        <>
          <MenuItem onClick={handleMenuClose}>
            <Link href="/profile">Profile</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="/settings">Settings</Link>
          </MenuItem>
        </>
      ) : (
        <>
          <MenuItem onClick={handleMenuClose}>
            <Link href="/signin">Login</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="/signup">Sign Up</Link>
          </MenuItem>
        </>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  return (
    <div className="nav-main text-[#ecf39e] mb-[1rem] flex flex-row items-center border-b-1 border-b-indigo-500">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className="bg-[#45A545]">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 45, display: { xs: "none", sm: "block" } }}
            >
              <Link
                href={"/"}
                className="text-[#ecf39e] no-underline font-display"
              >
                LOCORA
              </Link>
            </Typography>
            <Box sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Link key={page.name} href={page.path} passHref>
                  <Button
                    sx={{ my: 2, mr: 2, color: "#ecf39e", display: "block" }}
                    className="font-display"
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <IconButton
                size="large"
                aria-label="show new notifications"
                color="inherit"
                onClick={handleNotifOpen}
              >
                <Badge badgeContent={notifications.length} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>

              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        <Menu
          anchorEl={notifAnchor}
          open={notifOpen}
          onClose={handleNotifClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem disabled>
            <strong>Notifications</strong>
          </MenuItem>
          {notifications.length === 0 && (
            <MenuItem disabled>No notifications</MenuItem>
          )}
          {notifications.map((notif, index) => (
            <MenuItem
              key={index}
              onClick={() => {
                if (notif.postId) {
                  window.location.href = `/post/${notif.postId}`;
                }
                handleNotifClose();
              }}
            >
              {notif.message}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </div>
  );
}
