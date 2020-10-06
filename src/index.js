module.exports = function towelSort(matrix) {
  let arr = [];
  if (Array.isArray(matrix) && matrix !== undefined) {
    for (let i = 0; i < matrix.length; i++) {
      if (Array.isArray(matrix[i])) {
        arr = arr.concat(i % 2 !== 0 ? towelSort(matrix[i]).reverse() : towelSort(matrix[i]));
      } else {
        arr.push(matrix[i]);
      }
    }
  }
  return arr;
};
