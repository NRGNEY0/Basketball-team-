const message = document.getElementById("message");

//Function to show  messages 
function ShowMessage(text, type){ // text for the text it will show the user and type for the type of message either error or success 
    message.textContent = text; // Chamges the text in the div 
    message.className = `message ${type}` // changes the class of the div 
    message.style.display = "block"; // makes the message show 
}

// create account 
const registerForm = document.getElementById('register');
if (registerForm){
registerForm.addEventListener('submit', async (event) => {
    event.preventDefault()
    const username = document.getElementById('CUsername').value;
    const password = document.getElementById('CPassword').value;


    if (username === ''|| password === '') { // checks to see if both username and password fields are filled 
        ShowMessage("Please fill in all fields", "error");
        return;
    }

    //checks to see if the username exists 

    if (localStorage.getItem(username)){
        ShowMessage("Username already exists", "error");
        return;
    }

    // Stores the user 
    localStorage.setItem(username,password);
    ShowMessage("Account created successfully", "success");
    

    const response = await fetch(registerForm.action, {
       method: "POST",
       body: new FormData(registerForm),
       headers: {
        "Accept" : "application/json"
       }
    });

    if (response.ok){
        ShowMessage("Message Sent", "success");
    }

    
    event.target.reset() // clears out all input fields 
});
}

//Login
const loginForm = document.getElementById("SignIn")
if (loginForm){
    loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('LUsername').value;
    const password = document.getElementById("Lpassword").value;

    // Making sure that all fields arent left blank 
     if (username === '' || password === '') {
        ShowMessage("Please fill in all fields", "error")
        return;
     }
    // check if user exeists
    const storedPassword = localStorage.getItem(username);

    if (!storedPassword) {
        ShowMessage("Account not found, please create one", "error");
        return;
    } else if (storedPassword === password) {
        ShowMessage("Login successful", "success")
    } else {
        ShowMessage("incorrect password", "error");
    }

    event.target.reset() //clears all the fields
});
}


