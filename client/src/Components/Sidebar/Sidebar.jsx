import React, { useState } from "react";
import "./Sidebar.css";

const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(true);
	const menuItems = [
		{
			text: "Home",
			icon: "icons/home.svg",
			link: "home",
			index: "1",
		},
		{
			text: "Database",
			icon: "icons/database.svg",
			link: "database",
			index: "2",
		},
		{
			text: "Enroll",
			icon: "icons/user-plus.svg",
			link: "enroll",
			index: "3",
		},
		{
			text: "Notification",
			icon: "icons/bell.svg",
			link: "notification",
			index: "4",
		},
		{
			text: "Override",
			icon: "icons/bell-off.svg",
			link: "override",
			index: "5",
		},
	];

	return (
		<div
			className={
				isExpanded
					? "sidebar-container"
					: "sidebar-container sidebar-container-NX"
			}
			onClick={() => setExpendState(!isExpanded)}
		>
			<div className="sidebar-header">
				<div className={
						isExpanded
							? "sidebar-heading"
							: "sidebar-heading sidebar-heading-NX"
					}>
					<div className={
						isExpanded
							? "content"
							: "content content-NX"
					}>
						<img className={
							isExpanded
								? "sidebar-heading-profile"
								: "sidebar-heading-profile sidebar-heading-profile-NX"
						} 
						src="icons/Profile Icon.svg" alt="" srcset="" style={{padding: "10px"}}/>
						{isExpanded && <p ><b>Noreen Mercado</b></p>}
						{isExpanded && <p >Secretary</p>}
					</div>
				</div>
				
				<div className="sidebar-menu"
				>
					{menuItems.map(({ text, icon, link, index}) => (
						<a
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href={link}
						>	
							<img className={text} src={icon} alt="" srcset=""/>
							{isExpanded && <p style={{align: 'center', margin: 7}}>{text}</p>}
						</a>
					)
					)}
				</div>
			</div>
			<div className={
				isExpanded
					? "sidebar-footer"
					: "sidebar-footer sidebar-footer-NX"
			}>
				<img className="arrow-right" src="icons/chevron-right.svg" alt="" srcset="" />
			</div>
		</div>
	);
};

export default SideNavBar;
