import './App.css';
import Home from './pages/Home';
import CreateAirdrop from './components/CreateAirdrop';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/create' Component={CreateAirdrop} />
      </Routes>
     </Router>

    </div>
  );
}

export default App;
