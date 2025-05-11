
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import { AuthLayout, HostLayout, Layout } from './components'
import { Archive, Landing, Login, Note, NotFound, Signup, Trash } from './pages'

function App() {
  const router = createBrowserRouter([
    {
      Component: Layout,
      children: [
        { path: "/", Component: Landing },
        {
          Component: HostLayout,
          children: [
            { path: "/note", Component: Note },
            { path: "/archive", Component: Archive },
            { path: "/trash", Component: Trash },
          ]
        },
        {
          Component: AuthLayout,
          children: [
            { path: "login", Component: Login },
            { path: "signup", Component: Signup },
          ]
        },
        { path: "*", Component: NotFound },
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
