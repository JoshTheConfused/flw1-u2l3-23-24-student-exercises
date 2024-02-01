let fruit = document.querySelector(".fruit");
let flower = document.querySelector(".flower");
let color = document.querySelector(".color");
let age = document.querySelector(".age");


// CODE ALONG
// 1. Update the variable fruitList so that it is an array with at least 4 fruits.
let fruitList = ["Blueberry", "Grape", "Orange", "Pear"];
console.log(fruitList);

// 2. Update the variable flowerList so that it is an array with at least 4 flowers.
let flowerList = ["Lilac", "Rose", "Peony", "Sunflower"];
console.log(flowerList);

// 3. Update the variable colorList so that it is an array with at least 4 different colors.
let colorList = ["Purple", "Burgundy", "Aqua", "Yellow"];
console.log(colorList);

// 4. Update the variable ageList so that it is an array with a list of ages (numbers) of classmates and volunteers.
let ageList = [17, 67, 18, 36, 27, 73, 45, 32];
console.log();


// CODE SOLO
// 5. Update the variable favFruit to retrieve the array element of your favorite fruit in the fruitList array. 
// 6. Update the innerHTML to the favFruit variable.
let favFruit = fruitList[2];
fruit.innerHTML = favFruit;


// 7. Update the variable favFlower to retrieve the array element of your favorite flower in the flowerList array. 
// 8. Update the innerHTML to the favFlower variable.
let favFlower = flowerList[1];
flower.innerHTML = favFlower;

// 9. Update the variable favColor to retrieve your favorite color from the colorList array. 
// 10.Update the innerHTML to the favColor variable.
let favColor = colorList[0];
color.innerHTML = favColor;


// 11. Update the variable oldestAge to retrieve the array element of the oldest person in the ageList array. 
// 12. Update the innerHTML to the oldestAge variable.
let oldestAge = -1;
for (let i = 0; i < ageList.length; i++) {
  if (ageList[i] > oldestAge) {
    oldestAge = ageList[i];
  }
}
age.innerHTML = oldestAge;


