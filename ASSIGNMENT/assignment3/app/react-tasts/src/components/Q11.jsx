import { useEffect, useState } from "react";

export default function Q11() {
const [items, setItems] = useState([]);

useEffect(() => {
fetch("[https://dummyjson.com/products](https://dummyjson.com/products)")
.then(r => r.json())
.then(d => setItems(d.products));
}, []);

return ( <div> <h3>Q11</h3>
{items.slice(0, 3).map(p => ( <div key={p.id}>{p.title}</div>
))} </div>
);
}
