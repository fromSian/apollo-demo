import { RouterProvider } from "react-router-dom";
import Catalog from "./components/catalog";
import Question from "./components/question";
import { router } from "./routes";

function App() {
  return (
    <div className="flex flex-col sm:flex-row h-screen w-screen">
      <Catalog />
      <div className="flex-1 flex">
        <RouterProvider router={router} />
      </div>
      <Question />
    </div>
  );
}

export default App;
