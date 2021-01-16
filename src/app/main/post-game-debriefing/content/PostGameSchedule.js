import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Fab from '@material-ui/core/Fab';
import FuseAnimate from '@fuse/core/FuseAnimate';
import { useForm } from '@fuse/hooks';
import FuseUtils from '@fuse/utils/FuseUtils';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { DateTimePicker } from '@material-ui/pickers';
import moment from 'moment';
import { addPostGame } from '../store/postGameSlice'
import { useDispatch } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const defaultFormState = {
	id: FuseUtils.generateGUID(),
	groupName: '',
	dateTime: moment(new Date(), 'MM/DD/YYYY'),
	duration: '',
	status: "upcoming"
};

function AboutTab() {
	const { form, handleChange, setForm, setInForm } = useForm(defaultFormState);
	const [open, setOpen] = useState(false)
	const dispatch = useDispatch()

	const scheduleSubmit = (event) => {
		event.preventDefault();
		if(form.groupName === "" || form.duration === "") {
			setOpen(true);
			return
		}
		dispatch(addPostGame(form));
		setForm({
			...defaultFormState,
			id: FuseUtils.generateGUID()
		});
	}

	const closeComposeDialog = () => {
		setOpen(false)
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
									Schedule a Post Game Debriefing Session
								</Typography>
							</Toolbar>
						</AppBar>

						<CardContent>
							<div className="grid grid-cols-1 items-center md:grid-cols-2 gap-4 mb-8">
								<Typography variant="body2">Group Name:</Typography>
								<FormControl variant="outlined">
									<InputLabel id="groupName-label">Select a Group Name</InputLabel>
									<Select
									labelId="groupName-label"
									id="groupName"
									value={form.groupName}
									onChange={handleChange}
									label="Select a Group Name"
									name="groupName"
									>
									<MenuItem value="Group1">Group1</MenuItem>
									<MenuItem value="Group2">Group2</MenuItem>
									<MenuItem value="Group3">Group3</MenuItem>
									<MenuItem value="Group4">Group4</MenuItem>
									<MenuItem value="Group5">Group5</MenuItem>
									</Select>
								</FormControl>
							</div>
							<div className="grid grid-cols-1 items-center md:grid-cols-2 gap-4 mb-8">
								<Typography variant="body2">Session Start Date and Time:</Typography>
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
								<Typography variant="body2">Except Duration:</Typography>
								<FormControl variant="outlined">
									<InputLabel id="duration-label">Select Duration</InputLabel>
									<Select
									labelId="duration-label"
									id="duration"
									value={form.duration}
									onChange={handleChange}
									label="Select Duration"
									name="duration"
									>
									<MenuItem value="30">30minutes</MenuItem>
									<MenuItem value="60">60minutes</MenuItem>
									<MenuItem value="90">90minutes</MenuItem>
									<MenuItem value="120">120minutes</MenuItem>
									<MenuItem value="150">150minutes</MenuItem>
									<MenuItem value="180">180minutes</MenuItem>
									</Select>
								</FormControl>
							</div>
							<div className="flex justify-end">
							<FuseAnimate animation="transition.expandIn" delay={300}>
								<Fab
									variant="extended"
									size="small"
									color="primary"
									aria-label="add"
									onClick={scheduleSubmit}
								>
									Schedule
								</Fab>
							</FuseAnimate>
							</div>
						</CardContent>
					</Card>
				</FuseAnimateGroup>
			</div>
			<Dialog
				open={open}
				onClose={closeComposeDialog}
			>
				<AppBar position="static" style={{backgroundColor: "#f44336"}}>
					<Toolbar className="flex w-full" style={{minHeight: "48px"}}>
						<Typography variant="subtitle1" color="inherit">
							Warning!
						</Typography>
					</Toolbar>
				</AppBar>
				<DialogContent>
					<h3 className="p-24 font-semibold">Please enter all fields correctly!</h3>
					<div className="flex justify-end">
                        <Button
                        variant="contained"
                        color="primary"
                        style={{backgroundColor: "#61dafb", textTransform: "none"}}
                        onClick={closeComposeDialog}
                        >
                            Close
                        </Button>
                    </div>
				</DialogContent>
			</Dialog>
		</div>
	);
}

export default AboutTab;
