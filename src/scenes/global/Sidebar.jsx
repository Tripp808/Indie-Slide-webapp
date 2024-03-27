import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  PeopleOutlined,
  ContactsOutlined,
  ReceiptOutlined,
  PersonOutlined,
  CalendarTodayOutlined,
  HelpOutlineOutlined,
  BarChartOutlined,
  PieChartOutlined,
  TimelineOutlined,
  MapOutlined,
  MenuOutlined,
} from "@mui/icons-material";

const menuItems = [
  { title: "Dashboard", to: "/", icon: <HomeOutlined /> },
  { title: "Manage Team", to: "/team", icon: <PeopleOutlined /> },
  {
    title: "Contacts Information",
    to: "/contacts",
    icon: <ContactsOutlined />,
  },
  { title: "Invoices Balances", to: "/invoices", icon: <ReceiptOutlined /> },
  { title: "Profile Form", to: "/form", icon: <PersonOutlined /> },
  { title: "Calendar", to: "/calendar", icon: <CalendarTodayOutlined /> },
  { title: "FAQ Page", to: "/faq", icon: <HelpOutlineOutlined /> },
  { title: "Bar Chart", to: "/bar", icon: <BarChartOutlined /> },
  { title: "Pie Chart", to: "/pie", icon: <PieChartOutlined /> },
  { title: "Line Chart", to: "/line", icon: <TimelineOutlined /> },
  { title: "Geography Chart", to: "/geography", icon: <MapOutlined /> },
];

const ProSidebar = () => {
  const theme = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const handleMenuItemClick = (title) => {
    setSelected(title);
  };

  return (
    <Box>
      <Sidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{ margin: "10px 0 20px 0" }}
          >
            {!isCollapsed && (
              <Box display="flex" alignItems="center">
                <Typography variant="h3">ADMINIS</Typography>
              </Box>
            )}
          </MenuItem>
          {menuItems.map((item) => (
            <MenuItem
              key={item.title}
              active={selected === item.title}
              onClick={() => handleMenuItemClick(item.title)}
              icon={item.icon}
            >
              <Typography>{item.title}</Typography>
              <Link to={item.to} />
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default ProSidebar;
