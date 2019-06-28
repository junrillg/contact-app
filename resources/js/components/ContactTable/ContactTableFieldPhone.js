import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
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
  listItem: {
    justifyContent: 'center',
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
              <ListItem key={index} className={classes.listItem}>
                <Fab size="small" color="primary">
                  <PhoneIcon />
                </Fab>
                <TextField
                  type="number"
                  className={classes.textField}
                  value={value.number}
                  onChange={e =>
                    setContact({
                      ...contact,
                      phoneNumbers: contact.phoneNumbers.map(
                        (value, phoneNumberIndex) => {
                          if (index === phoneNumberIndex)
                            return {
                              ...value,
                              number: parseInt(e.target.value, 10),
                            };
                          return value;
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
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              setContact({
                ...contact,
                phoneNumbers: [...contact.phoneNumbers, { number: 0 }],
              })
            }
          >
            Add
          </Button>
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
