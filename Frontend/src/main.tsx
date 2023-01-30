import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import axios from 'axios'

import './main.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { PageNavsContextProvider } from './context/PageNavsContext'
import { ResourceContextProvider } from './components/crud/context/resource'

axios.defaults.baseURL = 'http://localhost:3000/server'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PageNavsContextProvider>
      <ResourceContextProvider>
        <App />
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </ResourceContextProvider>
    </PageNavsContextProvider>
  </React.StrictMode>
)
