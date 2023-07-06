/* function getDecimal(n) {
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


const getDecimal = n => {
    console.log(Math.abs( ( n % 1).toFixed(10) ))
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
getDecimal("asrasr");
getDecimal("3.5");
getDecimal(Infinity);
getDecimal(true);
getDecimal(NaN);
getDecimal(0); */

/*
function killer(suspectInfo, dead) {
    console.log(dead.value)
}

killer(
  {
    James: ["Jacob", "Bill", "Lucas"],
    Johnny: ["David", "Kyle", "Lucas"],
    Peter: ["Lucy", "Kyle"],
  },
  ["Lucas", "Bill"]
)
//   "James";

killer(
  {
    Brad: [],
    Megan: ["Ben", "Kevin"],
    Finn: [],
  },
  ["Ben"]
)
//   "Megan";
*/

function maxTriSum(numbers){
    let arr = numbers.toSorted((a, b) => b - a) // descending sort
    let set = new Set(arr) // tuple of unique numbers
    set = [...set] // transfer from tuple to array
    let sum = 0; 
    for(let i = 0; i < 3; i++){ // sum first tree max numbers
        if(numbers[i] === undefined){ // exit condition if argument undefined 
            break;
        }
        sum += set[i];
    }
    console.log(sum)
}

maxTriSum([3,2,6,8,2,3])                    // 17
maxTriSum([2,9,13,10,5,2,9,5])              // 32
maxTriSum([2,1,8,0,6,4,8,6,2,4])            // 18
maxTriSum([-3,-27,-4,-2,-27,-2])            // -9
maxTriSum([-14,-12,-7,-42,-809,-14,-12])    // -33
maxTriSum([-13,-50,57,13,67,-13,57,108,67]) // 232
maxTriSum([-7,12,-7,29,-5,0,-7,0,0,29])     // 41
maxTriSum([-2,0,2])                         // 0
maxTriSum([-2,-4,0,-9,2])                   // 0
maxTriSum([-5,-1,-9,0,2])                   // 1