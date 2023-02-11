import { ContactListItem } from '../ContactsListItem/ContactsListItem';
import css from './ContactsList.module.css';

export const ContactList = () => {
  return (
    <ul className={css.contact_list}>
      <ContactListItem />
    </ul>
  );
};
