import { useState, useEffect } from "react";

export default function Q18() {
const [data, setD] = useState([]);
const [page, setPage] = useState(0);

useEffect(() => {
fetch("[https://dummyjson.com/users?limit=20](https://dummyjson.com/users?limit=20)")
.then(r => r.json())
.then(d => setD(d.users));
}, []);

const start = page * 5;

return ( <div> <h3>Q18</h3>

```
  {data.slice(start, start + 5).map(u => (
    <div key={u.id}>{u.firstName}</div>
  ))}

  <button disabled={page === 0} onClick={() => setPage(page - 1)}>Prev</button>
  <button disabled={start + 5 >= data.length} onClick={() => setPage(page + 1)}>Next</button>
</div>


);
}
