import { useState } from "react";

export default function Q14() {
const [fruits, setF] = useState(["Apple", "Mango"]);

return ( <div> <h3>Q14</h3>
{fruits.map((f, i) => ( <div key={i}>
{f} <button onClick={() => setF(fruits.filter(x => x !== f))}>X</button> </div>
))} </div>
);
}
