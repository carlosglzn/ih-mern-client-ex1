import './App.css';
import Proyectos from './components/Proyectos';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Mascotas from './components/Mascotas';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import ProyectoState from './context/proyectos/ProyectoState';
import MascotaState from './context/mascotas/MascotaState';

function App() {
  return (
    <>

    <ProyectoState>
    <MascotaState>
      <Router>
        <Switch>
          <Route exact path="/mascotas" component={Mascotas}></Route>
          <Route exact path="/proyectos" component={Proyectos}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </MascotaState>
    </ProyectoState>
    </>
  );
}

export default App;
