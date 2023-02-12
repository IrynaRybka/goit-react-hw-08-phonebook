import { ContactsPage } from './Contacts/Contacts/Contacts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getUser } from 'redax/auth/auth.thunk';
import { Loader } from './Loader/Loader';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { Login } from './Login/Login';
import { Navigation } from './Navigation/Navigation';

export const App = () => {
  const isLoadingAuth = useSelector(state => state.auth.isLoading)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch]);

  return (
    <div>
      {isLoadingAuth && <Loader/>}
      <Navigation/>
      <Routes>
        <Route path="/" element={<h1>Save your contacts here</h1>}/>
        <Route path="/register" element={<RegisterForm/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
      {/* <ContactsPage /> */}
      <ToastContainer />
    </div>
  );
};
