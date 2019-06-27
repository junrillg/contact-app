import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import ContactTableHead from './ContactTableHead';
import ContactTableBody from './ContactTableBody';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

const ContactTable = ({ rows, onDelete, onEdit, onUpdate }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <ContactTableHead />
        <ContactTableBody
          rows={rows}
          onDelete={onDelete}
          onEdit={onEdit}
          onUpdate={onUpdate}
        />
      </Table>
    </Paper>
  );
};

export default ContactTable;
