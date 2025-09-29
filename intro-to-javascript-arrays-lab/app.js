

//1.
const foods = [];  

console.log('Exercise 1 result', 'foods');

//2. 
foods.push("pizza", "cheeseburger");
console.log('Exercise 2 result', foods);

//3.
foods.unshift("taco");
console.log('Exercise 3 result', foods);

//4.
let favFood = 0;
foods.forEach((food, index) =>{
    console.log(index + ". " + food)
    if (food==="pizza") {
        favFood=food;
        console.log("succesfully found favourite food")
    }

})



//5.


foods.splice(2, 0, "tofu")

console.log('Exercise 5 result:', foods);


//6.

foods.splice(1, 1, 'sushi', 'cuocake');
console.log('Exercise 6 result:', foods);

//7.
 
yummy = [foods.slice(1,3)];
yummy = foods.slice(1,3);

console.log('Exercise 7 result:', yummy);

//8

let soyIdx = 0;
soyIdx = foods.indexOf("tofu");


console.log('Exercise 8 result:', soyIdx);

//9
let allFoods = "";
allFoods = foods.join ("-> ");

console.log('Exercise 9 result:', allFoods);

//10

let hasSoup = 0;
hasSoup=foods.includes ("soup");


console.log ('Exercise 10 result:', hasSoup);


//11

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = [];
for (let i = 0; i < nums.length; i++) {
    if(nums[i]%2!==0){
        odds.push(nums[i]);
    }

}


console.log('Exercise 11 result:', odds);


//12


const fizz = [];
const buzz = [];
const fizzbuzz= [];


for (let i=0;i<nums.length;i++) {
    
    if (nums[i]%3===0) {
        fizz.push (nums[i]);
   
    }else if (nums[i]%5===0) {
        buzz.push(nums[i]);
    }
   
    if (nums[i]%3===0 && nums[i]%5===0) {
        fizzbuzz.push(nums[i]);
    }
}


console.log ('Exercise 12 Results:');
console.log ('  fizz:', fizz);
console.log ('  buzz:', buzz);
console.log ('  fizzbuzz:', fizzbuzz);

//13

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
let numList=[];
numList = numArrays[numArrays.length-1]


console.log('Exercise 13 result:', numList);


//14


let num = 0;
num = numArrays[2][1];

console.log('Exercise 14 result:', num);


//15.

let total = 0;

for (let i=0;i<numArrays.length;i++) {
    
    for (let j=0;j<numArrays[i].length;j++) {
        
        total+=numArrays[i][j];
    }
    }


console.log('Exercise 15 result:\n', total);
