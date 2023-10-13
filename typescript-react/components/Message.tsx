import { MessageInt } from "./Model";
import React from 'react';

type Props = {
  mess: MessageInt,
  messageData: MessageInt[],
  setMessageData :React.Dispatch<React.SetStateAction<MessageInt[]>>
}

const Message = ({mess, messageData, setMessageData} : Props ) => {
  return (
    <div>
    </div>
  );
};

export default Message;