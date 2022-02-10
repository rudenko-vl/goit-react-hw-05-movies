import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from "./Navigation/Navigation";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import { Wrapper } from "./App.styled";
import HomePage from "./HomePage/HomePage";
import MoviesPage from "./MoviesPage/MoviesPage";

export const App = () => {
  return (
    <Suspense fallback={''}>
    <Wrapper>
      <GlobalStyle/>
      <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage/>}/>
      </Routes>
      </Wrapper>
      </Suspense>
  )
};
