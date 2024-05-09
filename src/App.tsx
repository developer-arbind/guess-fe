import { useState } from "react";
import "./App.css";
const image = `Last time saying leave your long distance bf. (
  I closely understand your all messages, tried to solve each one....
  if you really had fallin for him. just don't read next lines. stop here and let's continue how we currently going on. I just don't want to scare or hurt you. if you are doing great with him. just ignore me. I am not who to broke that or you should listen me what I am saying. just goahead if you faked something.
)
------------------------------------------------------------------------------






I will promise, I WILL say you everything what's in my heart tomorrow.
I just respect your thoughts, feelings, emotions everything, that's why I am not saying anything which cause you trouble.
Just listen your heart and do whatever you want.
If you left your Ld. I will just spoke everything towards, you what you expecting me to say.
And hope you also wanna say what I am expecting.
Before anything, I will just be sure, if I am hurting you with any perspective just let it me know.
I should never do that shi* thing again.
Okay bye. Reply in the WhatsApp... Take your time as much as possible. I am too tired, going to sleep laa..btw do you like you me too?
as an INTJ-T, if you have done some research on it, you will surely know this is so abnormal for us, so if i am doing this, just mean you are something special I am valuing of..we did everything as planned or expected, just don't say or do anything which is out of syllabus of us. now if you are here. then surely you just being peer-pressured to alive as his gf. nothing more on that. so good to leave him now (I will eventually help you in it, just see how HIGH iqs work in reallife) he will not get hurt, it's my promise. 
`;
function App() {
  const [name, setname] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const onCheck = async () => {
    if (name === "144") {
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
            What is my IQ?
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
