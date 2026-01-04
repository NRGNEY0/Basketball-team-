
console.log("js is running");
// create account 
const form = document.getElementById('register');
form.addEventListener('submit', (event) => {
    event.preventDefault; // Prevents the page from refreshing 
    const username = document.getElementById('CUsername').value;
    const password = document.getElementById('CPassword').value;


    if (!username || !password) { // checks to see if both username and password fields are filled 
        alert('Pleadse fill in all fields');
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
})

//Login
document.getElementById("btnLogin").addEventListener('click', () => {
    const Username = document.getElementById('LUsername').value;
    const Password = document.getElementById("Lpassword").value;

    // check if user exeists
    const storedPassword = localStorage.getItem(Username);

    if (!storedPassword) {
        message.textContent = 'Account not found. Please create one';
    } else if (storedPassword === Password) {
        message.style.color = 'green';
        message.textContent = "Login Successful";
    } else {
        message.textContent= 'incorrect password';
    }
});