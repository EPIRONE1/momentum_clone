const loginForm = document.querySelector("#login-form") ;
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"


function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.querySelector("h1").innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginForm.style.display = "none";
}

function handleLogin(event){
    event.preventDefault();
    loginForm.style.display = "none";
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreetings();   
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.style.display = "flex";
    loginForm.addEventListener("submit",handleLogin)
}else {
        paintGreetings();     
}