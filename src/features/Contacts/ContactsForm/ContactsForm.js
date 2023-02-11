import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addContactsAsyncThunk } from 'features/store/contacts.thunk';

import css from './ContactsForm.module.css';

export const ContactsForm = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('');

  const onAddContact = event => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name: newName,
      phone: number,
    };
    if (contacts.some(contact => contact.name === newContact.name)) {
      toast.warn(`${newContact.name} has in your list! Try another name`, {
        position: 'top-right',
        autoClose: 3000,
        theme: 'colored',
      });
      return false;
    }
    dispatch(addContactsAsyncThunk(newContact));
    reset();
  };

  const reset = () => {
    setNewName('');
    setNumber('');
  };

  return (
    <div className={css.container_form}>
      <h2 className={css.tegline_form}>Add new contact</h2>
      <form
        className={css.submit_form}
        autoComplete="off"
        onSubmit={onAddContact}
      >
        <label htmlFor="name">
          Name
          <input
          className={css.form_input}
          placeholder='Type 2-20 symbols'
            minLength={2}
            maxLength={20}
            value={newName}
            onChange={e => setNewName(e.target.value)}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="number">
          Number
          <input
          placeholder='Type 6-20 numbers'
           className={css.form_input}
            minLength={6}
            maxLength={20}
            value={number}
            onChange={e => setNumber(e.target.value)}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button  className={css.form_button} type="submit">Add contact</button>
      </form>
    </div>
  );
};
