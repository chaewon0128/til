import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './useEffect-Counter';
import './index.css';
import { LoginInput } from './useRef';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<LoginInput />
  </React.StrictMode>
);

