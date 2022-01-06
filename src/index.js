
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix || !matrix.length){
            return [];
    }
    let arr = [];
    let newelem;
    matrix.forEach((element,index) => {
        if((index+1) %2 ==0){
             newelem = element.reverse()
        }
        else{
            newelem = element
        }
        arr = [...arr,...newelem]
    });
  return arr;
}




