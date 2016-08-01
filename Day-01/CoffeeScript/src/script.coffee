
console.log this
calculator = 
	result : 0
	add : (a,b) -> this.result = a + b


calculator.add 100,200
console.log calculator.result

add = (numbers...) => numbers.reduce (x,y) => x + y

console.log add 10,20,30,40

class Employee
	constructor: (@id, @name, @salary) ->
	print : ->
		console.log @id, @name, @salary

product = 
	id : 100