import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'

import App from './containers/App'
import store from './store'

const app = window.document.getElementById('app');

render(
    <Provider store={store}>
        <App />
    </Provider>,
    app);
