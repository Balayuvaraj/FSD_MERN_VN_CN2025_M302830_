import { useState } from "react";

export default function Q16() {
const [title, setT] = useState("");
const [body, setB] = useState("");
const [msg, setMsg] = useState("");

function send() {
fetch("[https://dummyjson.com/posts/add](https://dummyjson.com/posts/add)", {
method: "POST",
body: JSON.stringify({ title, body })
})
.then(r => r.json())
.then(() => setMsg("Added!"));
}

return ( <div> <h3>Q16</h3>
<input onChange={(e) => setT(e.target.value)} />
<input onChange={(e) => setB(e.target.value)} /> <button onClick={send}>Send</button> <p>{msg}</p> </div>
);
}
