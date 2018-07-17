const readline = require('readline');

const roman = require('./test/roman');
const matrix = require('./test/matrix');
const combin = require('./test/combin');
const odd = require('./test/odd');
const compress = require('./test/compress');

// create interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Select test from 1 to 5? ', (answer) => {
  let result;
  // validate answer
  switch(answer) {
    case '1':
      // update number
      const number = 16;
      result = roman(number);
    break;
    case '2':
      // create matrix
      const matrix1 = [[1,2,5],[3,0,5],[3,7,8],[2,2,3]];
      // validate matrix
      result = matrix(matrix1);
    break;
    case '3':
      const oddArray = [10, 15, 20, 25]
      result = odd(oddArray);
    break;
    case '4':
      // create array 1 and 2
      const array1 = ['x','y','z'];
      const array2 = [10,20,30];
      // combin
      result = combin(array1, array2);
    break;
    case '5':
      // create list
      const list = 'aabcccccaaa';
      // compress
      result = compress(list);
    break;
    default :
      console.log('Incorrect answer');
      rl.close();
    break;
  }

  console.log('The result is: ', result);

  rl.close();
});