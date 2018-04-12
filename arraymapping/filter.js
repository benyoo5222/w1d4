var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 },

];
var result = input.map(function(z){

  z=(z.x*z.x)+(z.y*z.y);

  z=Math.sqrt(z);


  return z;
});

console.log(result);