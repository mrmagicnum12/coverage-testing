function createHelloMessage(greeting){
	return (name)=>{
		 return `${greeting} ${name}`
	};
}

module.exports = { createHelloMessage }
