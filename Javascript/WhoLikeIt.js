function likes(names) {
    if (names.length == []) {
      return "no one likes this";
    } else if (names.length == 1) {
      return names[0] + " likes this";
    } else if (names.length == 2) {
      return names[0] + " and " + names[1] + " like this";
    } else if (names.length == 3) {
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    } else {
      return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
    }
  }
  
  console.log(likes([])) //must be "no one likes this"
  console.log(likes(["Marian"])) //must be "Marian likes this"
  console.log(likes(["Marian", "Fredd"])) //must be "Marian and Fredd like this"
  console.log(likes(["Marian", "Fredd", "Olivia"])) //must be "Marian, Fredd and Olivia like this"
  console.log(likes(["Marian", "Fredd", "Olivia", "Julia", "Kevin", "Lucy", "Lana", "Fredd", "Olivia", "Julia", "Kevin", "Lucy", "Lana"])) //must be "Jonathan, Virginia and 3 others like this"