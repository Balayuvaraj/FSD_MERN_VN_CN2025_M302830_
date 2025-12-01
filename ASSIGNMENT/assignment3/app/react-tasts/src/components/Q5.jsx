import { useState } from "react";

export default function Q5() {
const [result, setResult] = useState(null);

function submit(e) {
e.preventDefault();
setResult({
name: e.target.name.value,
email: e.target.email.value
});
}

return ( <div> <h3>Q5</h3> <form onSubmit={submit}> <input name="name" placeholder="Name" /> <input name="email" placeholder="Email" /> <button>Submit</button> </form>

```
  {result && <p>{result.name} - {result.email}</p>}
</div>


);
}
