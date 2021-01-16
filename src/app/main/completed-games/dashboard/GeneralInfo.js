import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';

function GeneralInfo() {
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
									General Information
								</Typography>
							</Toolbar>
						</AppBar>

						<CardContent>
							<div className="grid grid-cols-1 items-center md:grid-cols-2 gap-4 mb-8">
                                <div>
                                    <span className="font-bold mr-8">Group Title:</span>
                                    <span>Finance Department Group</span>
                                </div>
                                <div>
                                    <span className="font-bold mr-8">Game Played Time:</span>
                                    <span>January 20, 2020 at 12: 30PM EST</span>
                                </div>
							</div>
                            <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-4 mb-8">
                                <div>
                                    <span className="font-bold mr-8">Game Played:</span>
                                    <span>Labescape</span>
                                </div>
                                <div>
                                    <span className="font-bold mr-8">Stage:</span>
                                    <span>1</span>
                                </div>
							</div>
                            <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-4 mb-8">
                                <div>
                                    <span className="font-bold mr-8">Organized By:</span>
                                    <span>Faisal Shehab</span>
                                </div>
                                <div>
                                    <span className="font-bold mr-8">Facilitated By:</span>
                                    <span>Faisal Shehab</span>
                                </div>
							</div>
						</CardContent>
					</Card>
				</FuseAnimateGroup>
			</div>
		</div>
	);
}

export default GeneralInfo;
