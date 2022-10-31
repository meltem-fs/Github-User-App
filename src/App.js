import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Followers from './components/Followers';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Followers/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
