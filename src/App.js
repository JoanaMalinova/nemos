import './App.css';

import HomePage, { homeLoader } from './pages/Home';
import RootLayout from './pages/Root';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useFirstRender } from './hooks/useFirstRender';
import { Suspense, lazy, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import StorePage, { storeLoader, storeByTypeLoader } from './pages/Store';
import Loader from './components/special/loader/Loader';

function App() {

  const isFirstRender = useFirstRender();
  const [cookies, setCookie] = useCookies(["cart"]);

  useEffect(() => {

    if (isFirstRender) {

      if (!cookies.cart) {
        setCookie("cart", [])
      }
    }

  });

  const DetailPage = lazy(() => import("./pages/Detail"));
  const SearchPage = lazy(() => import("./pages/Search"));
  const NoMatchesFound = lazy(() => import("./pages/NoMatchesFound"));
  const ShoppingCartPage = lazy(() => import("./pages/ShoppingCart"));
  const EmailResetPage = lazy(() => import("./pages/EmailReset"));
  const LoginPage = lazy(() => import("./pages/Login"));
  const RegisterPage = lazy(() => import("./pages/Register"));
  const ErrorPage = lazy(() => import("./pages/Error"));

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement:
        <Suspense fallback={<Loader />}>
          <ErrorPage />
        </Suspense>,
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
        {
          path: ':storeName/:itemId',
          element:
            <Suspense fallback={<Loader />}>
              <DetailPage />
            </Suspense>,
          loader: ({ params }) => import("./pages/Detail").then(module => module.detailLoader({ params }))
        },
        {
          path: 'cart',
          element:
            <Suspense fallback={<Loader />}>
              < ShoppingCartPage />
            </Suspense>,
        },
        {
          path: 'search/:searchQuery',
          element:
            <Suspense fallback={<Loader />}>
              <SearchPage />
            </Suspense>,
          loader: ({ params }) => import("./pages/Search").then(module => module.searchLoader({ params })),
        },
        {
          path: 'search/:searchQuery/no-matches',
          element:
            <Suspense fallback={<Loader />}>
              <NoMatchesFound />
            </Suspense>,
          loader: () => import("./pages/NoMatchesFound").then(module => module.noMatchesLoader())
        },
        {
          path: 'login',
          element:
            <Suspense fallback={<Loader />}>
              <LoginPage />
            </Suspense>,
          action: ({ request }) => import("./pages/Login").then(module => module.loginAction({ request }))
        },
        {
          path: 'register',
          element:
            <Suspense fallback={<Loader />}>
              <RegisterPage />
            </Suspense>,
          action: ({ request }) => import("./pages/Register").then(module => module.registerAction({ request }))
        },
        {
          path: 'reset-email',
          element:
            <Suspense fallback={<Loader />}>
              <EmailResetPage />
            </Suspense>
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
