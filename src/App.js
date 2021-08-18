import "./App.css";
import Signin from "./Signin";
import Nav from "./Nav";
import Home from "./Home";
import Register from "./Register";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Nav />
          <div className="App">
            <Route path="/" component={Home} exact />
            <Route path="/signin" component={Signin} exact />
            <Route path="/register" component={Register} exact />
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
