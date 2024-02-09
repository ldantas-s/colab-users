const App = () => {
  return (
    <>
      <h1>ColabUsers</h1>
      <ul>
        <li data-testid="user-card">
          <p data-testid="user-card_name">Porfirio Verduzco</p>
          <p data-testid="user-card_state">Durango, MX</p>
        </li>
        <li data-testid="user-card">
          <p data-testid="user-card_name">Felicia Morris</p>
          <p data-testid="user-card_state">Victoria, AU</p>
        </li>
      </ul>
    </>
  );
};

export default App;
