import logo from './logo.svg';
import './App.css';
import AddPage from './components/AddPage';
import SearchPage from './components/SearchPage';
import ViewPage from './components/ViewPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddPage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/view" element={<ViewPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;