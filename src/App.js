import './App.css';

import HomePage, { homeLoader } from './pages/Home';
import ShoppingCartPage from './pages/ShoppingCart';
import StorePage, { storeByTypeLoader, storeLoader } from './pages/Store';
import DetailPage, { detailLoader } from './pages/Detail';
import RootLayout from './pages/Root';
import SearchPage, { searchLoader } from './pages/Search';
import ErrorPage from './pages/Error';
import NoMatchesFound, { noMatchesLoader } from './pages/NoMatchesFound';
import LoginPage, { loginAction } from './pages/Login';
import RegisterPage, { registerAction } from './pages/Register';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import EmailResetPage from './pages/EmailReset';

import { useFirstRender } from './hooks/useFirstRender';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import TextUs from './components/special/text us/TextUs';

function App() {

  const isFirstRender = useFirstRender();
  const [cookies, setCookie] = useCookies(["cart"]);

  useEffect(() => {

    if (isFirstRender) {

      if (!cookies.cart) {
        setCookie("cart", [])
      }
    }

  })

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
        { path: 'search/:searchQuery/no-matches', element: <NoMatchesFound />, loader: noMatchesLoader },
        { path: 'login', element: <LoginPage />, action: loginAction },
        { path: '/register', element: <RegisterPage />, action: registerAction },
        { path: '/reset-email', element: <EmailResetPage /> }
      ]
    }
  ]);

  return (
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
