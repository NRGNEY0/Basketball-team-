
// create account 
const registerForm = document.getElementById('register');
if (registerForm){
registerForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents the page from refreshing 
    const username = document.getElementById('CUsername').value;
    const password = document.getElementById('CPassword').value;


    if (username === ''|| password === '') { // checks to see if both username and password fields are filled 
        alert('Please fill in all fields');
        return;
    }

    //checks to see if the username exists 

    if (localStorage.getItem(username)){
        alert("Username already exists");
        return;
    }

    // Stores the user 
    localStorage.setItem(username,password);
    alert("Account created successfully");
    
    username = " ";
    password = " ";
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
        alert('Please fill in all fields')
     }
    // check if user exeists
    const storedPassword = localStorage.getItem(username);

    if (!storedPassword) {
        alert("Account not found, please create one");
    } else if (storedPassword === password) {
        alert("Login successful")
    } else {
        alert("incorrect password");
    }
});
}
