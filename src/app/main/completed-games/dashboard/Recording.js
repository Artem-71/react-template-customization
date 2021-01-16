import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import FuseAnimate from '@fuse/core/FuseAnimate';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';

function PlayersLeader() {
    const [recordURL, setRecordURL] = useState('https://example.com/')
    const [open, setOpen] = useState(false)
    const [copySuccess, setCopySuccess] = useState(false)

    function copyURL() {
        if(recordURL === "") {
            setCopySuccess(false)
            setOpen(true)
            return
        }
        navigator.clipboard.writeText(recordURL)
        setCopySuccess(true)
        setOpen(true)
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
									Recording
								</Typography>
							</Toolbar>
						</AppBar>

						<CardContent>
                            <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-4 mb-8">
                                <div style={{width: "300px"}}>
                                        <a href={recordURL} style={{textDecoration: "none"}}>
                                            <Fab
                                                variant="extended"
                                                size="small"
                                                color="primary"
                                                aria-label="add"
                                            >
                                                Play the Recording
                                            </Fab> 
                                        </a>
                                </div>
                                
                            </div>
                            <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-4 mb-8">
                                <TextField
                                    name="firstName"
                                    // label="FirstName"
                                    type="text"
                                    variant="outlined"
                                    value={recordURL}
                                    onChange={(evt) => setRecordURL(evt.target.value)}
                                />
                                <FuseAnimate animation="transition.expandIn" delay={300}>
                                    <Fab
                                        variant="extended"
                                        size="small"
                                        color="primary"
                                        aria-label="add"
                                        onClick={copyURL}
                                    >
                                        Copy the Link the recording to share
                                    </Fab>
                                </FuseAnimate>
                            </div>
						</CardContent>
					</Card>
				</FuseAnimateGroup>
			</div>
            <Dialog
				open={open}
				onClose={() => setOpen(false)}
			>
				<AppBar position="static" style={{backgroundColor: copySuccess? "#09d261" : "#f44336"}}>
					<Toolbar className="flex w-full" style={{minHeight: "48px"}}>
						<Typography variant="subtitle1" color="inherit">
							{copySuccess ? "Success" : "Warning"}
						</Typography>
					</Toolbar>
				</AppBar>
				<DialogContent>
                    {
                        copySuccess ?
                        <h2 className="p-24 font-semibold">Recording Link was Copied exactly!</h2> :
                        <h2 className="p-24 font-semibold">Please enter recording Link</h2>
                    }
                    <div className="flex justify-end">
                        <Button
                        variant="contained"
                        color="primary"
                        style={{backgroundColor: "#61dafb", textTransform: "none"}}
                        onClick={() => setOpen(false)}
                        >
                            Close
                        </Button>
                    </div>
				</DialogContent>
			</Dialog>
		</div>
	);
}

export default PlayersLeader;
