import { useEffect, useState } from "react";

export default function Q12() {
const [data, setD] = useState(null);
const [load, setLoad] = useState(true);

useEffect(() => {
fetch("[https://dummyjson.com/products](https://dummyjson.com/products)")
.then(r => r.json())
.then(d => {
setD(d.products);
setLoad(false);
})
.catch(() => setLoad(false));
}, []);

return ( <div> <h3>Q12</h3>
{load ? "Loading..." : data && data[0]?.title} </div>
);
}
