import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { LoginValue } from '../interface/users';

export const USER_KEY = 'login-info';

export default function Login() {
  const router = useRouter();
  const [loginValues, setLoginValues] = useState<LoginValue>({
    ID: '',
    password: '',
  });
  const [errorText, setErrorText] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setLoginValues({ ...loginValues, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {};

  return (
    <div>
      <div>LOG IN</div>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="ID"
          name="ID"
          value={loginValues.ID}
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="Password"
          name="password"
          value={loginValues.password}
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
      <div className="error-text">{errorText}</div>
    </div>
  );
}
