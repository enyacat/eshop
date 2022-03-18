import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route></Route>
        <Route
          path='/checkout'
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        ></Route>
        <Route
          path='/'
          element={
            <>
              <Header />
              <Home />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
