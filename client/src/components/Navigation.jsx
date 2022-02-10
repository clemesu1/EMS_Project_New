import React from "react";
import { useSelector } from "react-redux";
import {
  AppBar as MuiAppBar,
  Avatar,
  Box,
  Divider,
  Drawer as MuiDrawer,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SideNav from "./SideNav";
import {
  Logout,
  PersonAdd,
  Settings,
  Close,
  LightMode,
  DarkModeOutlined as DarkMode,
  SettingsBrightness,
} from "@mui/icons-material";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    height: "100vh",
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const Navigation = (props) => {
  const { window, colorMode } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const toggle = useSelector((state) => state.drawerToggle.value);

  const [open, setOpen] = React.useState(false);
  const [settings, setSettings] = React.useState(true);
  const [mode, setMode] = React.useState("light");

  const handleMode = (event, newAlignment) => {
    setMode(newAlignment);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const toggleSettingsDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setSettings(!settings);
  };

  const drawer = (
    <Box
      sx={{ width: 350 }}
      role="presentation"
      onKeyDown={toggleSettingsDrawer}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography>Settings</Typography>
        <IconButton color="primary" onClick={toggleSettingsDrawer}>
          <Close fontSize="small" />
        </IconButton>
      </Toolbar>
      <Divider />
      <Stack sx={{ p: 3 }}>
        <Typography color="textSecondary" variant="overline" gutterBottom>
          Mode
        </Typography>
        <ToggleButtonGroup
          value={mode}
          onChange={handleMode}
          color="primary"
          exclusive
          fullWidth
        >
          <ToggleButton value="light" sx={{ textTransform: "none" }} onClick={colorMode.setLightMode}>
            <Stack direction="row" spacing={1}>
              <LightMode fontSize="small" />
              <Typography variant="body2">Light</Typography>
            </Stack>
          </ToggleButton>
          <ToggleButton value="system" sx={{ textTransform: "none" }} onClick={colorMode.setSystemMode}>
            <Stack direction="row" spacing={1}>
              <SettingsBrightness fontSize="small" />
              <Typography variant="body2">System</Typography>
            </Stack>
          </ToggleButton>
          <ToggleButton value="dark" sx={{ textTransform: "none" }} onClick={colorMode.setDarkMode}>
            <Stack direction="row" spacing={1}>
              <DarkMode fontSize="small" />
              <Typography variant="body2">Dark</Typography>
            </Stack>
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Box>
  );

  const [anchorEl, setAnchorEl] = React.useState(null);

  const openMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ pr: "24px" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Dotty Care
          </Typography>
          {toggle && (
            <>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={openMenu ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openMenu ? "true" : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }} />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={openMenu}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem onClick={toggleSettingsDrawer}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
      <MuiDrawer
        container={container}
        variant="temporary"
        open={open}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <SideNav />
      </MuiDrawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          h: "100%",
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        <SideNav />
      </Drawer>
      <MuiDrawer
        PaperProps={{
          elevation: 0,
          style: { borderRadius: "10px 0px 10px 0px" },
        }}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 2 }}
        variant="temporary"
        anchor="right"
        open={settings}
        onClose={toggleSettingsDrawer}
      >
        {drawer}
      </MuiDrawer>
    </div>
  );
};

export default Navigation;
