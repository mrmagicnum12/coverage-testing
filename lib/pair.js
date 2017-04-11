const R = require('ramda');

/*function findPairForSum(data, sum){
	 const complimentMap = {};
	 const result = {found : false};

	 if(!Array.isArray(data))
		 return {result};

	 for(let i=0;i<data.length;i++){
			let value = data[i];
			let compliment = sum-value;
			if(checkForCompliment(value)){
				updateResult(value,compliment);
				break;
			}else{
				complimentMap[compliment]=true;
			}
	 }

	 function checkForCompliment(comp){
			return complimentMap[comp];
	 }

	 function updateResult(v,c){
		 result.value = v;
		 result.compliment = c;
		 result.found = true;
	 }

	 return {result};
}*/

function findPairForSum(data, sum){
	let complimentMap = {};
	let result = {found : false};
	const calculateCompliment = R.subtract(sum);
	const hasCompliment = (x)=>{result = Object.assign({found : true},{value: x, compliment: calculateCompliment(x)});return false};
	const hasNoCompliment = (x)=>{complimentMap = R.assoc(calculateCompliment(x),true,complimentMap); return true};
	const findPairSum = (x)=>{ return R.ifElse(R.has(x),hasCompliment.bind(null,x),hasNoCompliment.bind(null,x))(complimentMap)}
	const startSearch = ()=>{R.takeWhile(findPairSum, data);};
	R.ifElse(R.is(Array),startSearch,()=>{})(data);
	return {result}
}

module.exports = {findPairForSum}
