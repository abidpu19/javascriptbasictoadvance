let  manufacturers:any[] = [
    { "id": "Samsung", "checked": false },
    { "id": "Motorola", "checked": false },
    { "id": "Apple", "checked": false },
    { "id": "Sony", "checked": false }
];
console.log("1. Displaying a message using forEach():");
function display(){
    console.log("Products to display...");
}
manufacturers.forEach(display);
console.log("2. Available Products using: forEach() array function:");
manufacturers.forEach( function(manufacturer) {
    console.log(manufacturer);
});

manufacturers = ["samsung","motorola","apple","sony"];

console.log("====== Simple map() example =========");
function display_uppercase(manufacturer:string) {
    return manufacturer.toUpperCase();
}
let manufacturers_uppercase:string[] = manufacturers.map(display_uppercase);
console.log(manufacturers_uppercase);

console.log("====== Simple filter() example =========");
function filterManufacturerByLength(val: string) {
    if (val.length > 5) return true;
}
let filtered_manufacturers: string[] = manufacturers.filter(filterManufacturerByLength);
console.log(filtered_manufacturers);


// console.log("====== Simple find() example =========");
// EXAMPLE TO DEMOSTRATE THE USE OF find() built in function ----> This code should be executed in IDE using --target es6 option

// function findManufacturer(manufacturer: string) {
//     if (manufacturer.length > 5)  return true;
// }
// let foundManufacturer: string = manufacturers.find(findManufacturer);
// console.log(foundManufacturer);


let subjects:string[] = ["Mathematics-70", "Science-67", "English-88", "Geography-62", "ComputerSc-55"];
function display_subject_uppercase(subject:string) {
    return subject.toUpperCase();
}
let subjects_uppercase:string[] = subjects.map(display_subject_uppercase);
console.log(subjects_uppercase);
// let subject_num = subjects_uppercase.map((subject)=>{ let x = subject.split("-"); return subject});
// console.log(subject_num)
// const scoreComparator = (a: ScoreData, b: ScoreData): number => {
//   return a.score - b.score;
// };
//   return scoreA - scoreB;
// };

// interface ScoreData {
//   subject: string;
//   score: number;
// }
// const sortedData: ScoreData[] = subjects_uppercase
//   .map((item) => {
//     const [subject, score] = item.split("-");
//     return { subject, score: parseInt(score, 10) };
//   })
//   .sort(scoreComparator);

interface ScoreData {
  subject: string;
  score: number;
}

const data: string[] = [
  "English-85",
  "Mathematics-70",
  "Science-95",
  "History-75",
];

// Custom sorting function
const scoreComparator = (a: ScoreData, b: ScoreData): number => {
  if (a.subject < b.subject) {
    return -1;
  }
  if (a.subject > b.subject) {
    return 1;
  }
  return a.score - b.score;
};

// Extract and sort the data
const sortedData: ScoreData[] = subjects_uppercase
  .map((item) => {
    const [subject, score] = item.split("-");
    return { subject, score: parseInt(score, 10) };
  })
  .sort(scoreComparator);


  const joinedData: string = sortedData
  .map(({ subject, score }) => `${subject}-${score}`)
  .join(", ");
// Display the sorted data
console.log(joinedData);