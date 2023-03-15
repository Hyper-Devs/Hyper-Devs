import React, { useState } from "react";
import { useRef, useEffect } from "react";
import "./Sidebar.css";


const SideNavBar = ({buttonState}) => {
	const val = buttonState;
	const [isHovered1, setIsHovered1] = useState(val.item1);
	const [isHovered2, setIsHovered2] = useState(val.item2);
	const [isHovered3, setIsHovered3] = useState(val.item3);
	const [isHovered4, setIsHovered4] = useState(val.item4);
	const [isHovered5, setIsHovered5] = useState(val.item5);
	const [isHovered6, setIsHovered6] = useState(false);
	const handleMouseEnter = (item) => {
		switch(item){
			case '1':
				setIsHovered1(true);
				break;
			case '2':
				setIsHovered2(true);
				break;
			case '3':
				setIsHovered3(true);
				break;
			case '4':
				setIsHovered4(true);
				break;
			case '5':
				setIsHovered5(true);
				break;
			case '6':
				setIsHovered6(true);
				break;
			default:
				return
		}
	};
	const handleMouseLeave = (item) => {
		switch(item){
			case '1':
				setIsHovered1(val.item1);
				break;
			case '2':
				setIsHovered2(val.item2);
				break;
			case '3':
				setIsHovered3(val.item3);
				break;
			case '4':
				setIsHovered4(val.item4);
				break;
			case '5':
				setIsHovered5(val.item5);
				break;
			case '6':
				setIsHovered6(false);
				break;
			default:
				return
		}
	};

	const [isExpanded, setExpendState] = useState(true);
	const divRef = useRef(null);
	useEffect(() => {
		const handleMouseOver = () => {
			setExpendState(isExpanded);
		};

		const handleMouseOut = () => {
			setExpendState(!isExpanded);
		};
	
		const div = divRef.current;
		div.addEventListener("mouseover", handleMouseOver);
		div.addEventListener("mouseout", handleMouseOut);
	
		const childNodes = div.childNodes;
		childNodes.forEach((node) =>{
		  node.addEventListener("mouseover", handleMouseOver);
		  node.addEventListener("mouseout", handleMouseOut);
		});
	
		return () => {
		  div.removeEventListener("mouseover", handleMouseOver);
		  div.removeEventListener("mouseout", handleMouseOut);
		  childNodes.forEach((node) =>{
			node.removeEventListener("mouseover", handleMouseOver)
			node.removeEventListener("mouseout", handleMouseOut);
		});
		};
	  }, []);

	const menuItems = [
		{
			className: "sidebar-menu-item-hovered1",
			text: "Home",
			icon: "icons/home.svg",
			link: "dashboard",
			index: '1',
			currState: isHovered1,
		},
		{
			className: "sidebar-menu-item-hovered2",
			text: "Database",
			icon: "icons/database.svg",
			link: "database",
			index: '2',
			currState: isHovered2,
		},
		{
			className: "sidebar-menu-item-hovered3",
			text: "Enroll",
			icon: "icons/user-plus.svg",
			link: "enroll",
			index: '3',
			currState: isHovered3,
		},
		{
			className: "sidebar-menu-item-hovered4",
			text: "Notification",
			icon: "icons/bell.svg",
			link: "notification",
			index: '4',
			currState: isHovered4,
		},
		{
			className: "sidebar-menu-item-hovered5",
			text: "Override",
			icon: "icons/bell-off.svg",
			link: "override",
			index: '5',
			currState: isHovered5,
		},
	];


	return (
		<div
			className={
				isExpanded
					? "sidebar-container"
					: "sidebar-container sidebar-container-NX"
			}
			ref={divRef}
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
						src="icons/Profile Icon.svg" alt="" srcset=""/>
						{isExpanded && <p style={{fontSize: 20, textAlign: "center"}}><b>Noreen Mercado</b></p>}
						{isExpanded && <p style={{fontSize: 20, textAlign: "center"}}>Secretary</p>}
					</div>
				</div>
				
				<div className="sidebar-menu"
				>
					{menuItems.map(({ className, text, icon, link, index, currState}) => (
						<a
							className={isExpanded ? "sidebar-menu-item" : "sidebar-menu-item sidebar-menu-item-NX"}
							href={link}
						>	
							<img 
								className={currState ? className : text} 
								src={icon} alt="" srcset="" 
								onMouseEnter={() => handleMouseEnter(index)}
								onMouseLeave={() => handleMouseLeave(index)}
								onClick={() => handleMouseEnter(index)}
							/>
							{isExpanded && 
							<p 
								className={currState ? className : text} 
								style={{align: 'center', margin: 5, fontSize: 20}}
								onMouseEnter={() => handleMouseEnter(index)}
								onMouseLeave={() => handleMouseLeave(index)}
								onClick={() => handleMouseEnter(index)}
							>
								{text}
							</p>
							}
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
				<img 
					className={isHovered6 ? 'arrow-right arrow-right-hovered' : 'arrow-right'} 
					src="icons/chevron-right.svg" alt="" srcset="" 
					onMouseEnter={() => handleMouseEnter('6')}
					onMouseLeave={() => handleMouseLeave('6')}
				/>
			</div>
		</div>
	);
};

export default SideNavBar;