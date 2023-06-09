import React, { useState } from 'react';
import './App.css';
import homepage from './pages/homepage';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if ( currentPage === 'homepage') {
      return <homepage />;
    }
  }
  function App() {
    return (
      <div>
        <homepage />
      </div>

    );
  }
}

export default App;
