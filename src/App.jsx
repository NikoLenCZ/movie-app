import './App.css';
import { createHashRouter, RouterProvider } from "react-router-dom";
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const router = createHashRouter([
    { path: "/", element: <MovieList /> },
    { path: "/movie/:id", element: <MovieDetail /> },
  ]);

  return (
    <>
      <Header />
      <RouterProvider router={ router } />
      <Footer />
    </>
  );
}

export default App;