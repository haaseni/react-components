import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './components/home'
import CalendarInputForm from './components/calendarInputForm'
import InfiniteScrollExample from './components/infiniteScrollExample'

function App() {  
  return ( 
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/calendar" component={CalendarInputForm} />
        <Route path="/infinite" component={InfiniteScrollExample} />
      </Switch>
    </Router>
  )
}

export default App