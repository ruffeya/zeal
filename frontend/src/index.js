import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from "react-redux"
import thunkMiddleware from "redux-thunk"
import { createStore, applyMiddleware } from "redux"
//import { hot } from "react-hot-loader"
import Home from "./Containers/Home"
import Recipe from "./Containers/Recipe"
import reducers from "./reducers"

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

const WrappedHome = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Home />} />
        <Route path="/recipes/:id" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)

// TODO: figure out how to use router with hot module
//const HotHome = hot(module)(WrappedHome)

ReactDOM.render(<WrappedHome />, document.getElementById("home"))
