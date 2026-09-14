import React from "react";
import { Drawer, List, ListItem, ListItemText, ListItemButton, Button, Box, Divider } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useLanguage } from "../context/LanguageContext.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

function CustomDrawer() {
	const { settings, switchLanguage, data } = useLanguage();
	const [open, setOpen] = React.useState(false);
	const [openEvents, setOpenEvents] = useState(false);
	const [openLanguage, setOpenLanguage] = useState(false);
	const navigate = useNavigate();

	const handleEventsClick = (e) => {
		e.stopPropagation();
		setOpenEvents((prev) => !prev);
	};

	const handleLanguageClick = (e) => {
		e.stopPropagation();
		setOpenLanguage((prev) => !prev);
	};

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	return (
		<div>
			<Button onClick={toggleDrawer(true)}><MenuIcon fontSize="large" /></Button>
			<Drawer open={open} onClose={toggleDrawer(false)}>
				<Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
					<List>
						{data.appBar.tab.map((tab) => (
							<div key={tab.id}>
								<ListItem disablePadding>
									<ListItemButton
										onClick={
											tab.id === "events"
												? handleEventsClick
												: () => {
													toggleDrawer(false)();
													navigate(tab.id);
												}
										}
									>
										<ListItemText primary={tab.label} />
										{tab.id === "events" &&
											(openEvents ? <ExpandLess /> : <ExpandMore />)}
									</ListItemButton>
								</ListItem>

								{tab.id === "events" && (
									<Collapse in={openEvents} timeout="auto" unmountOnExit>
										<List component="div" disablePadding>
											{data.events?.details.map((event) => (
												<ListItem key={event.title} disablePadding>
													<ListItemButton
														sx={{ pl: 4 }}
														onClick={() => {
															toggleDrawer(false)();
															navigate(`/the-way-of-presence/events/${event.route}`);
														}}
													>
														<ListItemText primary={event.title} />
													</ListItemButton>
												</ListItem>
											))}
										</List>
									</Collapse>
								)}
							</div>
						))}
					</List>
					<Divider />
					<List>
						<ListItem disablePadding>
							<ListItemButton
								onClick={
									handleLanguageClick
								}
							>
								<ListItemText primary={data.appBar.language?.label} />
								{openLanguage ? <ExpandLess /> : <ExpandMore />}
							</ListItemButton>
						</ListItem>
						<Collapse in={openLanguage} timeout="auto" unmountOnExit>
							<List component="div" disablePadding>
								{settings.languages?.options.map((lang) => (
									<ListItem key={lang.value} >
										<ListItemButton
											onClick={(e) => {
												e.stopPropagation();
												switchLanguage(lang.value);
												toggleDrawer(false)();
											}}
										>
											<ListItemText primary={lang.name} />
										</ListItemButton>
									</ListItem>
								))}
							</List>
						</Collapse>

					</List>
				</Box>
			</Drawer>
		</div>
	);
}
export default CustomDrawer