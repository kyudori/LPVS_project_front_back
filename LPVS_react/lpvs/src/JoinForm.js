import React, { useState } from 'react';
import axios from 'axios';

const JoinForm = ({ handleBackToLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/join', { username, email, password });
      console.log(response.data);
      // Join 성공 시 필요한 동작을 수행합니다.
    } catch (error) {
      console.error(error);
      // Join 실패 시 에러를 처리합니다.
    }
  };

  const handleGoBack = () => {
    handleBackToLogin();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Username:
          <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Join</button>
      </form>
      <button onClick={handleGoBack}>Back to Login</button>
    </div>
  );
};

export default JoinForm;
