require("chai").should();
const expect = require("chai").expect;
const test =  require("../lib/curry");

describe("Currying", ()=>{
	it("outputs 'Hello' as a message when passed ass the param", ()=>{
			const greet = test.createHelloMessage("Hello");
			expect(greet("Anthony")).to.equal('Hello Anthony');
	})
})
