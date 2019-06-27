import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  chip: {
    margin: 5,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const ContactTableRow = ({ row, onDelete, onEdit, onUpdate }) => {
  const classes = useStyles();
  const [contact, setContact] = useState({});
  return (
    <TableRow key={row.id}>
      <TableCell component="th" scope="row">
        {row.id}
      </TableCell>
      {/** First Name field  */}
      {row.isOnEdit && (
        <TableCell align="center">
          <TextField
            id="standard-bare"
            className={classes.textField}
            value={contact.firstName}
            onChange={e =>
              setContact({ ...contact, firstName: e.target.value })
            }
            margin="normal"
            inputProps={{ 'aria-label': 'bare' }}
          />
        </TableCell>
      )}
      {!row.isOnEdit && <TableCell align="center">{row.firstName}</TableCell>}

      {/** Last Name field  */}
      {row.isOnEdit && (
        <TableCell align="center">
          <TextField
            id="standard-bare"
            className={classes.textField}
            value={contact.lastName}
            onChange={e => setContact({ ...contact, lastName: e.target.value })}
            margin="normal"
            inputProps={{ 'aria-label': 'bare' }}
          />
        </TableCell>
      )}
      {!row.isOnEdit && <TableCell align="center">{row.lastName}</TableCell>}

      {/** Phone NUmber field  */}
      <TableCell align="center">
        {row.phoneNumbers.map((value, index) => (
          <Chip
            key={index}
            avatar={<Avatar>P</Avatar>}
            label={value.number}
            clickable
            className={classes.chip}
            color="primary"
          />
        ))}
      </TableCell>
      <TableCell align="center">
        {!row.isOnEdit && (
          <React.Fragment>
            <Button
              onClick={() => {
                onEdit(row.id);
                setContact(row);
              }}
            >
              <CreateIcon color="primary" />
            </Button>
            <Button onClick={() => onDelete(row.id)}>
              <DeleteIcon color="error" />
            </Button>
          </React.Fragment>
        )}

        {row.isOnEdit && (
          <Button onClick={() => onUpdate(contact, row.id)}>
            <SaveIcon color="primary" />
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
};

export default ContactTableRow;
