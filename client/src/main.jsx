import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ClerkProvider} from '@clerk/clerk-react';
const PUBLICKEY=import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if(!PUBLICKEY){
  throw new Error("public key missing");
  
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLICKEY}><App /></ClerkProvider>
    
  </StrictMode>,
)
