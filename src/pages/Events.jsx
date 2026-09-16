import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, Box, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import eventImg from "../assets/img/eventspage.jpg";
import { useLanguage } from "../context/LanguageContext.jsx";
import Swiper from '../components/Swiper.jsx';

function Events() {
	const { data } = useLanguage();
	const navigate = useNavigate();
	const theme = useTheme();

	const handleClickOpen = (route) => {
		navigate(`/events/${route}`);
	};

	const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

	return (

		<Box
			sx={{
				position: "relative",
				minHeight: "100vh",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				p: 3,
				backgroundColor: "background.default",
				zIndex: 0,
				"&::before": {
					content: '""',
					position: "absolute",
					inset: 0,
					backgroundImage: `url(${eventImg})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					filter: "sepia(20%) contrast(60%)",
					opacity: 0.5,
					zIndex: -1,

				},
			}}
		>
			<Typography variant="h1" sx={{ paddingTop: 15, }} >
				{data.events?.title}
			</Typography>
			{isMdUp ? (
				<Grid
					container
					spacing={{ xs: 2, lg: 10 }}
					sx={{ margin: 5 }}
					justifyContent="center"
				>
					{data.events?.details.map((event, index) => (
						<Grid
							size={{ xs: 12, md: 4, lg: 3 }}
							key={index}
						>
							<Card
								onClick={() => event.route ? handleClickOpen(event.route) : window.open(event.redirect, '_blank')}
								sx={{
									transition:
										"transform 0.30s ease, box-shadow 0.30s ease",
									"&:hover": {
										transform: "scale(1.1)",
										boxShadow: 12,
									},
									cursor: "pointer",
									overflow: "hidden",
									display: "flex",
									flexDirection: "column",
									width: { xs: "100%", sm: "90%", md: "100%" },
									height: { xs: "auto", sm: 400, md: 450 },
								}}>
								<CardHeader title={event.title} />
								<CardMedia
									component="img"
									image={event.image}
									alt={event.title}
								/>
								<CardContent>
									<Typography variant="body1">
										{event.subtitle}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			) : (
				<Box sx={{ width: "100%", display: "flex", justifyContent: "center", mt: 2, mb: 2, }}>
					<Swiper
						content={data.events?.details}
						onClick={handleClickOpen}
						button={true}
						buttonLabel={data.events?.moreInfo}
					/>
				</Box>
			)}
		</Box>
	);
}
export default Events;