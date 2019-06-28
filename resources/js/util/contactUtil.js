import * as ContactService from '../services/contactService';

/**
 * handle deleting contact data
 */
export const handleRemoveContact = setRows => id => {
  const contactDelete = async () => {
    try {
      await ContactService.deleteContact(id);
      const response = await ContactService.getContacts();
      setRows(response.data);
    } catch (e) {}
  };
  contactDelete();
};

/**
 * handle displaying the edit field for contact
 */
export const handleEditContact = setRows => (rows, id) => {
  const updatedRows = rows.map(value => ({
    ...value,
    isOnEdit: value.id === id,
  }));
  setRows(updatedRows);
};

/**
 * handle updating contact data
 */
export const handleUpdateContact = setRows => ({ data, id, isClose }) => {
  const contactUpdate = async () => {
    try {
      if (id && !isClose) await ContactService.updateContact(data, id);
      if (!id && !isClose) await ContactService.createContact(data);
      const response = await ContactService.getContacts();
      setRows(response.data);
    } catch (e) {}
  };
  contactUpdate();
};

/**
 * handle updating contact data
 */
export const handleCreateContact = setRows => rows => {
  setRows([
    ...rows,
    { firstName: '', lastName: '', phoneNumbers: [], isOnEdit: true },
  ]);
};
