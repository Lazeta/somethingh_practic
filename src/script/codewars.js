function getDecimal(n) {
  let res = "";
  const str = `${n}`;
  if(!isFinite(str)){
    return;
  } else {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '.'){
            res += '.';
            continue;
        }
        if (str[i] == 0 && str[i + 1] === '.' || str[i] > 0 && str[i + 1] === '.'){
            res = '0';
        }
        else {
            if (str > 1 && !str.includes('.')){
                res = '0';
            } else {
                res += str[i];
            }
        }
      }
      console.log(+(res));
  }
}

getDecimal(0.4);
getDecimal(1.1);
getDecimal(3.2);
getDecimal(10.3);
getDecimal(15);
getDecimal(16.0);
getDecimal(17.5);
getDecimal(2.0353521);
getDecimal(-666666.6666666);
getDecimal('asrasr')
getDecimal('3.5')
getDecimal(Infinity);
getDecimal(true);
getDecimal(NaN);
getDecimal(0);