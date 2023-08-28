import React, { useState } from "react";
import { Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import firebase from "firebase/compat/app";

import { db, auth } from "../firebase";

function SendMessage() {
  const [message, setMessage] = useState("");

  function sendMessage(e) {
    e.preventDefault(); // Avoid default reload when submitted

    const { uid, photoURL } = auth.currentUser; // User info who are currently logged in

    // Submit: Add to Database
    db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(), // Generate timestamp when form is submitted
    });

    setMessage(""); // Reset Input after submitted
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="send-message">
          <Input
            type="text"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)} // store message input via setMessage()
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: 550,
              marginLeft: "5px",
              marginBottom: ".3px",
            }}
          />
          <SendIcon />
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
