import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "./components/common/loading";
import Index from "./pages";
import NotFound from "./pages/not-found";

const Companies = lazy(() => import("./pages/companies"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <NotFound />,
  },
  {
    path: "/companies",
    element: (
      <Suspense fallback={<Loading />}>
        <Companies />
      </Suspense>
    ),
  },
]);
