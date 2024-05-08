import './App.css';
import Header from './shared/Header.js';
import Footer from './shared/Footer.js';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
