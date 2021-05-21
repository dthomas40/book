import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import CreatePost from './components/CreatePost';
import Explore from './components/Explore';

function App() {
  return (
    <Router>
      <div>
        <h1>Book</h1>
        <Navbar />
          <Route exact path="/" component={Home}/>
          <Route path="/dashboard"  component={Dashboard}/>
          <Route path="/sign-in"  component={SignIn}/>
          <Route path="/sign-up"  component={SignUp}/>
          <Route path="/create-post"  component={CreatePost}/>
          <Route path="/explore"  component={Explore}/>
      </div>
    </Router>
  );
}

export default App;
