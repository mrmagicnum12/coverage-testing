const R = require('ramda');

function stringEqualsAnthony(param){
		return R.ifElse(R.equals("Anthony"),()=>{return true},()=>{return false})(param);
}

function sumOddsFrom11(end){
		const isOdd = n => n % 2 !== 0;
		return R.pipe(R.range(11),R.filter(isOdd),R.reduce(R.add,0))(end);
}

module.exports = {stringEqualsAnthony, sumOddsFrom11}
