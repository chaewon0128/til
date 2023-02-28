import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './useEffect-Counter';
import './index.css';
import { LoginInput } from './useRef';
import Bank from './useReducer';
import LandingPage from './LandingPage';
import AttendanceBook from './AttendanceBook';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<AttendanceBook/>
  </React.StrictMode>
);

