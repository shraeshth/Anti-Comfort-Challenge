function map(currentValue, oldRange, newRange) {
  let newArr = [];
  let [oldMin, oldMax] = oldRange;
  let [newMin, newMax] = newRange;

  // Map the current value to the new range
  let newValue =
    ((currentValue - oldMin) / (oldMax - oldMin)) * (newMax - newMin) + newMin;
  newArr.push(newValue);

  return newArr;
}

