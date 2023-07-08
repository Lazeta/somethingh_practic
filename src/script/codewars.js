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
/*
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
*/
/*
function nbDig(n, d) {
  let count = 0
  for(let i = 0; i <= n; i++){
    let square = (i * i).toString();
    for(let j = 0; j < square.length; j++){
      if(square[j] == d.toString()) {
        count++;
      }
    }
  }
  return count
}

console.log(nbDig(10, 1)); // 4
console.log(nbDig(25, 0)); // 11
console.log(nbDig(5750, 0)); // 4700
*/
/*
function minSum(arr) {
  const descending = arr.slice().sort((a, b) => b - a); // sorted array only clone array 'slice()' 
  const ascending = arr.slice().sort((a, b) => a - b); // beacause method sort will take array and changed him.
  let sum = 0;
  for(let i = 0; i < arr.length / 2; i++){ // cycle which iteration only half of the array
    sum += descending[i] * ascending[i]    // add sum by index first big digit and small digit and next iteration also sum 
  }
  console.log(sum)
}

minSum([5,4,2,3])         // 22
minSum([12,6,10,26,3,24]) // 342
minSum([9,2,8,7,5,4,0,6]) // 74
*/
/*
function isPowerOfTwo(n) {
  if (n === 0) console.log(false)
  else console.log((n & (n - 1)) === 0)
}

isPowerOfTwo(0), false
isPowerOfTwo(1), true
isPowerOfTwo(2), true
isPowerOfTwo(5), false
isPowerOfTwo(234), false
isPowerOfTwo(333), false
isPowerOfTwo(1024), true
isPowerOfTwo(4096), true
*/

function nicknameGenerator(name){
  const vowels = 'aeiou';
  if (name.length < 4) return "Error: Name too short";
  else if(!vowels.includes(name[2])){
    return name.substring(0, 3);
  } else return name.substring(0, 4);
}
nicknameGenerator("Jimmy"), "Jim"
nicknameGenerator("Samantha"), "Sam"
nicknameGenerator("Sam"), "Error: Name too short"
nicknameGenerator("Kayne"), "Kay", "'y' is not a vowel"
nicknameGenerator("Melissa"), "Mel"
nicknameGenerator("James"), "Jam"
nicknameGenerator("Greg"), "Greg"
nicknameGenerator("Jean"), "Jean"
nicknameGenerator("Saam"), "Saam"
nicknameGenerator("Hlewwrczfd"), "Hlew"