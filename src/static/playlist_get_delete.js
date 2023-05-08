// get and display selected songs on playlist page
const songList = document.getElementById('song-list');

fetch('/playlist')
  .then(response => response.json())
  .then(data => {
    data.songs.forEach(song => {
      const listItem = document.createElement('li');
      listItem.dataset.songId = song.id;
      listItem.innerHTML = `
        <h3>${song.title}</h3>
        <p>${song.duration}</p>
        
<button class="remove-button" style="border-radius:10px"><span class="text">Remove</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
      `;
      songList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.log('Error fetching song data:', error);
  });


  // delete a song from playlist page
  const playlist = document.getElementById('song-list');
  
  function removeSong(event) {
    const listItem = event.target.closest('li');
  
    const songId = listItem.dataset.songId.toString();
  
    playlist.removeChild(listItem);
  
    fetch(`/songs/${songId}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        console.log('Song removed successfully');
      } else {
        console.log('Error removing song');
      }
    })
    .catch(error => {
      console.log('Error removing song:', error);
    });
  }
  
  playlist.addEventListener('click', function(event) {
    const clickedElement = event.target;
  
    if (clickedElement.matches('.remove-button') || clickedElement.closest('.remove-button')) {
      removeSong(event);
    }
  });
