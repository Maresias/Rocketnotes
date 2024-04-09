import React from 'react'
import ReactDOM from 'react-dom/client'
import {Details} from './pages/Details/'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <themeProvider>

      <Details/>
      
    </themeProvider>

  </React.StrictMode>,
)
