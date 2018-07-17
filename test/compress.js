const compress = (list) => {
  console.log(list);
  // check if valid string
  if (list.length === 0) {
    console.log();
    return 'Invalid string';
  }
  var output = '';
  var count = 0;
  // go through str
  for (var i = 0; i < list.length; i++) {
    // increase count
    count++;
    // validate if next character equals actual
    if (list[i] !== list[i + 1]) {
      // validate if compress is smaller then count
      output += (count === 1)? list[i] : list[i] + count;
      // Restart count
      count = 0;
    }
  }
  // return
  return output;
 };

 module.exports = compress;