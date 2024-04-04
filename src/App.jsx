import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Profilepage from './pages/profilepage/profilepage.jsx';
import Page2 from './pages/page2/page2.jsx';

import Navbaresideeee from './pages/navbaresideeee/navbareside.jsx';
import Page1 from  './pages/page1/Page1.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"   element={<Page1 />} />
        <Route path="/history" element={<Page2 />} />
        <Route path="/profile" element={<Profilepage/>} />
        <Route path="/nav" element={<Navbaresideeee/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
