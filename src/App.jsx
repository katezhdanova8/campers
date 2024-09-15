import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navigation from './components/Header/Header';
import Loader from './components/Loader/Loader';
import css from './App.module.css';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const FavouritesPage = lazy(() => import('./pages/FavouritesPage/FavouritesPage'));
const CamperPage = lazy(() => import('./pages/CamperPage/CamperPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <div className={css.App}>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          />
          <Route
            path='/catalog'
            element={<CatalogPage />}
          />
          <Route
            path='/catalog/:id'
            element={<CamperPage />}
          />
          <Route
            path='/favourites'
            element={<FavouritesPage />}
          />
          <Route
            path='*'
            element={<NotFoundPage />}
          />
        </Routes>
      </Suspense>
      <Toaster />
    </div>
  )
}

export default App
