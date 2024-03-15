//Quick Question #1
/* new Set([1,1,2,2,3,4]) *///Set(4) {1, 2, 3, 4}

//Quick Question #2
// [...new Set("referee")].join("")//'ref'

//Quick Question #3
// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false); //{Array(3) => true, Array(3) => false} 0: 
// {Array(3) => true}
// 1
// : 
// {Array(3) => false}

//hasDuplicate
const hasDuplicate = (array) => new Set(array).size !== array.length;

// console.log(hasDuplicate([1, 3, 2, 1]));//true
// console.log(hasDuplicate([1, 5, -1, 4]));//false

//vowelCount
const vowelCount = (str) => {
    const vowels = "aeiou";
    const vowelMap = new Map();

    for(let char of str.toLowerCase()){
        if (vowels.includes(char)) {
            vowelMap.set(char, (vowelMap.get(char) || 0) + 1);
        }
    }

    return vowelMap;
};

// console.log(vowelCount('awesome'));//Map {'a' => 1, 'e' => 2, 'o' => 1}
// console.log(vowelCount('Colt'));//Map{'o' => 1}

