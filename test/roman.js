const roman = (number) => {

  var decimal = [1000, 500, 100, 50, 10, 5, 1];
  var roman = ["M", "D", "C", "L", "X", "V", "I"];

  // Validate if number and not bigger then 3999
  if(typeof number === 'number' && number < 4000) {
    console.log(number);
    // inicialice result
    let result = '';

    // Go through decimal
    for (var i = 0; i <= decimal.length; i++) {
      // Validate if decimal[i] if mod is smaller then number
      while (number % decimal[i] < number) {
        //concat result
        result += roman[i];
        // remove the decimal from numbers
        number -= decimal[i];
      }
    }
    return result;
  } else {
    return 'Invalid Number'
  }
};

module.exports = roman;