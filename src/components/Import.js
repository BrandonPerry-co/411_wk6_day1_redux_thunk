import React from 'react'

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const options = [
  'Delete',
  
];

const ITEM_HEIGHT = 10;



const Import = (props) => {
    // fill out this component

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
      setAnchorEl(null);
    };


    return (
      <Container>
        <Button variant="contained" color="primary" onClick={props.fetchMakes}>
        Import
      </Button>
      <h2>Count: {props.makes.length}</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Makes</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((make) => {
            return (
                <TableRow key={make.MakeId}>
                <TableCell>{make.MakeId}</TableCell>
                <TableCell>{make.MakeName}</TableCell>
                <TableCell>
                <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
                </TableCell>
              </TableRow>
            )
              })}
        </TableBody>
      </Table>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'delete'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>

      </Container>
    )
}

export default Import