
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!!!matrix) return [];
  if(matrix.length === 0) return [];
  for (let i = 0; i <= matrix.length -1; i++) {
  if (i % 2 === 1) 
  matrix[i].reverse();
  }
  return matrix.join().split(',');
}


