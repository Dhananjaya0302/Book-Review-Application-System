// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

import BookList from './Components/BookList';
import SearchBar from './Components/SearchBar';
import Login from './Components/Login';
function App() {

  return (
    
        <BrowserRouter>
          <Routes>
            <Route  path="" element={ <BookList />} />
            <Route path="/login" element={<Login />} />
            {/* <Navigate to="/home"/> */}
          </Routes>
        </BrowserRouter>
      );
    }

export default App;
