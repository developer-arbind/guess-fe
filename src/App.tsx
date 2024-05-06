import { useState } from "react";
import "./App.css";

function App() {
  const [name, setname] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [code, setCode] = useState<number>(0);
  let [reply, setreply] = useState<string>("");
  const onCheck = async () => {
    const response = await fetch("https://guess-93sv.onrender.com/" + name);
    const data = await response.json();
    setMessage(data.message);
    setCode(data.code);
  };
  const sendReply = async () => {
    const response = await fetch("https://guess-93sv.onrender.com/reply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: reply,
      }),
    });
    if (response.ok) {
      alert("sent successfully!");
    }
  };
  return (
    <>
      <div>
        {!message ? (
          <>
            Hey, maine nepali class main kuchh toh ek nepali word likha jise
            main bahar hogaya, usko likho nepali main.
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
            {code === 444 && (
              <div>
                your reply here:
                <textarea
                  rows={20}
                  cols={40}
                  id="reply"
                  onChange={(event) => setreply(event.target.value)}
                  value={reply}
                />
                <button onClick={sendReply}>SEND!</button>
              </div>
            )}
            <button onClick={() => setMessage("")}>Try again</button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
