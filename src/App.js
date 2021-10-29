import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import ColorPalette from "./containers/ColorPalette";
import Lyrics from "./containers/Lyrics";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/color">
            <ColorPalette />
          </Route>

          <Route path="/lyrics">
            <Lyrics />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
