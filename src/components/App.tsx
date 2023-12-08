import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Counter } from '../features/Counter/Counter';
import { Weather } from '../features/Weather/Weather';
import { Auth } from '../features/Auth/Auth';
import { Nav } from './Nav/Nav';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route path="counter" element={<Counter initialCount={6} />} />
        <Route path="weather" element={<Weather />} />
        <Route path="login" element={<Auth />} />
        <Route path="register" element={<Auth />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

//default export
export default App;

// named export
export { App };
