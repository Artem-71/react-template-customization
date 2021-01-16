import FuseAnimate from '@fuse/core/FuseAnimate';
import Icon from '@material-ui/core/Icon';
import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';
import Toolbar from 'react-big-calendar/lib/Toolbar';
import connect from 'react-redux/es/connect/connect';
import { selectMainThemeDark } from 'app/store/fuse/settingsSlice';

/* eslint-disable react/jsx-no-bind */
const styles = theme => ({
	root: {
		backgroundImage: 'url("../../assets/images/backgrounds/header-bg.png")',
		backgroundColor: '#FAFAFA',
		color: '#FFFFFF',
		backgroundSize: 'cover',
		backgroundPosition: '0 50%',
		backgroundRepeat: 'no-repeat',
		'&:before': {
			content: "''",
			position: 'absolute',
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			zIndex: 1,
			background: 'rgba(0, 0, 0, 0.45)'
		},
	}
});

class CalendarHeader extends Toolbar {
	render() {
		const { classes } = this.props;

		return (
			<ThemeProvider >
				<div className={clsx(classes.root, 'flex h-200 min-h-200 relative')}>
					<div className="flex flex-1 flex-col p-12 justify-between z-10 container">
						<div className="flex flex-col items-center justify-between sm:flex-row">
							<div className="flex items-center my-16 sm:mb-0">
								<FuseAnimate animation="transition.expandIn" delay={300}>
									<Icon className="text-32 mx-12">schedule</Icon>
								</FuseAnimate>
								<FuseAnimate animation="transition.slideLeftIn" delay={300}>
									<Typography variant="h6">Schedule</Typography>
								</FuseAnimate>
							</div>
						</div>
					</div>
				</div>
			</ThemeProvider>
		);
	}
}

function mapStateToProps(state) {
	return {
		mainThemeDark: selectMainThemeDark(state)
	};
}

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(CalendarHeader));
