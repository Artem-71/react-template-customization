import FuseAnimate from '@fuse/core/FuseAnimate';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import withReducer from 'app/store/withReducer';
import reducer from '../store';
import GeneralInfo from './GeneralInfo';
import GeneralStatistics from './GeneralStatistics';
import PlayersLeader from './PlayersLeader';
import Spectators from './Spectators'
import Recording from './Recording'

const useStyles = makeStyles(theme => ({
	layoutHeader: {
		height: 150,
		minHeight: 150,
		[theme.breakpoints.down('md')]: {
			height: 70,
			minHeight: 70
		}
	}
}));

function CompletedGameDashboard() {
	const classes = useStyles();
	return (
		<FusePageSimple
			classes={{
				header: classes.layoutHeader,
				toolbar: 'px-16 sm:px-24'
			}}
			header={
				<div className="p-24 flex flex-1 flex-col justify-center">
					<div className="flex flex-1 flex-col items-center justify-center md:flex-row md:items-center md:justify-start">
						<FuseAnimate animation="transition.slideLeftIn" delay={300}>
							<Typography
								className="flex items-center md:mx-24 text-16 md:text-24 my-8 md:my-0"
								variant="h4"
								color="inherit"
							>
								<Icon className="mr-5" style={{fontSize: "4rem"}}>dashboard</Icon> Game Dashboard
							</Typography>
						</FuseAnimate>
					</div>
					<div>
						<IconButton color="inherit" to="/completed-games" component={Link}>
							<Icon>arrow_back</Icon>
						</IconButton>
					</div>
					
				</div>
			}
			content={
				<div className="p-16 sm:p-24">
					<GeneralInfo />
                    <GeneralStatistics />
                    <PlayersLeader />
                    <Spectators />
                    <Recording />
				</div>
			}
		/>
	);
}

export default withReducer('completedGamesApp', reducer)(CompletedGameDashboard);
