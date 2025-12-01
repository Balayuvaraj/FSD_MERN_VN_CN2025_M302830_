function Card({ name, role }) {
return <div>{name} - {role}</div>;
}
export default function Q3() {
return ( <div> <h3>Q3</h3> <Card name="Yuva" role="Dev" /> <Card name="Arun" role="Designer" /> <Card name="Priya" role="Tester" /> </div>
);
}
