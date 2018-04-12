function findWaldo(arr, found) {
  arr.forEach(function(element,index, g){
    console.log(g[index]);
    if(element=="Waldo"){
      return found(index);
    }
  });


}

function actionWhenFound(index) {
  console.log("Found Waldo at index",index+"!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);