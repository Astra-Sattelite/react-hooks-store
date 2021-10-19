import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./assets/components/Header";
import Store from "./assets/components/Store";

const StoreApp = () => {

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Store />
          </Route>
          <Route exact path="/cart">
            <div>404</div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default StoreApp
