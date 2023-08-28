import { useAuthState } from "react-firebase-hooks/auth";

import SignIn from "./components/SignIn";
import Line from "./components/Line";
import { auth } from "./firebase";

import "./App.css";

function App() {
  // Verify if user successfully logged in or not
  const [user] = useAuthState(auth);

  // If logged in then open Line component, otherwise open SignIn component.
  return <div>{user ? <Line /> : <SignIn />}</div>;
}

export default App;
