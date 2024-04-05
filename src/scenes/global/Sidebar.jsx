import React, { useState, useContext } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@mui/icons-material";
import { ColorModeContext, tokens } from "../../theme";

// icon components
import {
  HomeOutlined,
  BarChartOutlined,
  PieChartOutlined,
  TimelineOutlined,
  MusicNoteOutlined,
  LibraryMusicOutlined,
  PlaylistPlayOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

// profile picture image
import profilePicture from "../global/profile.jpg";

const menuItems = [
  { title: "Dashboard", to: "/", icon: <HomeOutlined /> },
  { title: "Music Streams", to: "/music-streams", icon: <BarChartOutlined /> },
  {
    title: "Music Royalties",
    to: "/music-royalties",
    icon: <PieChartOutlined />,
  },
  { title: "Music Trends", to: "/music-trends", icon: <TimelineOutlined /> },
  { title: "My Music", to: "/my-music", icon: <MusicNoteOutlined /> },
  {
    title: "Music Library",
    to: "/music-library",
    icon: <LibraryMusicOutlined />,
  },
  { title: "Playlists", to: "/playlists", icon: <PlaylistPlayOutlined /> },
  { title: "Settings", to: "/settings", icon: <SettingsOutlined /> },
];

const ProSidebar = () => {
  const muiTheme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const colors = muiTheme ? tokens(muiTheme.palette.mode) : {};

  const [selected, setSelected] = useState("Dashboard");

  const handleMenuItemClick = (title) => {
    setSelected(title);
  };

  return (
    <Box
      style={{
        height: "100%",
        backgroundColor: colors.primary ? colors.primary[900] : "#000", // Fallback color
      }}
    >
      <Sidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{ margin: "10px 0 20px 0" }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                style={{ width: "100%" }}
              >
                <Typography
                  variant="h3"
                  style={{
                    textAlign: "center",
                    margin: "0 auto",
                    fontFamily: "cursive",
                    fontSize: "28px",
                    color: colors.greenAccent
                      ? colors.greenAccent[500]
                      : "#fff", // Fallback color
                    textShadow: "1px 1px 2px #000",
                  }}
                >
                  Indie Slide
                </Typography>
              </Box>
            )}
          </MenuItem>
          <div
            style={{
              width: isCollapsed ? "30px" : "100px",
              height: isCollapsed ? "30px" : "100px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              margin: "20px auto",
              backgroundImage: `url(${profilePicture})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>{" "}
          {/* profile picture */}
          {!isCollapsed && (
            <Box style={{ textAlign: "center", marginTop: "20px" }}>
              <Typography variant="body1" sx={{ fontSize: "16px" }}>
                Welcome Oche!
              </Typography>
            </Box>
          )}
          {menuItems.map((item) => (
            <MenuItem
              key={item.title}
              active={selected === item.title}
              onClick={() => handleMenuItemClick(item.title)}
              icon={item.icon}
              sx={{
                "&:hover": {
                  color: colors.greenAccent ? colors.primary[500] : "#fff", // Change text color on hover
                },
              }}
            >
              <Typography
                style={{
                  color: colors.grey ? colors.grey[100] : "#fff", // Fallback color
                  fontFamily: "cursive",
                }}
              >
                {item.title}
              </Typography>
              <Link to={item.to} />
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default ProSidebar;
