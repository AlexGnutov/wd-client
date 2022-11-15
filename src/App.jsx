import React from 'react';
import './App.css';
import './css/normalize.css';
import './css/styles.scss';

import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';

function App() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}

export default App;
