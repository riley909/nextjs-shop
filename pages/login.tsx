import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { LoginValue } from '../interface/users';

export const USER_KEY = 'login-info';

export default function Login() {
  const router = useRouter();
  const [loginValues, setLoginValues] = useState<LoginValue>({
    email: '',
    password: '',
  });
  const [errorText, setErrorText] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setLoginValues({ ...loginValues, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const loginEmail = loginValues.email;
    const loginPwd = loginValues.password;
    const loginUser = JSON.parse(localStorage.getItem(USER_KEY)!);

    if (!loginUser) {
      // 해당 아이디 없으면 새로 저장하고 로그인
      localStorage.setItem(USER_KEY, JSON.stringify(loginValues));
      router.push('/quiz');
    } else {
      // 있으면 회원정보 체크
      if (loginEmail === loginUser.email && loginPwd === loginUser.password) {
        router.push('/quiz');
      } else {
        setErrorText(`회원정보를 다시 확인해 주세요.`);
      }
    }
  };

  return (
    <div>
      <div>LOG IN</div>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          value={loginValues.email}
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
