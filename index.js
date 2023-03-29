// Iteration 1: Names and Input
let hacker1 = "Ben";
console.log("The driver's name is " + hacker1);

let hacker2 = "Tomas";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
let driverName = "Ben";
let navigatorName = "Tomas";


if (driverName.length > navigatorName.length) {
  console.log(`The driver has the longest name, it has ${driverName.length} characters`);
}
else if (driverName.length < navigatorName.length) {
  console.log(`It seems that the navigator has the longest name, it has ${navigatorName.length} characters`);
}
else {
  console.log(`Wow, you both have equally long names, ${navigatorName.length} characters!`);
}


// Iteration 3: Loops
3.1
// would this be cheating?
let driverName = "Ben";

console.log ('B e n'.toUpperCase());

const name = "Ben"
const upperTame = name.toUpperCase();

let spaceTame ="";

for (let i = 0; i < upperTame.length;i++) {
  spaceTame += upperTame[i] + " ";
}

console.log(spaceTame);

3.2
const word = "Tomas";
let wordReversed = "";
 
 
for (let i = word.length - 1; i >= 0; i--) {
  const char = word[i];
  wordReversed += char;
}

console.log(wordReversed); 

3.3
let driverName = "Ben";
let navigatorName = "Tomas";

if (driverName < navigatorName) {
  console.log("The driver's name goes first.");
} else if (navigatorName < driverName) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What a coincidence! Both names are the same.");
}


Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque consequat tortor, dictum mattis metus sodales ut. Proin nec justo dignissim eros feugiat posuere. Vivamus sollicitudin congue augue ut dignissim. Nulla a ultrices velit. Duis et lorem et neque bibendum dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur lobortis leo sit amet sapien ornare molestie. Aliquam a molestie magna, ac vestibulum risus.

Praesent feugiat hendrerit posuere. Duis tristique ante eu molestie aliquet. Mauris vestibulum, magna non faucibus commodo, ex arcu viverra leo, vitae dictum metus massa ut ante. In vitae eleifend diam. Suspendisse ultrices molestie est tempor molestie. Nulla molestie aliquam nunc sit amet malesuada. Aliquam in purus ultrices turpis lacinia convallis vel fermentum metus. Etiam laoreet posuere porta. In lectus risus, porttitor quis luctus non, sodales et lectus. Phasellus pharetra tortor id finibus imperdiet. Quisque turpis purus, convallis et aliquet dignissim, feugiat et risus. Aenean justo libero, vulputate eu tortor ac, finibus egestas dui.

Pellentesque auctor tristique nisl id vulputate. Donec non nisl lobortis, tristique mi eget, finibus enim. In at porttitor lorem. Nunc sed nisi a risus fermentum placerat pellentesque sit amet urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur faucibus enim quis arcu fringilla faucibus. Nullam pretium dapibus mattis. Proin vehicula rhoncus pharetra. Duis ut ante auctor, sollicitudin nunc in, hendrerit quam. Ut cursus semper viverra. Sed pharetra nunc eu cursus pretium.`;

let words = longText.split(` `);
let wordCount = words.length;
console.log("The string has " + wordCount + " words.");

let targetWord = "et";
let count = 0;

for (let i = 0; i < words.length; i++) {
  if (words[i] === targetWord) {count++;
  }
  
}
console.log(targetWord , count);