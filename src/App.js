import './App.css';
import Home from './pages/Home';
import CreateAirdrop from './pages/CreateAirdrop';
import ClaimAirdrop from './pages/ClaimAirdrop';
import Clawback from './pages/Clawback'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/create' Component={CreateAirdrop} />
        <Route path='/claim' Component={ClaimAirdrop} />
        <Route path='/clawback' Component={Clawback} />
      </Routes>
     </Router>

    </div>
  );
}

export default App;
