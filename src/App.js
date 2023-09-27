import HomePage, { homeLoader } from './pages/Home';
import ShoppingCartPage from './pages/ShoppingCart';
import StorePage, { storeByTypeLoader, storeLoader } from './pages/Store';
import DetailPage, { detailLoader } from './pages/Detail';
import RootLayout from './pages/Root';
import SearchPage, { searchLoader } from './pages/Search';

import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/Error';


function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage />, loader: homeLoader },
        { path: 'store', element: <StorePage />, loader: storeLoader },
        { path: 'coral', element: <StorePage />, loader: () => { return storeByTypeLoader('coral') } },
        { path: 'decoration', element: < StorePage />, loader: () => { return storeByTypeLoader('decoration') } },
        { path: 'fish', element: <StorePage />, loader: () => { return storeByTypeLoader('fish') } },
        { path: 'invertebrate', element: <StorePage />, loader: () => { return storeByTypeLoader('invertebrate') } },
        { path: ':storeName/:itemId', element: <DetailPage />, loader: detailLoader },
        { path: 'cart', element: <ShoppingCartPage /> },
        { path: 'search/:searchQuery', element: <SearchPage />, loader: searchLoader }
      ]
    }
  ]);

  return (
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
