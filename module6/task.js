import users from "../module6/users.js";
// console.table(users);
// -------------------------------------------------------------#1-------------------------
const getUserNames = (users) => {
  return users.map((user) => user.name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// -------------------------------------------------------------#2-------------------------

const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, "blue"));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// -------------------------------------------------------------#3-------------------------

const getUsersWithGender = (users, gender) => {
  const findsGender = users.filter((user) => user.gender === gender);
  return findsGender.map((user) => user.name);
};

console.log(getUsersWithGender(users, "male"));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// -------------------------------------------------------------#4-------------------------

const getInactiveUsers = (users) => {
  return users.filter((user) => !user.isActive);
};

console.log(getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// -------------------------------------------------------------#5-------------------------

const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "elmahead@omatom.com"));
// {объект пользователя Sheree Anthony}
// {объект пользователя Elma Head}
// -------------------------------------------------------------#6-------------------------

const getUsersWithAge = (users, min, max) => {
  return users.filter((user) => user.age > min && user.age < max);
};

console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

// -------------------------------------------------------------#7-------------------------

const calculateTotalBalance = (users) => {
  const getUserBalance = users.map((user) => user.balance);
  return getUserBalance.reduce((number, value) => number + value, 0);
};

console.log(calculateTotalBalance(users));
// 20916

// -------------------------------------------------------------#8-------------------------

const getUsersWithFriend = (users, friendName) => {
  const findsFriend = users.filter((user) => user.friends.includes(friendName));
  return findsFriend.map((user) => user.name);
};

console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));
// [ 'Sharlene Bush', 'Sheree Anthony' ]
// [ 'Elma Head', 'Sheree Anthony' ]
// -------------------------------------------------------------#9-------------------------

const getNamesSortedByFriendsCount = (users) => {
  const sortFriends = users.sort((a, b) => a.friends.length - b.friends.length);
  return sortFriends.map((user) => user.name);
};
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// -------------------------------------------------------------#10-------------------------

const getSortedUniqueSkills = (users) => {
  const addAllSkills = users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);
    return allSkills.sort();
  }, []);

  return addAllSkills.filter(
    (skills, pos) => addAllSkills.indexOf(skills) == pos
  );
};
console.log(getSortedUniqueSkills(users));
