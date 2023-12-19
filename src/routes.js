import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import NotesView from "./pages/NotesView";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/notes-view",
                element: <NotesView />
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