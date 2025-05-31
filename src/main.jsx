import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

const enforceViewport = () => {
  const meta = document.querySelector('meta[name="viewport"]');
  if (meta && window.visualViewport) {
    meta.content = `width=${window.visualViewport.width}, initial-scale=1`;
  }
};

window.addEventListener('resize', enforceViewport);
window.addEventListener('load', enforceViewport);
