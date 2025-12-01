import { useState } from "react";

export default function Q15() {
const [p, setP] = useState({ name: "", email: "", phone: "" });

return ( <div> <h3>Q15</h3>
<input onChange={(e) => setP({ ...p, name: e.target.value })} />
<input onChange={(e) => setP({ ...p, email: e.target.value })} />
<input onChange={(e) => setP({ ...p, phone: e.target.value })} />

```
  <p>{p.name} - {p.email} - {p.phone}</p>
</div>


);
}
