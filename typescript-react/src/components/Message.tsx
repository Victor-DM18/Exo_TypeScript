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

  return (
    <div id="message-container">
      <div id="deleteId">
      <h5>id : {mess.id} </h5>
      <span id="delete">&#10008;</span>
      </div>
      <p>{mess.message}</p>
      <h5>date : {dateFormater(mess.date)}</h5>
    </div>
  );
};

export default Message;