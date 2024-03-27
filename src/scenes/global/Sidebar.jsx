import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
// import styles later
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeModeOutlined from "@mui/icons-material/HomeModeOutlined";
import PeopleModeOutlined from "@mui/icons-material/PeopleModeOutlined";
import ContactModeOutlined from "@mui/icons-material/ContactModeOutlined";
import ReceiptModeOutlined from "@mui/icons-material/ReceiptModeOutlined";
import CalendarTodayModeOutlined from "@mui/icons-material/CalendarTodayModeOutlined";
import HelpModeOutlined from "@mui/icons-material/HelpModeOutlined";
import BarChartModeOutlined from "@mui/icons-material/BarchartModeOutlined";
import PieChartModeOutlined from "@mui/icons-material/PieChartModeOutlined";
import TimelineModeOutlined from "@mui/icons-material/TimelineModeOutlined";
import MenuModeOutlined from "@mui/icons-material/MenuModeOutlined";
import MapModeOutlined from "@mui/icons-material/MapModeOutlined";
import { Mode, Palette } from "@mui/icons-material";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const ProSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: "${colors.primary[400]} !important",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important", //imma change if it deosnt look good
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    ></Box>
  );
};
export default ProSidebar;
