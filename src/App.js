import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
