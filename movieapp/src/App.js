import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Detail from "./router/Detail";
import Home from './router/Home';

function App() {
  return <Router>
            <Switch>
              <Route path="/hello">
              <h1>Hello world!</h1>
              </Route>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/movie/:id">
                <Detail/>
              </Route>
            </Switch>
        </Router>
  ;
}

export default App;
