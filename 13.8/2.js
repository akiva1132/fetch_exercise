const main = document.getElementById("main");
const button = document.getElementById("button1");
button.addEventListener("click", async () => {
  const resp = await fetch("https://api.humorapi.com/jokes/search?api-key=edcad58876634e899e0c0a4b3ccd3804");
  const data = await resp.json()
  main.innerText(data.jokes[0].joke)
});