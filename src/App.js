
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Coures from './components/Coures'
import LearnGit from './components/LearnGit'

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul className="navbar_list">
            <li className="navbar_item">
              <Link className="navbar_link" to='/'>Home</Link>
            </li>
            <li className="navbar_item">
              <Link className="navbar_link" to='/about'>About</Link>
            </li>
            <li className="navbar_item">
              <Link className="navbar_link" to='/contact'>Contact</Link>
            </li>
            <li className="navbar_item">
              <Link className="navbar_link" to='/courses'>Coures</Link>
            </li>
            <li className="navbar_item">
              <Link className="navbar_link" to='/learn-git'>LearnGit</Link>
            </li>
          </ul>
        </nav>
        <hr/>

        <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route path="/about">
              <About/>
          </Route>
          <Route path="/contact">
              <Contact/>
          </Route>
          <Route path="/courses">
              <Coures/>
          </Route>
          <Route path='/learn-git'>
              <LearnGit/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
