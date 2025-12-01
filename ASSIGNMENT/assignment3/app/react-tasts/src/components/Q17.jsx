import { useState, useEffect } from "react";

export default function Q17() {
const [u, setU] = useState({});

useEffect(() => {
fetch("[https://dummyjson.com/users/1](https://dummyjson.com/users/1)")
.then(r => r.json())
.then(d => setU(d));
}, []);

return ( <div> <h3>Q17</h3>
<input value={u.firstName || ""} readOnly /> </div>
);
}
