//Eric Heinzman
//answer question number 3 

var array = [1,2,3,4,5,6,7,8,9,10];
//creating an array 
var space = 1;
//creating the variable space and setting it equal to 1

for (var i = 0; i < array.length; i += space++) {
//for loop that will look through array length 
//also creating variable i
//it will increment and skip every other number up to 10
	print(array[i]);

}

