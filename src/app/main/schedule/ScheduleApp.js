import FuseAnimate from '@fuse/core/FuseAnimate';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import withReducer from 'app/store/withReducer';
import clsx from 'clsx';
import moment from 'moment';
import React, { useEffect, useRef } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import * as ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import CalendarHeader from './ScheduleHeaderNew';
import EventDialog from './ScheduleDialog';
import reducer from './store';
import {
	dateFormat,
	selectEvents,
	openNewEventDialog,
	updateEvent,
	getEvents
} from './store/scheduleSlice';

const localizer = momentLocalizer(moment);

const DragAndDropCalendar = withDragAndDrop(Calendar);

const allViews = Object.keys(Views).map(k => Views[k]);

const useStyles = makeStyles(theme => ({
	addButton: {
		position: 'absolute',
		left: 30,
		top: 172,
		zIndex: 99
	}
}));

function ScheduleApp(props) {
	const dispatch = useDispatch();
	const events = useSelector(selectEvents).map(event => ({
		...event,
		start: moment(event.start, dateFormat).toDate()
	}));

	const classes = useStyles(props);
	const headerEl = useRef(null);

	useEffect(() => {
		dispatch(getEvents());
	}, [dispatch]);

	function moveEvent({ event, start }) {
		dispatch(
			updateEvent({
				...event,
				start
			})
		);
	}

	function resizeEvent({ event, start }) {
		delete event.type;
		dispatch(
			updateEvent({
				...event,
				start
			})
		);
	}

	return (
		<div className={clsx(classes.root, 'flex flex-col flex-auto relative')}>
			<div ref={headerEl} />
			<CalendarHeader />
			<FuseAnimate animation="transition.expandIn" delay={500}>
				<Fab
					color="secondary"
					aria-label="add"
					className={classes.addButton}
					onClick={() =>
						dispatch(
							openNewEventDialog({
								start: new Date()
							})
						)
					}
				>
					<Icon>add</Icon>
				</Fab>
			</FuseAnimate>
			<EventDialog />
		</div>
	);
}

export default withReducer('scheduleApp', reducer)(ScheduleApp);

/*
IE 11 Fix
*/
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
	Element.prototype.closest = s => {
		let el = this;

		do {
			if (el.matches(s)) return el;
			el = el.parentElement || el.parentNode;
		} while (el !== null && el.nodeType === 1);
		return null;
	};
}
