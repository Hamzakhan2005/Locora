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
  borderRadius: "0.75rem",
  backgroundColor: "rgba(146, 144, 195, 0.15)",
  "&:hover": {
    backgroundColor: "rgba(146, 144, 195, 0.25)",
  },
  marginRight: "1rem",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: "1.5rem",
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: "0 1rem",
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#d1d5db",
  "& .MuiInputBase-input": {
    padding: "0.5rem 0.5rem 0.5rem 0",
    paddingLeft: "calc(1em + 2rem)",
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
        }
      } catch (err) {
        setIsLoggedIn(false);
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
      PaperProps={{
        style: {
          backgroundColor: "#0a1234",
          color: "#d1d5db",
          borderRadius: "0.75rem",
          border: "1px solid #9290c3",
        },
      }}
    >
      {isLoggedIn ? (
        <>
          <MenuItem
            onClick={handleMenuClose}
            style={{ padding: "0.75rem 1.5rem" }}
          >
            <Link
              href="/profile"
              style={{ color: "#d1d5db", textDecoration: "none" }}
            >
              Profile
            </Link>
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            style={{ padding: "0.75rem 1.5rem" }}
          >
            <Link
              href="/settings"
              style={{ color: "#d1d5db", textDecoration: "none" }}
            >
              Settings
            </Link>
          </MenuItem>
        </>
      ) : (
        <>
          <MenuItem
            onClick={handleMenuClose}
            style={{ padding: "0.75rem 1.5rem" }}
          >
            <Link
              href="/signin"
              style={{ color: "#d1d5db", textDecoration: "none" }}
            >
              Login
            </Link>
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            style={{ padding: "0.75rem 1.5rem" }}
          >
            <Link
              href="/signup"
              style={{ color: "#d1d5db", textDecoration: "none" }}
            >
              Sign Up
            </Link>
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
      PaperProps={{
        style: {
          backgroundColor: "#0a1234",
          color: "#d1d5db",
          borderRadius: "0.75rem",
          border: "1px solid #9290c3",
        },
      }}
    >
      <MenuItem style={{ padding: "0.75rem 1.5rem" }}>
        <IconButton
          size="large"
          aria-label="show 4 new mails"
          style={{ color: "#9290c3" }}
        >
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p style={{ color: "#d1d5db", margin: 0, marginLeft: "0.5rem" }}>
          Messages
        </p>
      </MenuItem>
      <MenuItem style={{ padding: "0.75rem 1.5rem" }}>
        <IconButton
          size="large"
          aria-label="show notifications"
          style={{ color: "#9290c3" }}
        >
          <Badge badgeContent={notifications.length} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p style={{ color: "#d1d5db", margin: 0, marginLeft: "0.5rem" }}>
          Notifications
        </p>
      </MenuItem>
      <MenuItem
        onClick={handleProfileMenuOpen}
        style={{ padding: "0.75rem 1.5rem" }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          style={{ color: "#9290c3" }}
        >
          <AccountCircle />
        </IconButton>
        <p style={{ color: "#d1d5db", margin: 0, marginLeft: "0.5rem" }}>
          Profile
        </p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className="w-[100%] mb-[1.5rem] border-b-[2px] border-[#9290c3]">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{ backgroundColor: "#070f2b", boxShadow: "none" }}
        >
          <Toolbar style={{ padding: "0.75rem 2rem", minHeight: "4rem" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 45, display: { xs: "none", sm: "block" } }}
            >
              <Link
                href={"/"}
                className="no-underline font-display text-[1.75rem] font-bold"
                style={{ color: "#9290c3" }}
              >
                LOCORA
              </Link>
            </Typography>
            <Box
              sx={{
                flexGrow: 2,
                display: { xs: "none", md: "flex" },
                gap: "0.5rem",
              }}
            >
              {pages.map((page) => (
                <Link key={page.name} href={page.path} passHref>
                  <Button
                    className="font-display px-[1.25rem] py-[0.5rem] rounded-[0.5rem] hover:bg-[rgba(146,144,195,0.15)] transition-all"
                    style={{
                      color: "#d1d5db",
                      textTransform: "none",
                      fontSize: "1rem",
                    }}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon style={{ color: "#9290c3" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <IconButton
                size="large"
                aria-label="show new notifications"
                onClick={handleNotifOpen}
                style={{ color: "#9290c3" }}
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
                style={{ color: "#9290c3" }}
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
                style={{ color: "#9290c3" }}
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
          PaperProps={{
            style: {
              backgroundColor: "#0a1234",
              color: "#d1d5db",
              borderRadius: "0.75rem",
              border: "1px solid #9290c3",
              marginTop: "0.5rem",
              minWidth: "250px",
            },
          }}
        >
          <MenuItem
            disabled
            style={{
              padding: "0.75rem 1.5rem",
              borderBottom: "1px solid #9290c3",
            }}
          >
            <strong style={{ color: "#9290c3" }}>Notifications</strong>
          </MenuItem>
          {notifications.length === 0 && (
            <MenuItem disabled style={{ padding: "0.75rem 1.5rem" }}>
              <span style={{ color: "#9ca3af" }}>No notifications</span>
            </MenuItem>
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
              style={{
                padding: "0.75rem 1.5rem",
                color: "#d1d5db",
                borderBottom:
                  index < notifications.length - 1
                    ? "1px solid rgba(146, 144, 195, 0.2)"
                    : "none",
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
