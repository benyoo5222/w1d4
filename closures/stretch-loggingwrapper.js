var wrapLog = function (callback, name) {

  return function (){
    var newobj={};
      for(var a=0;a<arguments.length;a++){
        if (newobj["numbers"]==undefined){
          newobj["numbers"]=[];
          newobj["numbers"].push(arguments[a]);
        } else if(newobj["numbers"]!= undefined){
          newobj["numbers"].push(arguments[a]);
        }
      }
      var args=newobj["numbers"].join(", ");
      var result= callback(...arguments);
      var final=name+"("+args+") => "+result;
      console.log(final);
    }

  };

var area = function (x, y) {
  return x * y;

};
var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24