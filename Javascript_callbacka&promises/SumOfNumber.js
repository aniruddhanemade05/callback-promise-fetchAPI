async function sumAsync(num1,num2){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(num1+num2)
        },1000)
    });
}
async function main(){
    let sum = await sumAsync(10,20);
    console.log(sum)
}
main()
