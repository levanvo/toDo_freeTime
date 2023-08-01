import './App.css'
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from './Page/Home';
import Admin from './Page/Admin';
import Web_home from './Page/Web_home';

function App() {
  const dispatch = useDispatch();
  const { dataPr } = useSelector((item: any) => item.getDataPr);
  console.log(dataPr);


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route index element={<Web_home/>}/>

        </Route>
        <Route path='admin' element={<Admin />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
