import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}></RouterProvider>
  </StrictMode>,
)
