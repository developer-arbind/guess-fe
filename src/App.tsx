import { useState } from "react";
import "./App.css";
const image = "https://i.imgur.com/E18xHf1.jpg";
function App() {
  const [name, setname] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const onCheck = async () => {
    if (name === "महिला") {
      setMessage("$");
    } else {
      alert("galat hai!");
    }
  };
  return (
    <>
      <div>
        {!message ? (
          <>
            Hey, maine nepali class main kuchh toh ek nepali word likha jise
            main bahar hogaya, usko likho nepali main. btw, ek picture hai not
            text now.
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
            Your Image here: <img src={image} alt="sam-altman" />
            <button onClick={() => setMessage("")}>Try again</button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
