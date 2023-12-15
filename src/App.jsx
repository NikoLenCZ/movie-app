import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { inject  } from '@vercel/analytics';


function App() {

  const router = createBrowserRouter([
    { path: "/", element: <MovieList /> },
    { path: "/movie/:id", element: <MovieDetail /> },
  ]);

  return (
    <>
      <Header />
      <RouterProvider router={ router } />
      <Footer />
      <Analytics />
      <SpeedInsights/>
    </>
  );
}

export default App;

inject();