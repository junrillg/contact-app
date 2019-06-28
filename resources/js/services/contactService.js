import request from '../lib/request';
import { CONTACTS_API_PATH } from '../constants/apiPaths';

// retrieve contacts data
export const getContacts = () =>
  request.get(CONTACTS_API_PATH).then(({ data }) => data);

// create new contact data
export const createContact = data => request.post(CONTACTS_API_PATH, data);

// update existing contact data
export const updateContact = (data, id) =>
  request.put(`${CONTACTS_API_PATH}/${id}`, data);

// delete existing contact data
export const deleteContact = id => request.delete(`${CONTACTS_API_PATH}/${id}`);
