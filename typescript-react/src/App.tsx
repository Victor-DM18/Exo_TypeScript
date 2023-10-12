import { useRef } from "react";

const App = () => {
  const inputMessage : any = useRef<HTMLInputElement>(null)
  
  const handleSubmit  =  (e : any) => {
    e.preventDefault()

   inputMessage.current.value=""
  }

  return (
    <div>
      <h1>Poster un message</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Entrez un message" id="inputMessage" ref={inputMessage} />
        <input type="submit" value="Envoyer"></input>
      </form>
      <h1>Liste des messages</h1>
      <div></div>
    </div>
  );
};

export default App;