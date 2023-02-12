import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redax/auth/auth.thunk';

export const UserMenu = () => {
    const userName = useSelector(state => state.auth.name);
    const dispatch = useDispatch();

    return (
        <div>
            <p>Welcome, {userName}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
        </div>
    )
}