function hello(name) {
	let phrase = `Hello, ${name}!`;
	say(phrase);
}

function say(phrase) {
	alert(`** ${phrase} **`);
}

let name = prompt("input your name", "Bob")
hello(name)