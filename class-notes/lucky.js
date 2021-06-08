const student = {
  firstName: "Gaven",
  lastName:"Tally",
  friends: ["Henery", "Creed", "MAson", "Francis", "kaden", "Oscar", "Nassir"],
  school: {
    name: "Sylven Park",
    principal: "Trey  Stephens",
    location: "Bellevue",
    rating: 8
  }
}

// console.log(`The student is ${student.firstName} ${student.lastName}`);

const listStudent = (first, last, school) => {
  const string = `${first} ${last} goes to ${school}`;
  return string;
}
const studentString = listStudent("eugene", "terry", "NSS");
//console.log(studentString);