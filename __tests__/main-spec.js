const functionMethods = require('../main');


it ('should add two numbers', () => {
    expect(functionMethods.add(2, 3)).toBe(5);
});

it ('should start number is smaller than end number', () => {
	const startNumber = 2;
	const endNumber = 4;
	const result = functionMethods.isStartNumberSmallerThanEndNumber(startNumber,endNumber);
    expect(result).toBe(true);
}); 

it ('should start number is smaller than end number', () => {
	const startNumber = 4;
	const endNumber = 2;
	const result = functionMethods.isStartNumberSmallerThanEndNumber(startNumber,endNumber);
    expect(result).toBe(false);
}); 

it ('should numbers be in Range', () => {
	const startNumber = 50;
	const endNumber = 2;
	const result = functionMethods.isNumbersInRange(startNumber,endNumber);
    expect(result).toBe(true);
}); 

it ('should numbers be in Range', () => {
	const startNumber = 1001;
	const endNumber = -1;
	const result = functionMethods.isNumbersInRange(startNumber,endNumber);
    expect(result).toBe(false);
}); 

it ('should Concatenate per Multiplied Start and End Number', () => {
	const startNumber = 2;
	const endNumber = 4;
	const result = functionMethods.concatenatePerMultipliedStartandEndNumber(startNumber,endNumber);
	let multiplicationTable = '2*2=4\n' + 
							  '2*3=6 3*3=9\n'+
							  '2*4=8 3*4=12 4*4=16\n'; 
    expect(result).toBe(multiplicationTable);
}); 

it ('should Create Multiply Table', () => {
	const startNumber = 2;
	const endNumber = 4;
	const result = functionMethods.createMultiplyTable(startNumber,endNumber);
	let multiplicationTable = '2*2=4\n' + 
							  '2*3=6 3*3=9\n'+
							  '2*4=8 3*4=12 4*4=16\n'; 
    expect(result).toBe(multiplicationTable);
}); 

it ('should Create Multiply Table', () => {
	const startNumber = 4;
	const endNumber = 2;
	const result = functionMethods.createMultiplyTable(startNumber,endNumber);
	let multiplicationTable = '2*2=4\n' + 
							  '2*3=6 3*3=9\n'+
							  '2*4=8 3*4=12 4*4=16\n'; 
    expect(result).toBe(null);
}); 