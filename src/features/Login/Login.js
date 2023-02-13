import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { logIn } from "redax/auth/auth.thunk";
import css from './Login.module.css';


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
        <form className={css.form}  onSubmit={handleSubmit} autoComplete="off">
      <label className={css.input_box}>
        Email:
        <input className={css.input} type="email" name="email" value={email} onChange={setInput} />
      </label>
      <label className={css.input_box}>
        Password:
        <input className={css.input} type="password" name="password" value={password} onChange={setInput} />
      </label>
      <button className={css.button} type="submit">Log In</button>
    </form>
    )}
    else {
        return <Navigate to="/contacts" replace={true} />;
    }
}