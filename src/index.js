import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculator from './components/calculator.js';

// Render the Calculator to the Web page.
/* ReactDOM.render(<Calculator />, document.getElementById('root')); */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Calculator />);