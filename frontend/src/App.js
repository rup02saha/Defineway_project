import react from 'react';
import Home from './Pages/Home'
import Login from './Pages/Login';
import Register from './Pages/Register';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App()
{
   return(
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Login />}> </Route>
            <Route path='/home/:name' element={<Home />}> </Route>
            <Route path='/register' element={<Register />}> </Route>

         </Routes>
      </BrowserRouter>
   )
}

export default App;