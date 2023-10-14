import { useRef, useState } from "react";
import { MessageInt } from './components/Model';
import Message from './components/Message';

const App = () => {
  const inputMessage: any = useRef<HTMLInputElement>(null)
  const [messageData, setMessageData] = useState<MessageInt[]>([])
  
  const handleSubmit  =  (e : any) => {
    e.preventDefault()

    if (inputMessage) {
      const mess: MessageInt = {
        id: Math.round(Math.random() * Date.now()),
        message: inputMessage.current.value,
        date : new Date(Date.now())
      }
      setMessageData((prevDate) => [...prevDate, mess])
    }

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
      <div id="messageList">{
        messageData?.map((mess) => (
          <Message mess={mess} messageData={messageData} setMessageData={
          setMessageData} />
          )) 
      }</div>
    </div>
  );
};

export default App;