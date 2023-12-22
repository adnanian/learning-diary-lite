import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Notebook from "./pages/Notebook";
import LearningWishList from "./pages/LearningWishList";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                children: [
                    {
                        path: "/notebook/:id",
                        element: <Notebook />
                    }
                ]
            },
            {
                path: "/learning-wishlist",
                element: <LearningWishList />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    }
];


// Test wether export {routes} works.
export default routes;