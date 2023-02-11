import { useSelector } from 'react-redux';

import { ContactsForm } from '../ContactsForm/ContactsForm';
import { ContactList } from '../ContactsList/ContactsList';
import { ContactFilter } from '../ContactsFilter/ContactsFilter';
import { Loader } from 'features/Loader/Loader';

export const ContactsPage = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const isLoading = useSelector(state => state.contacts.isLoading);

  return (
    <>
      {contacts && (
        <h2 style={{ textAlign: 'center' }}>
          You have {contacts.length} contacts
        </h2>
      )}
      <ContactFilter />
      <ContactsForm />
      {isLoading && <Loader />}
      <ContactList />
    </>
  );
};
