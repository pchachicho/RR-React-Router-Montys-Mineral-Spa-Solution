import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Packages from "./components/Packages";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function App() {
  const packages = [
    "Activate your Crystals",
    "Monkey Meditation",
    "Soak in the Hotsprings",
    "Hypnotherapy",
    "Mineral Bath",
  ];

  return (
    <div className="App">
      <Router>
        <Container>
          <Nav defaultActiveKey="/home" justify variant="tabs" fill>
            <Nav.Item>
              <Nav.Link href="/">
                <Link to="/">Home</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={"aboutPage"}>
                <Link to="/about">About Us</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={"packagesPage"}>
                <Link to="/packages">Packages</Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
        <div className="display">
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route
            path="/packages"
            render={() => <Packages packages={packages} />}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
