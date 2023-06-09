import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import StorageIcon from '@mui/icons-material/Storage';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
// import EmailIcon from '@mui/icons-material/Email';

export const SidebarData = [
    {
        title: "Dashboard",
        icon: <HomeIcon/>,
        link: "/dashboard"
    },
    {
        title: "Notification",
        icon: <NotificationsIcon/>,
        link: "/notification"
    },
    {
        title: "Enrollment",
        icon: <PersonAddIcon/>,
        link: "/enroll"
    },
    {
        title: "Database",
        icon: <StorageIcon/>,
        link: "/database"
    },
    {
        title: "Override",
        icon: <NotificationsOffIcon/>,
        link: "/override"
    },
    {
        title: "Add User",
        icon: <PersonAddAltIcon/>,
        link: "/register",
        visible: (userRole) => userRole === "Admin"
    },
];