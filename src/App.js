import { Router, Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import Favourites from './pages/favourites/Favourites';
import Basket from './pages/basket/Basket';


function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/favourites" element={<Favourites />}/>
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;