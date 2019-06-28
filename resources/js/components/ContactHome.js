import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import * as ContactService from '../services/contactService';
import ContactTable from './ContactTable/ContactTable';
import {
  handleRemoveContact,
  handleEditContact,
  handleUpdateContact,
  handleCreateContact,
} from '../util/contactUtil';

/**
 * Main contact component
 */
const useStyles = makeStyles(theme => ({
  margin: {
    marginTop: 20,
  },
}));

const ContactHome = () => {
  const classes = useStyles();
  const [rows, setRows] = useState([]);

  // initial contact data
  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await ContactService.getContacts();
        setRows(response.data);
      } catch (e) {}
    };
    fetchContact();
  }, []);

  return (
    <Container maxWidth="lg">
      <Fab
        size="small"
        color="primary"
        className={classes.margin}
        onClick={() => handleCreateContact(setRows)(rows)}
      >
        <AddIcon />
      </Fab>

      <ContactTable
        rows={rows}
        onDelete={handleRemoveContact(setRows)}
        onEdit={handleEditContact(setRows)}
        onUpdate={handleUpdateContact(setRows)}
      />
    </Container>
  );
};

export default ContactHome;
