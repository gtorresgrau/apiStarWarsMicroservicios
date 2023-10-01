import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav.jsx'
import Landing from './Components/Landing.jsx';
import Home from './Components/Home.jsx';
import CreateActivity from './Components/CreateActivity.jsx';
import Detail from './Components/Detail.jsx';
import Error404 from './Components/Error404';

function App() {
  return (
    <BrowserRouter>
    <header className="App">
      <Switch>
        <Route exact path="/Nav" component={Nav} />
        <Route exact path="/Character/:id" component={Detail}/>
        <Route exact path="/Film/:id" component={Detail}/>
        <Route exact path="/Planet/:id" component={Detail}/>
        <Route exact path="/CreateCharacter" component={CreateActivity} />
        <Route exact path="/CreateFilm" component={CreateActivity} />
        <Route exact path="/CreatePlanet" component={CreateActivity} />
        <Route exact path="/Character" component={Home} />
        <Route exact path="/Film" component={Home} />
        <Route exact path="/PLanet" component={Home} />
        <Route exact path="/" component={Landing}/>
        <Route path="*" component={Error404}/>
      </Switch>
    </header>
    </BrowserRouter>
  );
}

export default App;

