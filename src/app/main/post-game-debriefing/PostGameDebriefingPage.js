import FuseAnimate from '@fuse/core/FuseAnimate';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect } from 'react';
import PostGameSchedule from './content/PostGameSchedule';
import UpcomingPost from './content/UpcomingPost';
import CompletedPost from './content/CompletePost';
import Icon from '@material-ui/core/Icon';
import withReducer from 'app/store/withReducer';
import { useDispatch, useSelector } from 'react-redux';
import reducer from './store';
import moment from 'moment'
import {
	selectEvents,
	getPostGames
} from './store/postGameSlice';

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

function PostGameDebriefingPage() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const postGames = useSelector(selectEvents).map(event => ({
		...event,
		dateTime: moment(event.dateTime).format("MMM DD, YYYY LT")
	}));

	useEffect(() => {
		dispatch(getPostGames());
	}, [dispatch]);

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
							<Icon className="mr-5" style={{fontSize: "4rem"}}>departure_board</Icon> Post Game Debriefings
						</Typography>
					</FuseAnimate>
					</div>
				</div>
			}
			content={
				<div className="p-16 sm:p-24">
					<PostGameSchedule />
					<UpcomingPost postGames={postGames} />
					<CompletedPost postGames={postGames} />
				</div>
			}
		/>
	);
}

export default withReducer('postGamePage', reducer)(PostGameDebriefingPage);
