async function FetchData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = x.json()
    return data;
}
async function main() {
    let Data = await FetchData()
    console.log(Data);
}
main()