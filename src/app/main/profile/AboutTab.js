import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FuseAnimate from '@fuse/core/FuseAnimate';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AboutTab() {
	const [data, setData] = useState(null);

	useEffect(() => {
		axios.get('/api/profile').then(res => {
			setData(res.data);
		});
	}, []);

	if (!data) {
		return null;
	}

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
							<div className="mb-24">
								<FuseAnimate animation="transition.expandIn" delay={300}>
									<Avatar className="w-96 h-96" src="assets/images/avatars/Velazquez.jpg" />
								</FuseAnimate>
							</div>
							<div className="mb-24">
								<Typography className="font-bold mb-4 text-15">First Name</Typography>
								<Typography>{data.firstName}</Typography>
							</div>
							<div className="mb-24">
								<Typography className="font-bold mb-4 text-15">Last Name</Typography>
								<Typography>{data.lastName}</Typography>
							</div>
							<div className="mb-24">
								<Typography className="font-bold mb-4 text-15">Organization Name</Typography>
								<Typography>{data.organizationName}</Typography>
							</div>
							<div className="mb-24">
								<Typography className="font-bold mb-4 text-15">Email Address</Typography>
								<Typography>{data.email}</Typography>
							</div>
						</CardContent>
					</Card>
				</FuseAnimateGroup>
			</div>
		</div>
	);
}

export default AboutTab;
