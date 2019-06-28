import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PhoneIcon from '@material-ui/icons/Phone';
import Fab from '@material-ui/core/Fab';

/**
 * Display phone number field on table
 */
const useStyles = makeStyles(() => ({
  chip: {
    margin: 5,
  },
  textField: {
    marginLeft: 10,
  },
}));

const ContactTableFieldPhone = ({ row, contact, setContact }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {row.isOnEdit && (
        <TableCell align="center">
          <List component="nav">
            {contact.phoneNumbers.map((value, index) => (
              <ListItem key={index}>
                <Fab size="small" color="primary">
                  <PhoneIcon />
                </Fab>
                <TextField
                  id="standard-bare"
                  className={classes.textField}
                  value={value.number}
                  onChange={e =>
                    setContact({
                      ...contact,
                      phoneNumbers: contact.phoneNumbers.map(
                        (value, phoneNumberIndex) => {
                          if (index === phoneNumberIndex) e.target.value;
                          console.log(value);
                          return value.number;
                        }
                      ),
                    })
                  }
                  margin="normal"
                  inputProps={{ 'aria-label': 'bare' }}
                />
              </ListItem>
            ))}
          </List>
        </TableCell>
      )}
      {!row.isOnEdit && (
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
      )}
    </React.Fragment>
  );
};

export default ContactTableFieldPhone;
