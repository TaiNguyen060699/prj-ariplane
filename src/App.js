import './App.scss';
import Home from './Pages/Home/Home';
import List from './Pages/List/List';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<List />} path='/list' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
