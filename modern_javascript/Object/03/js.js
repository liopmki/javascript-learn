// let user = {
// 	name: "John",
// 	age: 30,
// 	sayHi() {
// 		alert("Hi, " + this.name)
// 	}
// }
// user.sayHi()

// let calculator = {
// 	read() {
// 		this.a = +prompt("input the first number", 0)
// 		this.b = +prompt("input the second number", 0)
// 	},
// 	sum() {
// 		return (this.a) + (this.b)
// 	},
// 	mul() {
// 		return this.a * this.b
// 	}
// }
// calculator.read()
// alert(calculator.sum());
// alert(calculator.mul());

let ladder = {
	step: 0,
	up() {
		this.step++;
		return this
	},
	down() {
		this.step--;
		return this
	},
	showStep: function() { // 显示当前的 step
		alert( this.step );
		return this
	}
};
ladder.up().up().down().showStep().down().showStep();