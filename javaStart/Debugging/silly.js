let messageString = ''

const getNumber = () => {
  const num1 = 1;
  const num2 = 2;
  const sum = num1 + num2;
  return sum;

}
messageString += 'I ';
messageString += 'need ';
messageString += getNumber();

document.body.innerHTML = messageString;