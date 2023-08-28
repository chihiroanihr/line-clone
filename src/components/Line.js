import React, { useEffect, useState } from "react";

import { db, auth } from "../firebase";
import SignOut from "./SignOut";
import SendMessage from "./SendMessage";

function Line() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data())); // docs: multiple data inside query
      });
  }, []);

  return (
    <div>
      <SignOut />
      <div className="messages">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
            <div
              key={id}
              className={
                // If you sending then className=".message .sent"
                // If you receiving (others sending) then className=".message .received"
                `message ${uid === auth.currentUser.uid ? "sent" : "received"}`
              }
            >
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
}

export default Line;
