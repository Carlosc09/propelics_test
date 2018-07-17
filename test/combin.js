const combin = (array1, array2) => {
  console.log(array1, array2);

  let newArry = [];
  // Validate size
  array1.forEach((element, index) => {
    // push array 1
    newArry.push(element);
    // push array 2 if exist
    if(array2[index]) {
    newArry.push(array2[index]);
    }
  });

  return newArry ;
 };

 module.exports = combin;