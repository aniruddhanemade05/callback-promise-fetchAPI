let array = [10, 20, 30, 40, 50];
function multiplyWithCallback(array,result){
    opration=(num)=>{
        return num*2;
    }
    let newArray = array.map(opration)
    result(newArray);
}
let ans=(abc)=>{
    console.log(abc)
}
multiplyWithCallback(array,ans)