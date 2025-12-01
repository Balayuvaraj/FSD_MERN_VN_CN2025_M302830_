import { useState } from "react";

export default function Q8() {
const products = [
{ name: "TV", cat: "Electronics" },
{ name: "Shirt", cat: "Clothes" }
];

const [c, setC] = useState("All");

return ( <div> <h3>Q8</h3>
<button onClick={() => setC("All")}>All</button>
<button onClick={() => setC("Electronics")}>Electronics</button>
<button onClick={() => setC("Clothes")}>Clothes</button>

```
  {products
    .filter(p => c === "All" || p.cat === c)
    .map((p, i) => <div key={i}>{p.name}</div>)}
</div>

);
}
