function solveEquation(a, b, c) {
  let arr;

  const dis = b ** 2 - 4 * a * c;
  let x2 = (-b - Math.sqrt(dis)) / (2 * a);
  let x1 = (-b + Math.sqrt(dis)) / (2 * a);
  if (dis < 0) {
    arr = [];
  } else if (dis == 0) {
    arr = [x1];
  } else {
    arr = [x1, x2];
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
