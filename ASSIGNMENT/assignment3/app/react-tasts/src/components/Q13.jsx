import { useState } from "react";

export default function Q13() {
const [fruits, setF] = useState(["Apple"]);
const [newF, setNewF] = useState("");

return ( <div> <h3>Q13</h3>
<input onChange={(e) => setNewF(e.target.value)} />
<button onClick={() => setF([...fruits, newF])}>Add</button>

```
  {fruits.map((f, i) => <div key={i}>{f}</div>)}
</div>


);
}
