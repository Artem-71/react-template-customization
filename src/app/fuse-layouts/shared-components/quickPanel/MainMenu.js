import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { serverUrl } from '../../../httpCommon'

export default function MainMenu() {
  return (
    <div className="flex items-center justify-around w-full">
        <a href={serverUrl} style={{color: "#00CFFD"}}>Home</a>
        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
                <Typography component={'div'} variant={'body2'}>
                <Link component="button" {...bindTrigger(popupState)} style={{color: "#00CFFD"}}>Virtual Escape Games<ArrowDropDownRoundedIcon /></Link>
                <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}
                >
                    <Box>
                    <Typography component={`div`}>
                        <List>
                            <ListItem button>
                                <a href={`${serverUrl}lab-escape`} style={{color: "#00CFFD"}}><ListItemText primary="Lab Escape" /></a>
                            </ListItem>
                            <ListItem button>
                                <a href={`${serverUrl}castle-escape`} style={{color: "#00CFFD"}}><ListItemText primary="Castle Escape" /></a>
                            </ListItem>
                        </List>
                    </Typography>
                    </Box>
                </Popover>
                </Typography>
            )}
        </PopupState>
        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
                <Typography component={'div'} variant={'body2'}>
                <Link component="button" {...bindTrigger(popupState)} style={{color: "#00CFFD"}}>Practice Games<ArrowDropDownRoundedIcon /></Link>
                <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}
                >
                    <Box>
                    <Typography component={`div`}>
                        <List>
                            <ListItem button>
                                <a href={`${serverUrl}maze-escape`} style={{color: "#00CFFD"}}><ListItemText primary="Maze Escape" /></a>
                            </ListItem>
                            <ListItem button>
                                <a href={`${serverUrl}cube-escape`} style={{color: "#00CFFD"}}><ListItemText primary="Cube Escape" /></a>
                            </ListItem>
                            <ListItem button>
                                <a href={`${serverUrl}lost-found-escape`} style={{color: "#00CFFD"}}><ListItemText primary="Lost & Found Escape" /></a>
                            </ListItem>
                        </List>
                    </Typography>
                    </Box>
                </Popover>
                </Typography>
            )}
        </PopupState>
        <a href={`${serverUrl}to-do`} style={{color: "#00CFFD"}}>To do list before you play</a>
        <a href={`${serverUrl}faq`} style={{color: "#00CFFD"}}>FAQ</a>
    </div>
  );
}