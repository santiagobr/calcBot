function calcArithmeticAverage(list) {
  if (list === "") {
    return "Introduce una lista";
  } else {
    const listArray = list.split(",");
    const sumList = listArray.reduce(function (acumValue = 0, newElement) {
      return parseInt(acumValue) + parseInt(newElement);
    });
    const averageList = sumList / listArray.length;
    return `El promedio de tu lista es ${averageList.toFixed(2)}`;
  }
}

function calcAverageBtn() {
  const InputAverage = document.getElementById("InputAverage");
  const OutputAverage = document.getElementById("OutputAverage");

  const list = InputAverage.value;

  const average = calcArithmeticAverage(list);

  OutputAverage.innerText = average;
}
