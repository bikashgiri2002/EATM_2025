// Reverse a String
const reverseString = (str) => {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    }
    return result;
}

let str = "Satarupa";
let result = reverseString(str);
console.log(result);
console.log(reverseString("Sradhanjali"));

// Count Vowels in a String

const countVowels = (str) => {
    let vowelsCount = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            vowelsCount++;
        }
    }
    return vowelsCount;
}

console.log(countVowels("Satarupa"));
console.log(countVowels("Sradhanjali"));
console.log(countVowels("Sweety"));

// Check for Palindrome
const checkPalindrome = (str) => {
    str = str.toLowerCase();
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    }
    if (result === str) {
        return true;
    } else {
        return false;
    }
}
// madam
// level
// radar

console.log(checkPalindrome("madam"));
console.log(checkPalindrome("level"));
console.log(checkPalindrome("satarupa"));
console.log(checkPalindrome("sweety"));
console.log(checkPalindrome("sradhanjali"));
console.log(checkPalindrome("radar"));
