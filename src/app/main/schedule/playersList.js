import React, { useState } from 'react'
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import FuseAnimate from '@fuse/core/FuseAnimate';
import Fab from '@material-ui/core/Fab';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
// import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Grow from '@material-ui/core/Grow';
import TextField from '@material-ui/core/TextField';
import FuseUtils from '@fuse/utils/FuseUtils';

function PlayersList(props) {
    const { form, setForm, title, selectedId } = props
    const [isTrue, setIsTrue] = useState(false)
    const [userData, setUserData] = useState({id: '', firstName: '', lastName: '',avatar: ''})

    const userDataSubmit = (evt) => {
        evt.preventDefault();
        if((userData.firstName === "" || userData.lastName === "")
            || (title === "spectators" && form['spectator'].data.length>1)
            || (title === "faciltators" && form['faciltator'].data.length>0)
        ) return;
        const _userData = {id: FuseUtils.generateGUID(), firstName: userData.firstName, lastName: userData.lastName, avatar: userData.avatar}
        let _formData = {...form[selectedId]}
        let anyData = []
        for(const item of _formData['data']) {
            anyData.push(item)
        }
        anyData.push(_userData)
        _formData['data'] = anyData
        setForm({...form, [selectedId]: _formData})
        setUserData({id:'', firstName: '', lastName: '', avatar: ''})
    }

    const playerDataChange = (evt) => {
        setUserData({...userData, [evt.target.name]: evt.target.value})
    }

    const sessionKeyValue = (evt) => {
        const _selectItem = {...form[`${selectedId}`], itemKey: !form[selectedId].itemKey}
        setForm({...form, [selectedId]: _selectItem})
    }

    return (
        <Card className="mb-10">
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                         <Button
                            variant="contained"
                            color="primary"
                            name={selectedId}
                            onClick={sessionKeyValue}
                         >
                         {`Check ${title} key Available`}
                        </Button>
                    <div>
                        <div className="flex">
                            <Icon style={{ color: "#61dafb" }}>toggle_on</Icon>
                            <Typography className="ml-4">You have an available Key to use</Typography>
                        </div>
                        {
                            form[selectedId].itemKey ?
                        <div className="flex" >
                            <Icon style={{ color: "#9f9f9f" }}>toggle_off</Icon>
                            <div className="ml-4">
                                <div>You don't have available {title} to schedule a game.</div>
                                <div >please go to <a href="https://example.com">https://example.com</a> to purchase one</div>
                            </div>
                        </div> : ''}
                    </div>
                </div>
                <div className="flex">
                    <FuseAnimate animation="transition.expandIn" delay={500}>
                        <Fab
                            color="secondary"
                            aria-label="add"
                            size="small"
                            onClick={() => setIsTrue(!isTrue)}
                        >
                            <Icon>add</Icon>
                        </Fab>
                    </FuseAnimate>
                    <div className="flex items-center ml-4">
                        {title === "game session" ? "Add player" : `Add ${title}`}
                        {title === "spectators" && "(2 Maximum)"}
                        {title === "faciltators" && "(1 Maximum)"}
                    </div>
                </div>
                {
                    isTrue ?
                <Grow in={isTrue}>
                    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-center mt-8">
                        <TextField
                            name="firstName"
                            label="FirstName"
                            type="text"
                            variant="outlined"
                            value={userData.firstName}
                            onChange={playerDataChange}
                        />
                        <TextField
                            name="lastName"
                            label="LastName"
                            type="text"
                            variant="outlined"
                            value={userData.lastName}
                            onChange={playerDataChange}
                        />
                        <Fab
                        variant="extended"
                        size="small"
                        color="primary"
                        aria-label="add"
                        onClick={userDataSubmit}
                        >
                            Save
                        </Fab>
                    </div>
                </Grow> : '' }
                <Table className="md:w-1/2 mt-4" stickyHeader>
                    <TableHead>
                        <TableRow>
                            {/* <TableCell></TableCell> */}
                            <TableCell>FirstName</TableCell>
                            <TableCell>LastName</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            form && form[selectedId] && form[selectedId].data.length > 0 ? form[selectedId].data.map((item, i) => (
                                <TableRow hover key={i}>
                                    {/* <TableCell><Avatar className="mx-8" alt={item.firstName} src={item.avatar} /></TableCell> */}
                                    <TableCell>{item.firstName}</TableCell>
                                    <TableCell>{item.lastName}</TableCell>
                                </TableRow> 
                            ))
                        
                        : <TableRow><TableCell>There is no Data</TableCell></TableRow>}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

export default PlayersList;