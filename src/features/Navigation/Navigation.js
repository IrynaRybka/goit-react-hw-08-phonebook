import { UserMenu } from 'features/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'


export const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <header className={css.header}>
      <NavLink to="/" className={css.header_home}>Home</NavLink>
      {!isLoggedIn && <NavLink to="/register" className={css.header_register}>Register</NavLink>}
      {!isLoggedIn && <NavLink to="/login" className={css.header_login}>Log In</NavLink>}
      {isLoggedIn && <NavLink to="/contacts" className={css.header_contacts}>Contacts</NavLink>}
      {isLoggedIn && <UserMenu />}
    </header>
  );
};
