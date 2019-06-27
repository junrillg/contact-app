import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import * as ContactService from '../services/contactService';
import ContactTable from './ContactTable';
import {
  handleRemoveContact,
  handleEditContact,
  handleUpdateContact,
} from '../util/contactUtil';

const ContactHome = () => {
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
