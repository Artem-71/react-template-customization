import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React from 'react';

const StyledTableCell = withStyles((theme) => ({
	head: {
	  backgroundColor: theme.palette.common.black,
	  color: theme.palette.common.white,
	},
	body: {
	  fontSize: 14,
	},
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
	root: {
	  '&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	  },
	},
  }))(TableRow);
  
  const useStyles = makeStyles({
	table: {
	  minWidth: 700,
	},
  });

function AboutTab(props) {
	const { postGames } = props
	const classes = useStyles();

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
									List of Completed Post Game Debriefing Sessions
								</Typography>
							</Toolbar>
						</AppBar>

						<CardContent>
							<TableContainer component={Paper}>
								<Table className={classes.table} aria-label="customized table">
									<TableHead>
									<TableRow>
										<StyledTableCell>Group Name</StyledTableCell>
										<StyledTableCell align="left">Session Start Date and Time</StyledTableCell>
										<StyledTableCell align="left">Expected Duration</StyledTableCell>
									</TableRow>
									</TableHead>
									<TableBody>
									{postGames.map((game, i) => (
										game.status === "complete" &&
										<StyledTableRow key={i}>
											<StyledTableCell component="th" scope="row">
												{game.groupName}
											</StyledTableCell>
											<StyledTableCell align="left">{game.dateTime}</StyledTableCell>
											<StyledTableCell align="left">{game.duration}&nbsp;minutes</StyledTableCell>
										</StyledTableRow>
									))}
									</TableBody>
								</Table>
							</TableContainer>
						</CardContent>
					</Card>
				</FuseAnimateGroup>
			</div>
		</div>
	);
}

export default AboutTab;
