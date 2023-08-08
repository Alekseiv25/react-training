import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './pages/Layout';
import { MainPage } from './pages/MainPage';
import { FavouritesPage } from './pages/FavouritesPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path='favourites' element={<FavouritesPage />} />
      </Route>
    </Routes>
  )
}

export default App;
