import React from 'react';
import logo from './logo.svg';
import { TodoList } from './pages/TodoList';
import './App.css';
import ErrorBoundary from './components/Errors';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <ErrorBoundary>
          <TodoList />
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
