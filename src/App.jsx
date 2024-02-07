import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieList from './components/Homepage/MovieList';
import MovieDetail from './components/DetailPage/MovieDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieSearch from './components/Homepage/MovieSearch';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { useState } from "react";

function App() {
  const [query, setQuery] = useState('');

  const router = createBrowserRouter([
    { path: "/", element: <MovieList /> },
    { path: "/movie/:id", element: <MovieDetail /> },
  ]);

  return (
    <>
      <Header />
      <MovieSearch query={ query } setQuery={ setQuery } />
      <RouterProvider router={ router } />
      <Footer />
      <SpeedInsights/>
    </>
  );
}

export default App;