import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError() as { statusText: string; message: string };
  console.error(error);

  return (
    <div id="error-page">
      <h1>Colab-Users </h1>
      <h2>Oops!</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
