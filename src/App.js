//#region app prior to transitions
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import Index from "./pages/landing/index";
import RootLayout from "./components/RootLayout";

const Features = lazy(() => import("./pages/landing/Features"));
const Pricing = lazy(() => import("./pages/other/Pricing"));
const FAQ = lazy(() => import("./pages/landing/FAQ"));
const ContactUs = lazy(() => import("./pages/landing/ContactUs"));
const PageNotFound = lazy(() => import("./pages/error/PageNotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: (
      <Suspense fallback={<p>loading...</p>}>
        <PageNotFound />
      </Suspense>
    ),
    children: [
      { index: true, element: <Index /> },

      {
        path: "features",
        element: <Features />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "faqs",
        element: <FAQ />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;

//#endregion
