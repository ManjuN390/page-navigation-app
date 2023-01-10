import React from 'react';
import { Link } from 'react-router-dom';
  
function Second() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Second components</p>
  
        <Link to="/">go back</Link>
      </header>
    </div>
  );
}
  
export default Second;