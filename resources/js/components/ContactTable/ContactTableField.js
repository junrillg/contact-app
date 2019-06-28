import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TableCell from '@material-ui/core/TableCell';

/**
 * Display the specific field in the table
 */
const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const ContactTableField = ({ row, contact, setContact, field }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {row.isOnEdit && (
        <TableCell align="center">
          <TextField
            id="standard-bare"
            className={classes.textField}
            value={contact[field]}
            onChange={e => setContact({ ...contact, [field]: e.target.value })}
            margin="normal"
            inputProps={{ 'aria-label': 'bare' }}
          />
        </TableCell>
      )}
      {!row.isOnEdit && <TableCell align="center">{row[field]}</TableCell>}
    </React.Fragment>
  );
};

export default ContactTableField;
