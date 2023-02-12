import { UserMenu } from 'features/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return (
        <header>
            <NavLink to = '/'>
            Home
            </NavLink>
            {!isLoggedIn && ( <NavLink to = '/register'>Register</NavLink>)}
            {!isLoggedIn && (<NavLink to='/login'>Log In</NavLink>)}
            {isLoggedIn && (<NavLink to='/contacts'>Contacts</NavLink>)}
            {isLoggedIn && <UserMenu/>}
        </header>
    )
}