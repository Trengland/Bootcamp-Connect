
let signUpBtn = document.getElementById('sign-up')

console.log('here');
 const signUpFormHandler = async (event)=>{
    event.preventDefault();
    console.log(event);
    let name = document.getElementById('user-name').value.trim()
    let email = document.getElementById('email').value.trim()
    let password = document.getElementById('password').value.trim()
    let confirmPw = document.getElementById('confirmpassword').value.trim()

  
    console.log(name + " " + email + " " + password + " " + confirmPw);
    if (!name || !email || !password || !confirmPw) {
        return;
    } else if ( password !== confirmPw){
        return;
    } 
    if (name && email && password) {
        const response = await fetch('/api/users/signup', {
          method: 'POST',
          body: JSON.stringify({ name, email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
        console.log(response);
        if (response.ok) {
            document.location.replace('/questions');
        } else {
          alert(response.statusText);
        }
      }    
    

 }


signUpBtn.addEventListener('click', signUpFormHandler)




