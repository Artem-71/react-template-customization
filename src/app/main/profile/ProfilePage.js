import FuseAnimate from '@fuse/core/FuseAnimate';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import AboutTab from './AboutTab';

const useStyles = makeStyles(theme => ({
	layoutHeader: {
		height: 200,
		minHeight: 200,
		[theme.breakpoints.down('md')]: {
			height: 100,
			minHeight: 100
		}
	}
}));

function ProfilePage() {
	const classes = useStyles();

	return (
		<FusePageSimple
			classes={{
				header: classes.layoutHeader,
				toolbar: 'px-16 sm:px-24'
			}}
			header={
				<div className="p-24 flex flex-1 flex-col items-center justify-center md:flex-row">
					<div className="flex flex-1 flex-col items-center justify-center md:flex-row md:items-center md:justify-start">
					<FuseAnimate animation="transition.slideLeftIn" delay={300}>
						<Typography
							className="flex items-center md:mx-24 text-16 md:text-24 my-8 md:my-0"
							variant="h4"
							color="inherit"
						>
							<Icon className="mr-5" style={{fontSize: "4rem"}}>person</Icon> Profile
						</Typography>
					</FuseAnimate>
					</div>
				</div>
			}
			content={
				<div className="p-16 sm:p-24">
					<AboutTab />
				</div>
			}
		/>
	);
}

export default ProfilePage;
