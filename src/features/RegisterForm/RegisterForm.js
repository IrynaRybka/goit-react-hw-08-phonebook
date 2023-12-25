import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { register } from 'redax/auth/auth.thunk';
import css from './RegisterForm.module.css';
import {DebounceInput} from 'react-debounce-input';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    setName('');
    setEmail('');
    setPassword('');
  };

  console.log(name, email, password)

  if (!isLoggedIn) {

    return (
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.input_box}>
          <span className={css.name}>Name:</span>
          <DebounceInput
            className={css.input}
            type="text"
            name="name"
            debounceTimeout={600}
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label className={css.input_box}>
          <span className={css.email}>Email:</span>
          <DebounceInput
            className={css.input}
            type="email"
            name="email"
            debounceTimeout={600}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label className={css.input_box}>
          Password:
          <DebounceInput
            className={css.input}
            type="password"
            name="password"
            debounceTimeout={600}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button className={css.button} type="submit">
          Register
        </button>
      </form>
    );
  } else {
    return <Navigate to="/contacts" replace={true} />;
  }
};
