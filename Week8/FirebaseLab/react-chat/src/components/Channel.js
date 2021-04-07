import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';

const Channel = ({ user = null, db = null }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        if (db) {

        }
    }, [db]);

    const handleOnChange = e => {
        setNewMessage(e.target.value);
    };

    return (
        <>
        <ul>
          {messages.map(message => (
            <li key={message.id}>{message.text}</li>
          ))}
        </ul>
         <form
         onSubmit={handleOnSubmit}>
         <input
           ref={inputRef}
           type="text"
           value={newMessage}
           onChange={handleOnChange}
           placeholder="Type your message here..."
         />
         <button
           type="submit"
           disabled={!newMessage}
         >
           Send
         </button>
       </form>
     </>
      );
    };
  
  export default Channel;