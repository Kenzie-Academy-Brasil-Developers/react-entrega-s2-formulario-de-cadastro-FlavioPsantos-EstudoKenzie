import { useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './Pages/Home';
import Logado from './Pages/Logado';
import LoginPage from './Pages/Login';
function App() {
const [isLoged, setLoged] = useState(false)

const handleLogOut = ()=>{
  setLoged(false)
}
  return (
    <div className="App">
      <Switch>
      <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/login'>
          <LoginPage setLoged={setLoged}/>
        </Route>
        <Route path='/logado/:user'>
          <Logado isLoged={isLoged} handleLogOut={handleLogOut}/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
