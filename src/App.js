import HomePage from './pages/Home';
import ShoppingCartPage from './pages/ShoppingCart';
import StorePage from './pages/Store';
import CoralPage from './pages/Coral';
import FishPage from './pages/Fish';
import InvertebratePage from './pages/Invertebrate';
import DetailPage from './pages/Detail';
import RootLayout from './pages/Root';
import DecorationPage from './pages/Decoration'

import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {


  const routes = createBrowserRouter([
    {
      path: '/', element: <RootLayout />, children: [
        { index: true, element: <HomePage /> },
        { path: 'store', element: <StorePage /> },
        { path: 'coral', element: <CoralPage /> },
        { path: 'decoration', element: < DecorationPage /> },
        { path: 'fish', element: <FishPage /> },
        { path: 'invertebrate', element: <InvertebratePage /> },
        { path: ':storeName/:itemId', element: <DetailPage /> },
        { path: 'cart', element: <ShoppingCartPage /> }
      ]
    }
  ]);

  return (
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
