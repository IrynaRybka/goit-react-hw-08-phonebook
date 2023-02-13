import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redax/auth/auth.thunk';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const userName = useSelector(state => state.auth.name);
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <p>Welcome 👋, {userName}!</p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
