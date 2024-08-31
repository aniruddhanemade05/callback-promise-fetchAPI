async function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Fetched Successfuly")
        }, 2000);
    })
}
async function main() {
   let result = await getData()
   console.log(result)
}
main()