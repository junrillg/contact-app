import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

/**
 * Displays table head
 */
const ContactTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell align="center">First Name</TableCell>
        <TableCell align="center">Last Name</TableCell>
        <TableCell align="center">Phone Numbers</TableCell>
        <TableCell align="center">Action</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default ContactTableHead;
