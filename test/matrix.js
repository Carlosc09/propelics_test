const matrix = (matrix1) => {

  let pos1 = 0;
  let pos2 = 0;

  console.log(matrix1);

  matrix1.forEach((element, i) => {
    if(pos1 && pos2) {
      // exit if we have pos 1 and 2
      return
    }
    element.forEach((e, j) => {
      // Find position of 0
      if(e === 0) {
        pos1 = i;
        pos2 = j;
        // exit
        return;
      }
    });
  });

  matrix1.forEach((element, i) => {
    element.forEach((e, j) => {
      // Change colunm to 0
      if(pos2 === j) {
        matrix1[i][j] = 0;
      }
       // change row to 0
      if(pos1 === i) {
        matrix1[i][j] = 0;
      }
    });
  });
  return matrix1;
 };

 module.exports = matrix;