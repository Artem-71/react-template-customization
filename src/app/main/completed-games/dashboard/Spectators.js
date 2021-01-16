import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FuseAnimate from '@fuse/core/FuseAnimate';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import Avatar from '@material-ui/core/Avatar';
import React from 'react';

function PlayersLeader() {

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
                                Spectators
								</Typography>
							</Toolbar>
						</AppBar>

						<CardContent>
							<div style={{ height: 200, width: '100%' }}>
								<Table stickyHeader className="md:w-1/2 w-full">
									<TableHead>
										<TableRow>
											<TableCell></TableCell>
											<TableCell>FirstName</TableCell>
											<TableCell>LastName</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
                                        <TableRow hover>
                                            <TableCell>
												<FuseAnimate animation="transition.expandIn" delay={300}>
													<Avatar className="w-48 h-48 mx-auto" src="assets/images/avatars/Velazquez.jpg" />
												</FuseAnimate>
											</TableCell>
                                            <TableCell>Estes</TableCell>
                                            <TableCell>Stevens</TableCell>
                                        </TableRow>
                                        <TableRow hover>
											<TableCell>
												<FuseAnimate animation="transition.expandIn" delay={300}>
													<Avatar className="w-48 h-48 mx-auto" src="assets/images/avatars/Barrera.jpg" />
												</FuseAnimate>
											</TableCell>
                                            <TableCell>Hoper</TableCell>
                                            <TableCell>MacGuffin</TableCell>
                                        </TableRow> 	
									</TableBody>
								</Table>
							</div>
						</CardContent>
					</Card>
				</FuseAnimateGroup>
			</div>
		</div>
	);
}

export default PlayersLeader;
