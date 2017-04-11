require("chai").should();
const expect = require("chai").expect;
const test =  require("../lib/ramda");

describe("Ramda", ()=>{
	it("returns false if string passed does not equal Anthony", ()=>{
		 expect(test.stringEqualsAnthony("Tom")).to.equal(false);
	})

	it("returns true if string passed does equal Anthony", ()=>{
		 expect(test.stringEqualsAnthony("Anthony")).to.equal(true);
	})

	it("returns sum of a range of odd numbers starting from 11",()=>{
		 expect(test.sumOddsFrom11(32)).equal(231);
	})

})
