function Child({ show }) {
return <button onClick={show}>Click</button>;
}

export default function Q7() {
function showAlert() {
alert("Clicked!");
}

return ( <div> <h3>Q7</h3> <Child show={showAlert} /> </div>
);
}
