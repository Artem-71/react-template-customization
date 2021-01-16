import FuseScrollbars from '@fuse/core/FuseScrollbars';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import withReducer from 'app/store/withReducer';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reducer from './store';
import { toggleQuickPanel } from './store/stateSlice';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import { serverUrl } from '../../../httpCommon'

const useStyles = makeStyles(theme => ({
	root: {
		width: 280
	},
	nested: {
		paddingLeft: theme.spacing(4),
	  },
}));

function QuickPanel(props) {
	const dispatch = useDispatch();
	const state = useSelector(({ quickPanel }) => quickPanel.state);
	const classes = useStyles();
	const [virtual, setVertual] = useState(false);
	const [practice, setPractice] = useState(false);

	const virtualHandle = () => {
		setVertual(!virtual)
	}

	const practiceHandle = () => {
		setPractice(!practice)
	}

	return (
		<SwipeableDrawer
			classes={{ paper: classes.root }}
			open={state}
			anchor="right"
			onOpen={ev => {}}
			onClose={ev => dispatch(toggleQuickPanel())}
			disableSwipeToOpen
		>
			<FuseScrollbars>
				<ListSubheader component="div">Main Menu</ListSubheader>
				<List>
					<ListItem button>
						<ListItemIcon>
						<Icon style={{color: "#00CFFD"}}>home</Icon>
						</ListItemIcon>
						<a href={serverUrl} style={{color: "#212121"}}><ListItemText primary="Home" /></a>
					</ListItem>
					<ListItem button onClick={virtualHandle}>
						<ListItemIcon>
						<Icon style={{color: "#00CFFD"}}>games</Icon>
						</ListItemIcon>
						<ListItemText primary="Virtual Escape Games" />
						{virtual ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={virtual} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItem button className={classes.nested}>
								<ListItemIcon>
								<ChildFriendlyIcon style={{color: "#00CFFD"}} />
								</ListItemIcon>
								<a href={`${serverUrl}lab-escape`} style={{color: "#212121"}}><ListItemText primary="Lab Escape" /></a>
							</ListItem>
							<ListItem button className={classes.nested}>
								<ListItemIcon>
								<ChildFriendlyIcon style={{color: "#00CFFD"}} />
								</ListItemIcon>
								<a href={`${serverUrl}castle-escape`} style={{color: "#212121"}}><ListItemText primary="Castle Escape" /></a>
							</ListItem>
						</List>
					</Collapse>
					<ListItem button onClick={practiceHandle}>
						<ListItemIcon>
							<Icon style={{color: "#00CFFD"}}>train</Icon>
						</ListItemIcon>
						<ListItemText primary="Practice Games" />
						{practice ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={practice} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItem button className={classes.nested}>
								<ListItemIcon>
								<ChildFriendlyIcon style={{color: "#00CFFD"}} />
								</ListItemIcon>
								<a href={`${serverUrl}maze-escape`} style={{color: "#212121"}}><ListItemText primary="Maze Escape" /></a>
							</ListItem>
							<ListItem button className={classes.nested}>
								<ListItemIcon>
								<ChildFriendlyIcon style={{color: "#00CFFD"}} />
								</ListItemIcon>
								<a href={`${serverUrl}cube-escape`} style={{color: "#212121"}}><ListItemText primary="Cube Escape" /></a>
							</ListItem>
							<ListItem button className={classes.nested}>
								<ListItemIcon>
								<ChildFriendlyIcon style={{color: "#00CFFD"}} />
								</ListItemIcon>
								<a href={`${serverUrl}lost-found-escape`} style={{color: "#212121"}}><ListItemText primary="Cube Escape" /></a>
							</ListItem>
						</List>
					</Collapse>
					<ListItem button>
						<ListItemIcon>
						<PlaylistAddCheckIcon style={{color: "#00CFFD"}} />
						</ListItemIcon>
						<a href={`${serverUrl}to-do`} style={{color: "#212121"}}><ListItemText primary="To do list before you play" /></a>
					</ListItem>
					<ListItem button>
						<ListItemIcon>
						<Icon style={{color: "#00CFFD"}}>help</Icon>
						</ListItemIcon>
						<a href={`${serverUrl}faq`} style={{color: "#212121"}}><ListItemText primary="FAQ" /></a>
					</ListItem>
				</List>
			</FuseScrollbars>
		</SwipeableDrawer>
	);
}

export default withReducer('quickPanel', reducer)(React.memo(QuickPanel));
