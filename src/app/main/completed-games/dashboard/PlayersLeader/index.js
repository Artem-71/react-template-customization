import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { getContacts } from '../../store/completedGameSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import CompletedGameTable from '../../CompletedGameList';

function PlayersLeader() {
	const dispatch = useDispatch();
	const routeParams = useParams();
	// const completedGames = useSelector(selectContacts);

	useDeepCompareEffect(() => {
		dispatch(getContacts(routeParams));
	}, [dispatch, routeParams]);

	return (
		<div className="md:flex max-w-2xl">
			<div className="flex flex-col flex-1">
				<FuseAnimateGroup
					enter={{
						animation: 'transition.slideUpBigIn'
					}}
				>
					<Card className="w-full mb-16 rounded-8 shadow">
						<AppBar position="static" elevation={0}>
							<Toolbar className="px-8">
								<Typography variant="subtitle1" color="inherit" className="flex-1 px-12">
									Players Leaderboard
								</Typography>
							</Toolbar>
						</AppBar>

						<CardContent>
							<CompletedGameTable />
						</CardContent>
					</Card>
				</FuseAnimateGroup>
			</div>
		</div>
	);
}

export default PlayersLeader;
