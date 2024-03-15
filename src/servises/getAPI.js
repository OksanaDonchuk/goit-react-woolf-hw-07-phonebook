import axios from 'axios';

axios.defaults.baseURL = 'https://65ef5f54ead08fa78a505b6b.mockapi.io';

export const getApiContacts = async () => {
  const data = await axios.get('/contacts');
  return data.data;
};

export const addApiContacts = async contact => {
  const data = await axios.post('/contacts', contact);
  return data.data;
};

export const delApiContacts = async contactId => {
  const data = await axios.delete('/contacts', contactId);
  return data.data;
};
