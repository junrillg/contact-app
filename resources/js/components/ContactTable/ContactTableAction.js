import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';

/**
 * Display action options for the table
 */
const ContactTableAction = ({
  row,
  contact,
  onDelete,
  onEdit,
  onUpdate,
  setContact,
}) => {
  return (
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
        <React.Fragment>
          <Button onClick={() => onUpdate({ data: contact, id: row.id })}>
            <SaveIcon color="primary" />
          </Button>
          <Button onClick={() => onUpdate({ isClose: true })}>
            <CloseIcon color="error" />
          </Button>
        </React.Fragment>
      )}
    </TableCell>
  );
};

export default ContactTableAction;
