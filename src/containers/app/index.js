import React from 'react';
import { Route, Link } from 'react-router-dom'
import Navigation from 'react-toolbox/lib/navigation/Navigation'
import Home from '../home'
import About from '../about'

const routes = [
  { label:'Home', raised: true, href:'/', icon:'home' },
  { label:'About', raised: true, href:'/about-us', icon:'info' }
];

const App = () => (
  <div className="app">
    <header>
      <Navigation type='horizontal' routes={routes}/>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
