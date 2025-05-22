

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Home />
          <Footer/>
        </>
      ),
    },
    {
      path: '/blog',
      element: (
        <>
        <ScrollToTop/>
          <Navbar />
          
          <Blog />
          <Footer/>
        </>
      ),
    },
    {
      path: '*',
      element: (
        <>
          <Navbar />
          <Home />
          <Footer/>
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;