import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Index";
import About from "../pages/About";
import Blog from "../pages/blogs"
import Post from "../pages/blogs/_id";
import RootLayout from "../layouts/RootLayout";
import { post, postId } from "../api/loaders";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <RootLayout />,
        errorElement : <ErrorPage/>,
        children : [
            {
                path : "/",
                element : <HomePage />,
            },
            {
                path : "/blog",
                element : <Blog />,
                loader : post
            },
            {
                path : "/blog/:id",
                element : <Post />,
                loader : postId
            },
            {
                path : "/about",
                element : <About />,
            }
        ]
    },
])