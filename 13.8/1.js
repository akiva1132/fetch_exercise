const main = document.getElementById("main");
const button = document.getElementById("button1");
button.addEventListener("click", async () => {
  const resp = await fetch("https://randomuser.me/api");
  const data = await resp.json();
  const img = document.createElement("img");
  img.src = data.results[0].picture.large;
  img.style.height = "200px";
  main.appendChild(img);
  const details = document.createElement("p");
  details.innerText = data.results[0].name.first + " " +
  data.results[0].name.last + " " +
  data.results[0].email + " " +
  data.results[0].dob.age
  main.appendChild(details)
});
const button2 = document.getElementById("button2");
button2.addEventListener("click", async () => {
  let i = 0;
  while (i <= 4) {
    const resp = await fetch("https://randomuser.me/api");
    const data = await resp.json();
    if (data.results[0].gender === "male") {
      const img = document.createElement("img");
      img.src = data.results[0].picture.large;
      img.style.height = "200px";
      main.appendChild(img);
      const details = document.createElement("p");
      details.innerText = data.results[0].name.first + " " +
      data.results[0].name.last + " " +
      data.results[0].email + " " +
      data.results[0].dob.age
      main.appendChild(details)
      i++;
    }
  }
});
