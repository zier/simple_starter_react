import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './store'

import Counter from './Counter/containers'
import Home from './Home'

const history = syncHistoryWithStore(browserHistory, store)

const App = () => (
    <Provider store={store}>
        <div>
            <Router history={history}>
                <Route path="/" component={Home} />
                <Route path="/counter" component={Counter} />
            </Router>
        </div>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
