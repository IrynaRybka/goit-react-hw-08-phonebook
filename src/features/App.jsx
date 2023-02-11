import { ContactsPage } from './Contacts/Contacts/Contacts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <div>
      <ContactsPage />
      <ToastContainer />
    </div>
  );
};
