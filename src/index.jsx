import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import App from './components/App/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store, { persistor } from './redux/store/store'
import 'antd/dist/antd.min.css'
import { PersistGate } from 'redux-persist/integration/react'
import Spinner from './ui/Spinner'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
)
