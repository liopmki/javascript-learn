// function User(name) {
// 	this.name = name;
// 	this.isAdmin = false;
// }
// let user = new User('bob')
// for (let key in user) {
// 	alert(user[key])
// }

// function User() {
// 	alert(new.target);
// }
// // 不带 "new"：
// User(); // undefined
// // 带 "new"：
// new User(); // function User { ... }

// let obj = {}
// function A() {
// 	return obj
// }
// function B() {
// 	return obj
// }
// alert(new A == new B)

// function Calculator() {
// 	this.read = function () {
// 		this.a = +prompt("a", 0)
// 		this.b = +prompt("b", 0)
// 	}
// 	this.sum = function () {
// 		return this.a + this.b
// 	}
// 	this.mul = function () {
// 		return this.a * this.b
// 	}
// }
// let calculator = new Calculator();
// calculator.read();
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// function Accumulator(startingValue) {
// 	this.value = startingValue
// 	this.read = function () {
// 		this.value += +prompt("New number", 0)
// 	}
// }
// let accumulator = new Accumulator(1); // 初始值 1
// accumulator.read(); // 添加用户输入的 value
// accumulator.read(); // 添加用户输入的 value
// alert(accumulator.value); // 显示这些值的总和