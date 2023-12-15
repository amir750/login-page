const myform= document.querySelector("#my-form");
const nameInput= document.querySelector("#name");
const emailInput= document.querySelector("#email");
const msg= document.querySelector(".msg");
const users= document.querySelector("#users");

myform.addEventListener("submit",onSubmit)

function onSubmit(e){
    e.preventDefault()
    console.log(nameInput.value)
    if( nameInput.value === '' || emailInput.value === ''){
        msg.innerHTML="<h5>please enter all fields</h5>"
        msg.classList.add("error")

        setTimeout(()=>{
            msg.innerHTML='';
            msg.classList.remove("error")
        },3000)
    }
    else{
        const li=document.createElement("li");
        li.appendChild(document.createTextNode(nameInput.value + " : " + emailInput.value))
        users.appendChild(li)
        nameInput.value='';
        emailInput.value='';
    }
}


function Strength(password) {
  let i = 0;
  if (password.length > 6) {
    i++;
  }
  if (password.length >= 10) {
    i++;
  }

  if (/[A-Z]/.test(password)) {
    i++;
  }

  if (/[0-9]/.test(password)) {
    i++;
  }

  if (/[A-Za-z0-8]/.test(password)) {
    i++;
  }

  return i;
}

let container = document.querySelector(".container");
document.addEventListener("keyup", function (e) {
  let password = document.querySelector("#YourPassword").value;

  let strength = Strength(password);
  if (strength <= 2) {
    container.classList.add("weak");
    container.classList.remove("moderate");
    container.classList.remove("strong");
  } else if (strength >= 2 && strength <= 4) {
    container.classList.remove("weak");
    container.classList.add("moderate");
    container.classList.remove("strong");
  } else {
    container.classList.remove("weak");
    container.classList.remove("moderate");
    container.classList.add("strong");
  }
});

let password = document.querySelector("#YourPassword");
let show = document.querySelector(".show");
show.onclick = function () {
  if (password.type === "password") {
    password.setAttribute("type", "text");
    show.classList.add("hide");
  } else {
    password.setAttribute("type", "password");
    show.classList.remove("hide");
  }
};