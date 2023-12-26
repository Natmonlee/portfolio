import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import Clock from './components/clock/clock';

function Widgets() {
  return (
    <div className="widget-container">
      <Clock/>      
    </div>
  );
}

ReactDOM.render(<Widgets />, document.getElementById('widgets'));

export default Widgets;