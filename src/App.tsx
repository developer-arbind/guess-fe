import { useState } from "react";
import "./App.css";

function App() {
  const [name, setname] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const onCheck = async () => {
    const response = await fetch("http://localhost:8000/" + name);
    const data = await response.json();
    setMessage(data.message);
  };
  return (
    <>
      <div>
        {!message ? (
          <>
            Hey, Enter the smarttest person from our class, his/her first name
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setname(event.target.value)}
            />
            <button onClick={onCheck}>Check your result</button>
          </>
        ) : (
          <div>
            Your Message: {message} or try again if failed
            <button onClick={() => setMessage("")}>Try again</button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
