import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:3000/entries')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEntries(data);
      });
  }, []);


  const [entries, setEntries] = useState([]);

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
