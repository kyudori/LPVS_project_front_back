import React from 'react';
import './App.css';
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* 로그인 폼 컴포넌트 */}
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
