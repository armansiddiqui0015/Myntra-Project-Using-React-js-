import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App'
import AllBageItems from './component/AllBageItems'
import MyntraStore from './store'
import AllItems from './component/AllItems'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'react-redux'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    children: [
      {
        path: '/',
        element : <AllItems />
        
      },
      {
        path: 'bag',
        element : <AllBageItems />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={MyntraStore} >
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
