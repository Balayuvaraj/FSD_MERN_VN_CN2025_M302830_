import { useState } from "react";

export default function Q4() {
const [text, setText] = useState("");

return ( <div> <h3>Q4</h3>
<input onChange={(e) => setText(e.target.value)} /> <p>{text}</p> </div>
);
}
