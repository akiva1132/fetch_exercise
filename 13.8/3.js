const main = document.getElementById("main");
const button = document.getElementById("button1");
let i = 0
button.addEventListener("click", async () => {
  const resp = await fetch("https://fakestoreapi.com/products");
  const data = await resp.json()
  console.log(data)
  const details = document.createElement("p");
  details.innerText = data[i].title
  main.appendChild(details)
  i ++
});

