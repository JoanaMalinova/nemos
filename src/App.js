import HomePage, { homeLoader } from './pages/Home';
import ShoppingCartPage from './pages/ShoppingCart';
import StorePage, { storeByTypeLoader, storeLoader } from './pages/Store';
import DetailPage, { detailLoader } from './pages/Detail';
import RootLayout from './pages/Root';
import SearchPage, { searchLoader } from './pages/Search';
import ErrorPage from './pages/Error';
import NoMatchesFound, { noMatchesLoader } from './pages/NoMatchesFound';

import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';


function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage />, loader: homeLoader },
        {
          path: 'store',
          element: <StorePage />,
          loader: storeLoader,
          children: [
            { path: 'page/:pageNumber', element: <StorePage /> }
          ]
        },
        {
          path: 'coral',
          element: <StorePage />,
          loader: () => { return storeByTypeLoader('coral') },
          children: [
            { path: 'page/:pageNumber', element: <StorePage /> }
          ]
        },
        {
          path: 'decoration',
          element: < StorePage />,
          loader: () => { return storeByTypeLoader('decoration') },
          children: [
            { path: 'page/:pageNumber', element: <StorePage /> }
          ]
        },
        {
          path: 'fish',
          element: <StorePage />,
          loader: () => { return storeByTypeLoader('fish') },
          children: [
            { path: 'page/:pageNumber', element: <StorePage /> }
          ]
        },
        {
          path: 'invertebrate',
          element: <StorePage />,
          loader: () => { return storeByTypeLoader('invertebrate') },
          children: [
            { path: 'page/:pageNumber', element: <StorePage /> }
          ]
        },
        { path: ':storeName/:itemId', element: <DetailPage />, loader: detailLoader },
        { path: 'cart', element: <ShoppingCartPage /> },
        { path: 'search/:searchQuery', element: <SearchPage />, loader: searchLoader },
        { path: 'search/:searchQuery/no-matches', element: <NoMatchesFound />, loader: noMatchesLoader }
      ]
    }
  ]);

  return (
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
