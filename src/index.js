
exports.min = function min (array) {
    if (!array) return 0;
    let minElement = array[0];
    for(let i=0;i<array.length;i++){
        if(minElement > array[i]){
           minElement = array[i]
        }
  }
  return minElement || 0 ;
}

exports.max = function max (array) {
    if (!array) return 0;
    let maxElement = array[0];
    for(let i=0;i<array.length;i++){
        if(maxElement < array[i]){
           maxElement = array[i]
        }
  }
    return maxElement || 0;
}

exports.avg = function avg (array) {
    if (!array) return 0;
    const average = array => array.reduce( ( p, c ) => p + c, 0 ) / array.length;
    const result = average( array );
  return result ||0;
}
