// document.getElementById("test")
// const person = {
//       fullName : function() {
//             return this.firstName + " " + this.lastName;
//       }
// }

// const person1 = {
//   firstName:"Asmit",
//   lastName: "Sah"
// }

// const person2 = {
//       firstName: "Aayush",
//       lastName: "Sah"
// }

// // const name1= person.fullName.apply(person1);
// // const name2= person.fullName.apply(person2);

// document.getElementById("test").innerHTML =
//       // name1 + "<br>" + name2
//       person.fullName.call(person1) + "<br>" + person.fullName.call(person2); 




const colors = ["yellow", "red", "green", "blue", "purple"];
let index = 0;

function myfun() {
  const btn = document.getElementById("button");
  btn.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
}

