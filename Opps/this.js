// function context
function getThis() {
	return this;
}

const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

obj1.getThis = getThis;
obj2.getThis = getThis;
// console.log(obj1.getThis());
// console.log(obj2.getThis());

const obj3 = {
	__proto__: obj1,
	name: "obj3",
};
// console.log(obj3.getThis())

const obj4 = {
	name: "obj4",
	getThis() {
		return this;
	},
};
const obj5 = { name: "obj5" };
obj5.getThis = obj4.getThis;
// console.log(obj5.getThis());

function getThisStrict() {
	"use strict";
	return this;
}
Number.prototype.getThisStrict = getThisStrict;
// console.log(typeof (1).getThisStrict())
// console.log(typeof getThisStrict())

function getThis() {
	return this;
}
Number.prototype.getThis = getThis;
// console.log(typeof (1).getThis());
// console.log(getThis() === globalThis);

function logthis() {
	"use strict";
	console.log(this);
}
// [1,2,3].forEach(logthis)
// [1,2,3].forEach(logthis, {name: "obj"})

const globalObject = this;
const foo = () => this;
// console.log(globalObject === foo())

const obj = { name: "obj" };
// attemp to set this using call
// console.log(foo.call(obj) === globalObject)

// attemp to set this using bind
// console.log(foo.bind(obj)() === globalObject)

function C() {
  this.a = 37;
}
let o = new C();
// console.log(o.a);

function C2() {
  this.a = 37;
  return { a: 38 }
}
o = new C2();
// console.log(o.a);
