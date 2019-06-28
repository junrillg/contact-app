import React, { useState } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ContactTableField from './ContactTableField';
import ContactTableFieldPhone from './ContactTableFieldPhone';
import ContactTableAction from './ContactTableAction';

/**
 * Display table row
 */
const useStyles = makeStyles(() => ({
  newRow: {
    backgroundColor: 'lightyellow',
  },
}));

const ContactTableRow = ({ row, onDelete, onEdit, onUpdate }) => {
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    phoneNumbers: [],
  });
  const classes = useStyles();
  const fieldProps = {
    row,
    contact,
    setContact,
  };

  const actionProps = {
    row,
    contact,
    onDelete,
    onEdit,
    onUpdate,
    setContact,
  };

  return (
    <TableRow
      key={row.id}
      className={classNames({ [classes.newRow]: !row.id })}
    >
      <TableCell component="th" scope="row">
        {row.id}
      </TableCell>
      <ContactTableField {...fieldProps} field="firstName" />
      <ContactTableField {...fieldProps} field="lastName" />
      <ContactTableFieldPhone {...fieldProps} />
      <ContactTableAction {...actionProps} />
    </TableRow>
  );
};

export default ContactTableRow;
