function FetchData(links) {
    const promices = links.map((link) => fetch(link).then((response) => response.json()));
    return Promise.all(promices);
}
const linksFatch = [
    " https://jsonplaceholder.typicode.com/todos/1",
   " https://jsonplaceholder.typicode.com/todos/2",
   " https://jsonplaceholder.typicode.com/todos/3",
  " https://jsonplaceholder.typicode.com/todos/4",
  " https://jsonplaceholder.typicode.com/todos/5",
];
FetchData(linksFatch)
.then((response)=>{console.log(response)});