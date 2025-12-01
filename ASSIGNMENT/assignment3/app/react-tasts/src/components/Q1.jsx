export default function Q1() {
const data = [
{ name: "Yuva", dept: "IT", year: 2 },
{ name: "Arun", dept: "CSE", year: 3 }
];

return ( <div> <h3>Q1</h3>
{data.map((s, i) => ( <div key={i}>{s.name} - {s.dept} - {s.year}</div>
))} </div>
);
}
