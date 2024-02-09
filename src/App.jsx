import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieDetail from './components/DetailPage/MovieDetail';
import Header from './components/General/Header';
import Footer from './components/General/Footer';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Homepage } from './components/Homepage/Homepage';

function App() {


  const router = createBrowserRouter([
    { path: "/", element: <Homepage /> },
    { path: "/movie/:id", element: <MovieDetail /> },
  ]);

  return (
    <>
      <Header />
      <RouterProvider router={ router } />
      <Footer />
      <SpeedInsights/>
    </>
  );
}

export default App;