import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Tables({
    users
}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell >Email</TableCell>
            <TableCell align="right">Actions</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          { users.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" style={{ display:"flex",alignItems:"center"  }}>
                  <Avatar src={
                      row.avatar
                  }></Avatar>
                {row.first_name +" "+ row.last_name}
              </TableCell>
              <TableCell >{row.email}</TableCell>
              <TableCell align="right" > <IconButton aria-label="delete">
        <EditIcon />
      </IconButton>
      <IconButton aria-label="edit">
        <DeleteIcon />
      </IconButton>
       </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}