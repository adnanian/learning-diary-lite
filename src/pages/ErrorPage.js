import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <main>
      <h1 id="error-banner">An error occured when attempting to load the page. Please try again lter.</h1>
    </main>
  );
};

export default ErrorPage;