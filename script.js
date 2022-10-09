const arrayOfInputs = [];

function addAnother() {
  const enterInformation = prompt(`Would you like to add a new input?`);
  return enterInformation;
}

function pushToArray(array) {
  while (addAnother() === "yes") {
    const newEntry = runCalc();
    array.push(newEntry);
    console.log(newEntry);
  }
  return array;
}

function runCalc() {
  const moneySpentAt = prompt(`where did you spend your money?`);
  const bill = Number(prompt(`please enter the price of the bill`));

  function tipCalc(bills) {
    let tip = 0;
    if (bills < 50) {
      tip = bills * 0.3;
    } else if (bills >= 50 && bills < 100) {
      tip = bills * 0.25;
    } else if (bills >= 100) {
      tip = bills * 0.2;
    }
    return tip;
  }
  return {
    Location: moneySpentAt,
    bill: bill,
    Total_Tip: tipCalc(bill),
    Overall_Bill: tipCalc(bill) + bill,
  };
}

console.log(pushToArray(arrayOfInputs));
