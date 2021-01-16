import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Fab from '@material-ui/core/Fab';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({
    root: {
      '& div': {
            '& .completion-section': {
                height: "150px",
                backgroundColor: "#F80000",
                color: "white",
                '& h5': {
                    fontSize: '25px'
                }
            },
            '& .time-section': {
                height: "150px",
                backgroundColor: "#E2742B",
                color: "white",
                '& h5': {
                    fontSize: '25px'
                }
            },
            '& .players-section': {
                height: "150px",
                backgroundColor: "#8545B4",
                color: "white",
                '& h5': {
                    fontSize: '25px'
                }
            },
            '& .Facilitator-section': {
                height: "150px",
                backgroundColor: "#00A3D2",
                color: "white",
                '& h5': {
                    fontSize: '25px'
                }
            }
      }
    },
  });

function GeneralStatistics() {
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
									General Statistics
								</Typography>
							</Toolbar>
						</AppBar>
						<CardContent className={classes.root}>
							<div className="grid grid-cols-2 items-center md:grid-cols-4 gap-10 mb-8">
                                <Fab
                                    variant="extended"
                                    size="large"
                                    aria-label="add"
                                    className="completion-section"
                                >
                                    <div className="flex flex-col">
                                        <p>completion</p>
                                        <h5>Unsuccessful</h5>
                                        <h5>Completion</h5>
                                    </div>
                                    
                                </Fab>
                                <Fab
                                    variant="extended"
                                    size="large"
                                    aria-label="add"
                                    className="time-section"
                                >
                                    <div className="flex flex-col">
                                        <p>Completion Time</p>
                                        <h5>90 Minutes</h5>
                                    </div>
                                </Fab>
                                <Fab
                                    variant="extended"
                                    size="large"
                                    aria-label="add"
                                    className="players-section"
                                >
                                    <div className="flex flex-col">
                                        <p>Number of Players</p>
                                        <h5>6</h5>
                                    </div>
                                </Fab>
                                <Fab
                                    variant="extended"
                                    size="large"
                                    aria-label="add"
                                    className="Facilitator-section"
                                >
                                    <div className="flex flex-col">
                                        <p>Facilitator</p>
                                        <h5>Faisal Shehab</h5>
                                    </div>
                                </Fab>
							</div>
						</CardContent>
					</Card>
				</FuseAnimateGroup>
			</div>
		</div>
	);
}

export default GeneralStatistics;
