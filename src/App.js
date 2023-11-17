import './App.css';

import HomePage, { homeLoader } from './pages/Home';
import RootLayout from './pages/Root';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useFirstRender } from './hooks/useFirstRender';
import { Suspense, lazy, useEffect } from 'react';
import { useCookies } from 'react-cookie';
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
  const StorePage = lazy(() => import("./pages/Store"));

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
          element:
            <Suspense fallback={<Loader />}>
              <StorePage />
            </Suspense>,
          loader: () => import("./pages/Store").then(module => module.storeLoader()),
          children: [
            {
              path: 'page/:pageNumber',
              element:
                <Suspense fallback={<Loader />}>
                  <StorePage />
                </Suspense>,
            }
          ]
        },
        {
          path: 'coral',
          element:
            <Suspense fallback={<Loader />}>
              <StorePage />
            </Suspense>,
          loader: () => import("./pages/Store").then(module => module.storeByTypeLoader('coral')),
          children: [
            {
              path: 'page/:pageNumber',
              element:
                <Suspense fallback={<Loader />}>
                  <StorePage />
                </Suspense>,
            }
          ]
        },
        {
          path: 'decoration',
          element:
            <Suspense fallback={<Loader />}>
              <StorePage />
            </Suspense>,
          loader: () => import("./pages/Store").then(module => module.storeByTypeLoader('decoration')),
          children: [
            {
              path: 'page/:pageNumber',
              element:
                <Suspense fallback={<Loader />}>
                  <StorePage />
                </Suspense>,
            }
          ]
        },
        {
          path: 'fish',
          element:
            <Suspense fallback={<Loader />}>
              <StorePage />
            </Suspense>,
          loader: () => import("./pages/Store").then(module => module.storeByTypeLoader('fish')),
          children: [
            {
              path: 'page/:pageNumber',
              element: <Suspense fallback={<Loader />}>
                <StorePage />
              </Suspense>,
            }
          ]
        },
        {
          path: 'invertebrate',
          element:
            <Suspense fallback={<Loader />}>
              <StorePage />
            </Suspense>,
          loader: () => import("./pages/Store").then(module => module.storeByTypeLoader('invertebrate')),
          children: [
            {
              path: 'page/:pageNumber',
              element:
                <Suspense fallback={<Loader />}>
                  <StorePage />
                </Suspense>,
            }
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
