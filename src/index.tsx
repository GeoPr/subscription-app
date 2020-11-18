import React from 'react'
import './index.scss'
import { render } from 'react-dom'
import App from './assets/components/App'
import { Provider } from 'react-redux'
import { store } from './assets/redux/store'
import { ContextProvider } from './assets/context/ContextProvider'

render(
  <Provider store={store}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </Provider>,
  document.getElementById('root'),
)
