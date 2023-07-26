// Writing a function to find unique users and intersection between two lists and exporting the module
module.exports = function (list1, list2) {
  const uniqueList1 = []; // Empty array to store unique users in list1 not in list2
  const uniqueList2 = []; // Empty array to store unique users in list2 not in list1
  const intersectionList = []; // Empty array to store users present in both List1 and List2

  // Iterating through list1 to check if each element is present in list2 or not

  for (const user1 of list1) {
    // If user not present in list2 then add user1 to uniqueList1 else add to intersectionList

    if (!list2.includes(user1)) {
      uniqueList1.push(user1);
    } else {
      intersectionList.push(user1);
    }
  }

  // Iterating through list2 to check if each element is present in list1 or not

  for (const user2 of list2) {
    // If user not present in list2 then add user1 to uniqueList1 else add to intersectionList

    if (!list1.includes(user2)) {
      uniqueList2.push(user2);
    }
  }
  // Return the three output arrays as the final result
  return {
    uniqueList1,
    uniqueList2,
    intersectionList,
  };
};
