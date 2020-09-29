
exports.min = function min (array) {
  
  if (Array.isArray(array) && array.length !== 0)  { 
    return array.sort((a,b) => b - a).pop();
  }
    
  return 0;
}

exports.max = function max (array) {

  if (Array.isArray(array) && array.length !== 0)  { 
    return array.sort((a,b) => a - b).pop();
  }

  return 0;
}

exports.avg = function avg (array) {


  if (Array.isArray(array) && array.length !== 0)  { 
    return (array.reduce((sum, current) => sum + current, 0) / array.length);
  }

  return 0;

}
