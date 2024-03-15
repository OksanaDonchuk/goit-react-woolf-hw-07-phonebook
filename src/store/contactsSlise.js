import { createSlice } from '@reduxjs/toolkit';

const contactSlise = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact(state, { payload }) {
      state.contacts.push(payload);
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const contactsReducer = contactSlise.reducer;
export const { addContact, deleteContact } = contactSlise.actions;
