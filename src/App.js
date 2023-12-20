import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:3000/notebooks')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setNotebooks(data);
      });
  }, []);


  const [notebooks, setNotebooks] = useState([]);

  const userOutletContext = {

    // add notebooks using the spread operator
    addNotebook: (notebookToAdd) => setNotebooks([...notebooks, notebookToAdd]),

    // update notebooks using the map method
    updateNotebook: (notebookToUpdate) => {
      setNotebooks(
        notebooks.map((notebook) => {
          return notebook.id === notebookToUpdate.id ? notebookToUpdate : notebook;
        })
      );
    },

    // remove notebooks using the filter method
    removeNotebook: (notebookToRemove) => setNotebooks(notebooks.filter((notebook) => notebook.id !== notebookToRemove.id))
    


  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet context={entries} onAddNotebook={userOutletContext.addNotebook} />
    </>
  );
}

export default App;
