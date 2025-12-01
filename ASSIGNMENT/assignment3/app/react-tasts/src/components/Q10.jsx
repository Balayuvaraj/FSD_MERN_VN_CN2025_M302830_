export default function Q10() {
const data = [{ name: "Mobile" }, { name: "Fan" }];

return ( <div> <h3>Q10</h3>
{data.map((d, i) => <div key={i}>{d.name}</div>)} </div>
);
}
