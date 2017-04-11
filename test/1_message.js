require("chai").should();
const expect = require("chai").expect;
const test =  require("../lib/message");

describe("Message", ()=>{
	it("outputs 'Hello Ava' as a message when 'Hello' is the message param and 'Ava' is the firstName param", ()=>{
			expect(test.createCustomMessage("Hello", "Ava")).to.equal('Hello Ava');
	})

	it("outputs 'Hello Tom Sanders' as a message when 'Hello' is the message param, 'Tome' is the firstName param, and 'Sanders'", ()=>{
		expect(test.createCustomMessage("Hello", "Tom","Sanders")).to.equal('Hello Tom Sanders');
	})

	it("outputs 'Hello' and doest not output the first name because the param passed is an integer and not a string", ()=>{
			expect(test.createCustomMessage("Hello", 345)).to.equal('Hello');
	})
})
