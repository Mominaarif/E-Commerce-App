import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import local files
import Home from './pages/Home';
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/list" exact component={ProductList} />
        <Route path="/product" exact component={Product} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/cart" exact component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
