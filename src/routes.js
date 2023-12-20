import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import ContentWishList from "./pages/ContentWishList";
import Notebook from "./pages/Notebook";

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
                path: "/content-wishlist",
                element: <ContentWishList />
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