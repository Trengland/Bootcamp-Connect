
let submitBio = document.getElementById('submit-bio')

console.log('questions');
 const bioFormHandler = async (event)=>{
    event.preventDefault();
    console.log(event);
    let birthDate = document.getElementById('birth-date').value.trim()
    let tvMovies = document.getElementById('tv-movie').value.trim()
    let favSong = document.getElementById('songs').value.trim()
    let favQuote = document.getElementById('quote').value.trim()
    let hobbies = document.getElementById('hobbies').value.trim()
    let gitHub = document.getElementById('github').value.trim()
    let linkedIn = document.getElementById('linkedin').value.trim()

  
    console.log(birthDate + " " + tvMovies + " " + favSong + " " + favQuote + " " + hobbies + " " + gitHub + " " + linkedIn);
    if (!birthDate || !tvMovies || ! favSong || ! favQuote || !hobbies || !gitHub || ! linkedIn) {
        return;
    } else if (birthDate && tvMovies && favSong && favQuote && hobbies && gitHub && linkedIn) {
        const response = await fetch('/api/questions', {
          method: 'POST',
          body: JSON.stringify({ birthDate, tvMovies, favSong, favQuote, hobbies, gitHub, linkedIn}),
          headers: { 'Content-Type': 'application/json' },
        });
        console.log(response);
        if (response.ok) {
            document.location.replace('/feed');
        } else {
          alert(response.statusText);
        }
      }    
    

 }


submitBio.addEventListener('click', bioFormHandler)
