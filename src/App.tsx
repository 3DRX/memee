import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import ThreeButtons from './pages/ThreeButtons';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/threebuttons" element={<ThreeButtons />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
