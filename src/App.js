
import './App.css';
import About from './components/About'
import Contact from './components/Contact'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <About/>
    <Contact/>
    </div>
  );
}

export default App;
