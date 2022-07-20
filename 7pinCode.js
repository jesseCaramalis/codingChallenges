// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// Answer

function validatePIN (pin) {
    let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    let arr = pin.split('')
    if((arr.length === 4 || arr.length === 6)&&(arr.every(x => nums.includes(x)))){
        return true
    }else{
      return false
    }
}

//Parameter: String of any length, containing numbers or letters.
//Return: true if string is either exactly 4 or 6 digits, and only integers. False else.
//Example: (validatePIN("12345"),false
//split string to arr
//if array.length !== 4 || 6, return false
//else if array.every into array.includes