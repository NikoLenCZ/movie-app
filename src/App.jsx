import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MovieDetail from './components/DetailPage/MovieDetail';
import Header from './components/General/Header';
import Footer from './components/General/Footer';
import { Homepage } from './components/Homepage/Homepage';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Homepage /> },
    { path: '/movie/:id', element: <MovieDetail /> },
  ]);

  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
