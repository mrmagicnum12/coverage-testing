require("chai").should();
const expect = require("chai").expect;
const test =  require("../lib/pair");

describe("Pair Equal To Sum", ()=>{

	it('should return a result object with a found boolean property of false if passed an array of integers without a pair equal to the sum passed',()=>{
			expect(test.findPairForSum([1,2,3,9],8).result.found).to.equal(false);
	});

	it('should return a result object with a found boolean property of true and a value and compliment of 4 if passed an array of integers with a pair (4,4) equal to the sum passed (8)',()=>{
			expect(test.findPairForSum([6,7,9,7,8,4,911,34,56,4],8).result.found).to.equal(true);
			expect(test.findPairForSum([6,7,9,7,8,4,911,34,56,4],8).result.value).to.equal(4);
			expect(test.findPairForSum([6,7,9,7,8,4,911,34,56,4],8).result.compliment).to.equal(4);
	});

	it('should return a result object with a found boolean property of true and a value and compliment of 8 if passed an array of integers with a pair (7,9) equal to the sum passed (8)',()=>{
			expect(test.findPairForSum([6,7,9,7,8,4,911,34,56,4,8],16).result.found).to.equal(true);
			expect(test.findPairForSum([6,7,9,7,8,4,911,34,56,4,8],16).result.value).to.equal(9);
			expect(test.findPairForSum([6,7,9,7,8,4,911,34,56,4,8],16).result.compliment).to.equal(7);
	});

	it('should return a result object with a found boolean property of false if passed an empty array to the sum passed',()=>{
			expect(test.findPairForSum([],8).result.found).to.equal(false);
	});

	it('should return a result object with a found boolean property of false if passed an null value instead of array to the sum passed',()=>{
			expect(test.findPairForSum(null,8).result.found).to.equal(false);
	});

})
