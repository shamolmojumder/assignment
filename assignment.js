function brickCalculator(floor) {
    if (floor<=10) {
        floor*1000;
    }   return floor
   }
   
   const value=brickCalculator(6)
   console.log(value);





   function feetToMile(foot) {

    if (foot<=0) {
        return 1
    }else{
        const mile= foot/5280
        return mile;
    }
  
}

const feetValue=feetToMile(-5280)
console.log(feetValue);


function woodCalculator(chair,bed,table) {
    const chairValue=chair*1;
    const bedValue=bed*3;
    const tableValue=table*5
    return chairValue+bedValue+tableValue;
}

const totalwood=woodCalculator(5,2,5)
console.log("total wood need"+" "+totalwood);