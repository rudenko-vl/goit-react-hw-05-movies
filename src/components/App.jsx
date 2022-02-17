import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from "./Navigation/Navigation";
import Cast from "./Cast/Cast";
import Review from "./Review/Review";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import { Wrapper } from "./App.styled";

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));

export const App = () => {
  return (
    <Suspense fallback={''}>
    <Wrapper>
      <GlobalStyle/>
      <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </Wrapper>
      </Suspense>
  )
};
