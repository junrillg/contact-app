import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import ContactTableRow from './ContactTableRow';

/**
 * Displays the table body
 *
 */
const ContactTableBody = ({ rows, onDelete, onEdit, onUpdate }) => {
  return (
    <TableBody>
      {rows.map((row, index) => (
        <ContactTableRow
          key={index}
          row={row}
          onDelete={onDelete}
          onEdit={id => onEdit(rows, id)}
          onUpdate={onUpdate}
        />
      ))}
    </TableBody>
  );
};

export default ContactTableBody;
