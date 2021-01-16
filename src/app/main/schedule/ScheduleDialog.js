import { useForm } from '@fuse/hooks';
import FuseUtils from '@fuse/utils/FuseUtils';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { DateTimePicker } from '@material-ui/pickers';
import moment from 'moment';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlayersList from './playersList'
import { removeEvent, updateEvent, addEvent, closeNewEventDialog, closeEditEventDialog } from './store/scheduleSlice';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';

const defaultFormState = {
	id: FuseUtils.generateGUID(),
	title: '',
	gameName: 'Labescape',
	location: '',
	start: moment(new Date(), 'MM/DD/YYYY'),
	sessionKey: {
		itemKey: false,
		data: []
	},
	spectator: {
		itemKey: false,
		data: []
	},
	faciltator: {
		itemKey: false,
		data: []
	}
};

function EventDialog(props) {
	const dispatch = useDispatch();
	const eventDialog = useSelector(({ scheduleApp }) => scheduleApp.events.eventDialog);
	const { form, handleChange, setForm, setInForm } = useForm(defaultFormState);

	const initDialog = useCallback(() => {
		/**
		 * Dialog type: 'edit'
		 */
		if (eventDialog.type === 'edit' && eventDialog.data) {
			setForm({ ...eventDialog.data });
		}

		/**
		 * Dialog type: 'new'
		 */
		if (eventDialog.type === 'new') {
			setForm({
				...defaultFormState,
				id: FuseUtils.generateGUID()
			});
		}
	}, [eventDialog.data, eventDialog.type, setForm]);

	useEffect(() => {
		/**
		 * After Dialog Open
		 */
		if (eventDialog.props.open) {
			initDialog();
		}
	}, [eventDialog.props.open, initDialog]);

	function closeComposeDialog() {
		return eventDialog.type === 'edit' ? dispatch(closeEditEventDialog()) : dispatch(closeNewEventDialog());
	}

	function canBeSubmitted() {
		return form.title.length > 0;
	}

	function handleSubmit(event) {
		event.preventDefault();

		if (eventDialog.type === 'new') {
			dispatch(addEvent(form));
		} else {
			dispatch(updateEvent(form));
		}
		closeComposeDialog();
	}

	function handleRemove() {
		dispatch(removeEvent(form.id));
		closeComposeDialog();
	}

	const sessionKeyProps = {
		form: form,
		title: "game session",
		selectedId: "sessionKey",
		handleChange: handleChange,
		setForm: setForm
	}
	const spectatorProps = {
		form: form,
		title: "spectators",
		selectedId: "spectator",
		handleChange: handleChange,
		setForm: setForm
	}
	const faciltatorProps = {
		form: form,
		title: "faciltators",
		selectedId: "faciltator",
		handleChange: handleChange,
		setForm: setForm
	}
	return (
		<Dialog
			{...eventDialog.props}
			onClose={closeComposeDialog}
			fullWidth
			maxWidth="md"
			component="form"
			classes={{
				paper: 'rounded-8'
			}}
		>
			<AppBar position="static">
				<Toolbar className="flex w-full">
					<Typography variant="subtitle1" color="inherit">
						{eventDialog.type === 'new' ? 'New Schedule' : 'Edit Schedule'}
					</Typography>
				</Toolbar>
			</AppBar>

			<form noValidate onSubmit={handleSubmit}>
				<DialogContent classes={{ root: 'p-16 pb-0 sm:p-24 sm:pb-0' }}>
					<div className="grid grid-cols-1 items-center md:grid-cols-2 gap-4 mb-8">
						<Typography variant="body2">Group Name:</Typography>
						<TextField
							id="title"
							label="Group Name"
							className="mt-8 mb-16"
							InputLabelProps={{
								shrink: true
							}}
							name="title"
							value={form.title}
							onChange={handleChange}
							variant="outlined"
							autoFocus
							required
							fullWidth
						/>
					</div>
					<div className="grid grid-cols-1 items-center md:grid-cols-2 gap-4 mb-8">
						<Typography variant="body2">Game Start Date and Time:</Typography>
						<DateTimePicker
							label="Start"
							inputVariant="outlined"
							value={form.start}
							onChange={date => setInForm('start', date)}
							className="mt-8 mb-16 w-full"
							minDate={moment(new Date(), 'MM/DD/YYYY')}
						/>
					</div>
					<div className="grid grid-cols-1 items-center md:grid-cols-2 gap-4 mb-8">
						<Typography variant="body2">Select the game to play:</Typography>
						<FormControl variant="outlined">
							<InputLabel id="gameName-label">Game Name</InputLabel>
							<Select
							labelId="gameName-label"
							id="gameName"
							value={form.gameName}
							onChange={handleChange}
							label="GameName"
							name="gameName"
							>
							<MenuItem value="Labescape">Lab escape</MenuItem>
							<MenuItem value="Castleescape">Castle escape</MenuItem>
							</Select>
						</FormControl>
					</div>
					<div className="grid grid-cols-1 items-center md:grid-cols-2 gap-4 mb-8">
						<Typography variant="body2">Select Location closes to your team:</Typography>
						<FormControl variant="outlined">
							<InputLabel id="location-label">Location</InputLabel>
							<Select
							labelId="location-label"
							id="location"
							value={form.location}
							onChange={handleChange}
							label="Location"
							name="location"
							>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value="London">London</MenuItem>
							<MenuItem value="Moscow">Moscow</MenuItem>
							</Select>
						</FormControl>
					</div>
					<PlayersList {...sessionKeyProps} />
					<PlayersList {...spectatorProps} />
					<PlayersList {...faciltatorProps} />
				</DialogContent>

				{eventDialog.type === 'new' ? (
					<DialogActions className="justify-between px-8 sm:px-16">
						<Button variant="contained" color="primary" type="submit" disabled={!canBeSubmitted()}>
							Add
						</Button>
					</DialogActions>
				) : (
					<DialogActions className="justify-between px-8 sm:px-16">
						<Button variant="contained" color="primary" type="submit" disabled={!canBeSubmitted()}>
							Save
						</Button>
						<IconButton onClick={handleRemove}>
							<Icon>delete</Icon>
						</IconButton>
					</DialogActions>
				)}
			</form>
		</Dialog>
	);
}

export default EventDialog;
