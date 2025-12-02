import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/Home"
import StarRating from "./pages/StarRating"

const App = () => {
  const router = createBrowserRouter([
    {path: "/", Component: Home},
    {path: "/star-rating", Component: StarRating},
  ])

  return <RouterProvider router={router} />
}

export default App