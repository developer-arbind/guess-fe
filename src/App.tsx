import { useState } from "react";
import "./App.css";
const image = `Last time saying leave your long distance.
I will promise, I WILL say you everything what's in my heart tomorrow.
I just respect your thoughts, feelings, emotions everything, that's why I am not saying anything which cause you trouble.
Just listen your heart and do whatever you want.
If you left your Ld. I will just spoke everything towards, you what you expecting me to say.
And hope you also wanna say what I am expecting.
Before anything, I will just be sure, if I am hurting you with any perspective just let it me know.
I should never do that shi* thing again.
Okay bye. Reply in the WhatsApp... Take you time as much as possible. I am too tired, going to sleep laa..`;
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
            main bahar hogaya, usko likho nepali main. btw, (w)
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
            here: {image}
            <button onClick={() => setMessage("")}>Try again</button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
