import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import HealingOutlinedIcon from "@mui/icons-material/HealingOutlined";
import { useNavigate } from "react-router-dom";
const pages = ["Турниры", "Рейтинг", "О проекте"];
const pagesLinks = ["tournaments", "ratings", "about"];
const settings = ["Профиль", "Мои команды", "Выйти"];
const settingsLinks = ["profile", "lineups", "logout"];
function Navbar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { profilePic } = props;
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            justifyContent="center"
            alignItems="center"
            sx={{
              display: { xs: "none", md: "flex" },
              ":hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            <HealingOutlinedIcon sx={{ display: { xs: "none", md: "flex" } }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              KMA
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={() => {
                handleCloseNavMenu();
                navigate("/");
              }}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => {
                const pageContent = pagesLinks[index];
                return (
                  <MenuItem
                    key={page}
                    onClick={() => {
                      handleCloseNavMenu();
                      navigate(`/${pageContent}`);
                    }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          <Box
            alignItems="center"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              ":hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            <HealingOutlinedIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                ":hover": {
                  cursor: "pointer",
                },
              }}
            >
              KMA
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => {
              const pageContent = pagesLinks[index];
              return (
                <Button
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(`/${pageContent}`);
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              );
            })}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="profile pic" src={profilePic} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => {
                const settingContent = settingsLinks[index];
                return (
                  <MenuItem
                    key={setting}
                    onClick={() => {
                      handleCloseNavMenu();
                      navigate(`/${settingContent}`);
                    }}
                  >
                    {setting}
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
