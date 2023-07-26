// Importing the function module to find unique user
const findUniqueUsers = require("./findUniqueUsers.js");
// Input lists of testing the code
const list1 = ["Arjun", "Adwait", "Swapnil", "Amit", "Vishal", "Adnan"];
const list2 = ["Adwait", "Laxman", "Amit", "Adnan", "Nitin", "Gaurav"];

const result = findUniqueUsers(list1, list2);

console.log("Unique List1 Users:", result.uniqueList1);
console.log("Unique List2 Users:", result.uniqueList2);
console.log("Intersection Users:", result.intersectionList);
