let formElement = document.querySelector('form');
let userNameInput = document.querySelector('#username');
let PassWordInput = document.querySelector('#pass');
let alertElement = document.querySelector('.alert');

function pageRedirect(event)
{
    event.preventDefault();
    let formData = new FormData(event.target);
    let userName = formData.get("username");
    let passWord = formData.get("pass");

    if(userName == "admin" && passWord == "admin")
    {
        window.location = "/mainpage.html";
    }

    else{
        alertElement.textContent = "Wrong username or password";
    }
}

formElement.addEventListener('submit', pageRedirect);

