var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(studenta,studentb){
  var nameofa=studenta.name;
  var nameofb=studentb.name;

  if(nameofa<nameofb){
    return -1;
  }
  else if(nameofa>nameofb){
    return +1;
  }
  else if(nameofa==nameofb){
    var ageofa=studenta.age;
    var ageofb=studentb.age;
    return ageofa-ageofb;
  }

});
console.log(students);