import React from 'react';
import { ToastContainer } from 'react-toastify';
import Router from './routes';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

function App() {
  return (
    <div>
      <Router/>
      <ToastContainer autoClose={3000}/>
    </div>
  );
}

export default App;
