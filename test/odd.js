const odd = (arrNum) => {
  // filter array
  let res = arrNum.filter((num, i) => {
    // if index mod 2 not 0
    return i % 2 === 1
  });

  return res;
};

module.exports = odd;