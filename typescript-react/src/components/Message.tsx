import { MessageInt } from "./Model";
import React from 'react';

type Props = {
  mess: MessageInt,
  messageData: MessageInt[],
  setMessageData :React.Dispatch<React.SetStateAction<MessageInt[]>>
}

const Message = ({mess, messageData, setMessageData} : Props ) => {
  return (
    <div className="message-container">
      <h4>{mess.id}</h4>
      <p>{mess.message}</p>
      <h5>{mess.date.toString()}</h5>
    </div>
  );
};

export default Message;