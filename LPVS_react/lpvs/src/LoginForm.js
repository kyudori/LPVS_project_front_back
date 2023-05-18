import React, { useState } from 'react';
import axios from 'axios';
import JoinForm from './JoinForm';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showJoinForm, setShowJoinForm] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleJoinClick = () => {
    setShowJoinForm(true);
  };

  const handleBackToLogin = () => {
    setShowJoinForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/login', { username, password })
      .then((response) => {
        // 로그인 성공 시 처리
        localStorage.setItem('token', response.data.token);
        // 이후 필요한 동작을 수행합니다.
      })
      .catch((error) => {
        // 로그인 실패 시 처리
        console.error(error);
      });
  };

  return (
    <div>
      {showJoinForm ? (
        <JoinForm handleBackToLogin={handleBackToLogin} />
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit">Login</button>
          <button onClick={handleJoinClick}>Join</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
