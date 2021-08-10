function calcArithmeticAverageToMedian(list) {
  const sumList = list.reduce(function (acumValue = 0, newElement) {
    return parseInt(acumValue) + parseInt(newElement);
  });
  const averageList = sumList / list.length;
  return averageList
}

function calcMedian(list) {
  if (list === "") {
    return "Introduce una lista"
  } else {
    const listArray = list.split(',')

  function isPair(num) {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  const ordainedList = listArray.sort((a, b) => a - b)

  const listMiddle = parseInt(ordainedList.length / 2);
  let median;
  
  if (isPair(ordainedList.length)) {
    const element1 = parseInt(ordainedList[listMiddle - 1]);
    const element2 = parseInt(ordainedList[listMiddle]);

    const average_Element1_Element2 = calcArithmeticAverageToMedian([
      element1,
      element2,
    ]);

    median = average_Element1_Element2;
  } else {
    median = ordainedList[listMiddle];
  }

  return `La mediana de tu lista es ${median}`
  }  
};


function calcMedianBtn () {
  const InputMedian = document.getElementById('InputMedian')
  const OutputMedian = document.getElementById('OutputMedian')

  const list = InputMedian.value

  const median = calcMedian(list)

  OutputMedian.innerText = `${median}` 
}