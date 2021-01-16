
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import React from 'react';

const UserInfo = () => {
    return (
        <>
            <h2 className="font-bold">List of Players: </h2>
            <div style={{ height: 200, width: '100%' }}>
                <Table stickyHeader className="md:w-1/2 w-full">
                    <TableHead>
                        <TableRow>
                            <TableCell>FirstName</TableCell>
                            <TableCell>LastName</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow hover>
                            <TableCell>Estes</TableCell>
                            <TableCell>Stevens</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell>Hoper</TableCell>
                            <TableCell>MacGuffin</TableCell>
                        </TableRow> 	
                    </TableBody>
                </Table>
            </div>
        </>
    )
}

export default UserInfo