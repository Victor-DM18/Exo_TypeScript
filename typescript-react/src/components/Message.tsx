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
    <div className="message-container">
      <h4>{mess.id} </h4>
      <p>{mess.message}</p>
      <h5>{dateFormater(mess.date) }</h5>
    </div>
  );
};

export default Message;