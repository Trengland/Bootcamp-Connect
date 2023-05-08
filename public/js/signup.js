
let signUpBtn = document.getElementById('sign-up')

console.log('here');
 const signUpFormHandler = async (event)=>{
    event.preventDefault();
    console.log(event);
    let name = document.getElementById('user-name').value.trim()
    let email = document.getElementById('email').value.trim()
    let password = document.getElementById('password').value.trim()
    let confirmPw = document.getElementById('check-password').value.trim()

  
    console.log(name + " " + email + " " + password + " " + confirmPw);
    if (!name || !email || !password || !confirmPw) {
      alert('fill all fields')
        return;
    } 
    if ( password !== confirmPw){
      alert('passwords dont match')
        return;
    } 
    if (name && email && password) {
      console.log('last if');
        const response = await fetch('/api/users/signup', {
          method: 'POST',
          body: JSON.stringify({ name, email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
        console.log(document.location);
        console.log(response);
        if (response.ok) {
            document.location.replace('/api/questions');
        } else {
          alert(response.statusText);
        }
      }    
    

 }


signUpBtn.addEventListener('click', signUpFormHandler)




