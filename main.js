function add (left, right) {
    return left + right;
}

function isStartNumberSmallerThanEndNumber (startNumber, endNumber) {
    return ((startNumber < endNumber) ? true : false);
}

function isNumbersInRange (startNumber, endNumber) {
	const max = 1000;
	const min = 0;
    return (((startNumber >= min && startNumber <= max ) &&
     (endNumber >= min && endNumber <= max  )) ? true : false);
}

function concatenatePerMultipliedStartandEndNumber (startNumber, endNumber) {
	let MultiplicationTable = '';
   for(let i=startNumber; i<=endNumber; i++) { 
		for(let j=startNumber; j<=i; j++)  { 
               let product = j * i;
	  		MultiplicationTable += `${j}` + '*' +  `${i}` + '=' + `${product}` ;
	  		if(i==j) {
	  			MultiplicationTable += '\n';
	  		}else { MultiplicationTable += ' ' };
        } 
   } 
return MultiplicationTable;
}

function createMultiplyTable (startNumber, endNumber) {
	let MultiplicationTable = '';
	if ( isStartNumberSmallerThanEndNumber(startNumber,endNumber) && 
		 isNumbersInRange(startNumber,endNumber) )
	{
	 MultiplicationTable = concatenatePerMultipliedStartandEndNumber(startNumber,endNumber);
	}else MultiplicationTable = null;
	
return MultiplicationTable;
}

module.exports =  { add :  add , 
 isStartNumberSmallerThanEndNumber : isStartNumberSmallerThanEndNumber,
 isNumbersInRange : isNumbersInRange,
 concatenatePerMultipliedStartandEndNumber : concatenatePerMultipliedStartandEndNumber,
 createMultiplyTable : createMultiplyTable
 };