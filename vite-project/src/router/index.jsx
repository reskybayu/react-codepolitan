import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Index";
import About from "../pages/About";
import Blog from "../pages/blogs"
import Post from "../pages/blogs/_id";
import RootLayout from "../layouts/RootLayout";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <RootLayout />,
        children : [
            {
                path : "/",
                element : <HomePage />,
            },
            {
                path : "/blog",
                element : <Blog />,
            },
            {
                path : "/blog/:id",
                element : <Post />,
            },
            {
                path : "/about",
                element : <About />,
            }
        ]
    },
])