import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Post from "./pages/Post/Post";
import CreatePost from "./pages/CreatePost/CreatePost";
import './style.scss'
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import Category from "./pages/Category/Category";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/posts/:id',
        element: <Post />
      },
      {
        path: '/create',
        element: <CreatePost />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/category',
        element: <Category />
      },
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
]);


function App() {
  return (
    <div className="app">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
