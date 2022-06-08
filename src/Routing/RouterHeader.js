import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from '../Elements/HeaderElement/About'
import Class from '../Elements/HeaderElement/Class';
import Teacher from '../Elements/HeaderElement/Teacher';

function Rout(){
    return(
        <div className="RoutAbout">
        <Router>
            <Routes>
              <Route path='ReactApp/About' element={<About/>} />
              <Route path='ReactApp/Teacher' element={<Teacher/>} />
              <Route path='ReactApp/Class' element={<Class/>} />
            </Routes>
          </Router>
      </div>
    )
}


export default Rout;