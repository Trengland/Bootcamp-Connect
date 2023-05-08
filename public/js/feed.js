
let viewProfileBtns = document.querySelectorAll(".peer-profile")
console.log('here');
viewProfileBtns.forEach((viewProfileBtn) => {
    viewProfileBtn.addEventListener('click',async (event) =>{
        event.preventDefault();
        let peerId = event.target.dataset.userId
        console.log(peerId);
        const response = await fetch(`/api/indbio/${peerId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          });   
          console.log(response);
          if (response.ok) {
              document.location.replace(`/api/indbio/${peerId}`);
          } else {
            alert(response.statusText);
          }
    });
  });



