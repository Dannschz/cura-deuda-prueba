import { Route, Router, Switch } from 'wouter'
import Home from './pages/Home'
import PokemonDetail from './pages/PokemonDetail'
import store from './redux/store'
import { Provider } from 'react-redux'
import Pokedex from './pages/Pokedex'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/pokemon/:name' component={PokemonDetail} />
          <Route path='/pokedex' component={Pokedex} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
