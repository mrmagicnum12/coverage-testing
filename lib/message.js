function createCustomMessage(message, firstName, lastName){
	const fname = fName(firstName);
	const lname = lName(lastName);

	function fName(f){
		if(f && isString(f)){
			return f;
		}else{
			return '';
		}
	}

	function lName(l){
		if(l && isString(l)){
			return ' '+l;
		}else{
			return '';
		}
	}

	function isString(s){
		return typeof s === 'string';
	}

	return `${message} ${fname}${lname}`.trim();
}

module.exports = {createCustomMessage};
