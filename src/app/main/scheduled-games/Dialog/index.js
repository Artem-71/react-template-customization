import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import UserInfo from './table'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styled from 'styled-components';
import axios from 'axios';

const StyledIconButton = styled(IconButton)`
    position: absolute;
    top: 3px;
    right: 3px;
    color: white;
`;

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function CustomizedDialogs(props) {
    const { open, setOpen, selectedId } = props;
    const [gameDetail, setGameDetail] = useState({})

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if(selectedId !== "") {
            axios.post('/api/scheduled-games-app/scheduled-game', {id: selectedId}).then(res => {
                setGameDetail(res.data[0])
            });
        }
    }, [selectedId])

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} className="md-4">
        <AppBar position="static">
            <Toolbar className="flex w-full" style={{minHeight: "48px"}}>
                <Typography variant="subtitle1" color="inherit">
                Game Detail
                </Typography>
                <StyledIconButton aria-label="close" onClick={handleClose}>
                    <CloseIcon />
                </StyledIconButton>
            </Toolbar>
        </AppBar>
        
        <DialogContent dividers>
            <div className="mb-24">
                <h2 className="mb-10"><span className="font-bold">Scheduled Game Detail:</span>Marketing Tigers</h2>
                <p className="mb-4">
                    <span className="font-semibold">Game Date: </span><small className="mr-10">{gameDetail.date}</small>
                    <span className="font-semibold">Game Start Date: </span><small>{gameDetail.startingTime}</small>
                </p>
                <p>
                    <span className="font-semibold">Game Name: </span><small className="mr-10">{gameDetail.gameName}</small>
                    <span className="font-semibold">Game Stage: </span><small>{gameDetail.gameStage}</small>
                </p>
            </div>
            <div className="mb-24">
                <h2><span className="font-bold">Facilitator Name: </span>Faisal Shehab</h2>
            </div>
            <UserInfo />
            <Button variant="contained" color="primary" className="mr-24">Start the Game</Button>
            <Button variant="contained" color="primary" className="mr-24">join</Button>
            <a href="#"><Button variant="contained" color="primary" className="mr-24">Edit Game Detail Information</Button></a>
        </DialogContent>
      </Dialog>
    </div>
  );
}