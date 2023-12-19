import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';

function App() {
  

  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet context={entries}/>
    </>
  );
}

export default App;
