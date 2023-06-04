import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './routes'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './themes/defaultTheme'
import { GlobalStyle } from './Global'
import { BrowserRouter } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from './hook/auth'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <GlobalStyle />
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  </ThemeProvider>,
)
