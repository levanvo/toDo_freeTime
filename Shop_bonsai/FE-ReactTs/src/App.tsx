import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Page/Home';
import Admin from './Page/Admin';
import Web_home from './Page/Web_home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route index element={<Web_home />} />

        </Route>
        <Route path='admin' element={<Admin />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
