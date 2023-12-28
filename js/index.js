const signUpBttn = document.getElementById("signUp");
const signInBttn = document.getElementById("signIn");
const container = document.getElementById("container");

signUpBttn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

signInBttn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});