
const App = () => {
  return (
    <div>
      <h1>Poster un message</h1>
      <form>
        <input type="text" placeholder="Entrez un message" id="inputMessage" />
        <input type="submit" value="Envoyer"></input>
      </form>
      <h1>Liste des messages</h1>
      <div></div>
    </div>
  );
};

export default App;