import './App.css';
import Header from './components/header';
import Main from './components/main_container';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Main />
    </Router>
  );
}

export default App;
