var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

function map(array,functions){
  var newarr=[];

  for(var arr of array){
    var newresult=functions(arr);
    newarr.push(newresult);
  }
  console.log(newarr);
};