export default function Q6() {
const products = [
{ id: 1, name: "Phone", price: 500 },
{ id: 2, name: "Laptop", price: 1200 }
];

return ( <div> <h3>Q6</h3> <table border="1"> <tbody>
{products.map(p => ( <tr key={p.id}> <td>{p.name}</td> <td>{p.price}</td> </tr>
))} </tbody> </table> </div>
);
}
