import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { logIn } from "redax/auth/auth.thunk";


export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const setInput = e => {
        switch (e.target.name) {
          case 'email':
            setEmail(e.target.value);
            break;
          case 'password':
            setPassword(e.target.value);
            break;
          default:
            throw new Error('Unexpected value');
        }
      };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(logIn({ email, password }));
        setEmail('');
        setPassword('');
      };
      if (!isLoggedIn) {
    return (
        <form onSubmit={handleSubmit} autoComplete="off">
      <label >
        Email
        <input type="email" name="email" value={email} onChange={setInput} />
      </label>
      <label >
        Password
        <input type="password" name="password" value={password} onChange={setInput} />
      </label>
      <button type="submit">Log In</button>
    </form>
    )}
    else {
        return <Navigate to="/contacts" replace={true} />;
    }
}