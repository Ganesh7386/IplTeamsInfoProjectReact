import {BrowserRouter, Switch, Route} from 'react-router-dom'

import './App.css'
import Home from './components/Home/index'
import TeamMatches from './components/TeamMatches/index'

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/team-matches/:id" exact component={TeamMatches} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
