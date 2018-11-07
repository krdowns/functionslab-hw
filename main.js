// Question 1
function maxOfTwoNumbers(number1, number2) {
    if (number1 > number2) {
        return number1;
    } else if (number2 > number1) {
        return number2;
    } else
        return "Numbers are equal"
}

// Question 2
function maxOfThree(number1, number2, number3) {
    if(number1>number2 && number1>number3) {
        return number1;
    } else if(number2>number1 && number2>number3) {
        return number2;
    } else if(number3>number1 && number3>number1) {
	    return number3;
	}
}

// Question 3
function isCharacterAVowel(char) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        return true;
    }
    return false;
}

// Question 4
function sumArray(array) {
    var sum = 0;
        for (var i = 0; i < array.length; i++){
            sum += array[i];
    }
    return sum;
}


// Question 4
function multiplyArray(array) {
    var product = 1;
    for (var i = 0; i < array.length; i++) {
        product = product * array[i];
    }
    return product;
}


// Question 5
var numberOfArguments = function(){

}



// Question 6
var reverseString = function (){
  
};


// Question 7
function findLongestWord () {
  
}


// Question 8
function filterLongWords () {
  
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}
