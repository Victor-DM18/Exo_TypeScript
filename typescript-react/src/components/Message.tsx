import { MessageInt } from "../model";
import React from 'react';

type Props = {
  mess: MessageInt,
  messageData: MessageInt[],
  setMessageData :React.Dispatch<React.SetStateAction<MessageInt[]>>
}

const Message = ({ mess, messageData, setMessageData }: Props) => {
  
  const dateFormater = (date : number) => {
    return new Date(date).toLocaleDateString("fr-FR", {day : "numeric", month: "long", year:"numeric"})
  }

  const handleDelete = () => {
    setMessageData(messageData.filter((e) => e.id !== mess.id))
  }

  return (
    <div className="message-container">
      <div id="deleteId">
      <h5>id : {mess.id} </h5>
      <span id="delete" onClick={handleDelete}>&#10008;</span>
      </div>
      <p>{mess.message}</p>
      <h6>date : {dateFormater(mess.date)}</h6>
    </div>
  );
};

export default Message;