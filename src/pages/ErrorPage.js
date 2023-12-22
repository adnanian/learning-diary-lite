import { Link, useRouteError } from "react-router-dom";

// Error page if a fake route is navigated to by accident.
function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <main>
      <h1 id="error-banner">An error occured when attempting to load the page. Please try again lter.</h1>
      <Link to="/">Go Home</Link>
    </main>
  );
};

export default ErrorPage;