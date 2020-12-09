import React from 'react'
import './index.scss'
import { render } from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { ContextProvider } from './context/ContextProvider'

render(
  <Provider store={store}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </Provider>,
  document.getElementById('root'),
)
