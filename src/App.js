import './style/App.css';
import Rout from './Routing/RouterHeader';
import RoutH from './Routing/RoutHome';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Rout/>

      <Router>
          <Routes>
            <Route path='ReactApp/' element={<RoutH/>} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;
