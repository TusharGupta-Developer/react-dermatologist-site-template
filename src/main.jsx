import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './styles/breakpoints.css'
// import './index.css'
import './styles/variables.css';
import './styles/base.css';
import App from './App.jsx'
import './styles/breakpoints.css';
import AppWrapper from './components/common/AppWrapper.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper>
      <App />
    </AppWrapper>
  </StrictMode>,
)
