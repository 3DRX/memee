import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import ThreeButtons from './pages/ThreeButtons';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HashRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/threebuttons" element={<ThreeButtons />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
