function mover(a,b){
    b.push(a[a.length - 1])
    a.pop(a[a.length - 1])
   }
   
   var umArray = [1, 2, 3];
   var outroArray = [4, 5];
   mover(umArray, outroArray);
   console.log(umArray,outroArray)