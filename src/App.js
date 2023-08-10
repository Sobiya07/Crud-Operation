import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import PersonList from './PersonList';
import PerCreate from './PerCreate';
import PerUpdate from './PerUpdate';
import PerView from './PerView';



function App() {
  return (
    <div className="App">
     <h1 className='m-3'>React crud operations</h1>
     <BrowserRouter>
  <Routes>
    <Route path='/' element={<PersonList/>}>   </Route>
    <Route path='/person/create' element={<PerCreate/>}>   </Route>
    <Route path='/person/view/:setid' element={<PerView/>}>   </Route>
    <Route path='/person/update/:setid' element={<PerUpdate/>}>
    </Route>
  </Routes>
  </BrowserRouter>
    </div>
  );


}

export default App;
