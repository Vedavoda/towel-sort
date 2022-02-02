
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) { 
  return [];
}
  let result = [];
   matrix.forEach((item, i, arr) => {
    if (i % 2 === 0) {
        item.sort((a, b) => a - b);
    } else  {
        item.sort((a, b) => b - a);
    }    
  });
  matrix.forEach((item) => {
    result = result.concat(item);
  })
    return result;
  
}
