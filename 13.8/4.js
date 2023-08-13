const main = document.getElementById("main");
const button = document.getElementById("enter");



button.addEventListener("click", async () => {
    const firstName = document.getElementById('firstName')
    console.log(firstName.value)
    const lastName = document.getElementById('lastName')
    console.log(lastName.value)
    const emailAddress = document.getElementById('emailAddress')
    console.log(emailAddress.value)
    const age = document.getElementById('age')
    console.log(age.value)
    const reqOptions = {
        method:'post', 
        body:JSON.stringify({firstName:firstName.value, lastName:lastName.value, emailAddress:emailAddress.value, age:age.value}),
        headers: {'Content-Type':'application/json'}
    }
    fetch('https://jsonplaceholder.typicode.com/users', reqOptions)
});

