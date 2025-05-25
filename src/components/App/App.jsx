import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import HomePage from '../../pages/HomePage';
import RootLayout from '../../components/RootLayout';
import NotFountPage from '../../pages/NotFountPage';

const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage'));
const MovieCast = lazy(() => import('../../components/MovieCast'));
const MovieReviews = lazy(() => import('../../components/MovieReviews'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<RootLayout/>}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFountPage/>} />
      </Routes>
    </Suspense>
  );
}

export default App;
