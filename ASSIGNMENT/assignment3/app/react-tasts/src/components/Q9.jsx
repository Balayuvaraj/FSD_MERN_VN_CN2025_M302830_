import { useState } from "react";

export default function Q9() {
const list = ["Yuva", "Arun", "Priya"];
const [s, setS] = useState("");

return ( <div> <h3>Q9</h3>
<input onChange={(e) => setS(e.target.value)} />
{list
.filter(n => n.toLowerCase().includes(s.toLowerCase()))
.map((n, i) => <div key={i}>{n}</div>)} </div>
);
}
