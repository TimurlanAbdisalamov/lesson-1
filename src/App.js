
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Header from './Header';
import GoBackButton from './GoBackButton';
import './styles.css';  

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/user/:id" element={<Page3 />} />
        <Route path="/goback" element={<GoBackButton />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
