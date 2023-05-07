const songList = document.getElementById('song-list');

fetch('/playlist')
  .then(response => response.json())
  .then(data => {
    // Iterate over the song data and create HTML elements to display it on the webpage
    data.songs.forEach(song => {
      const listItem = document.createElement('li');
      listItem.dataset.songId = song.id; // Set the song id as a data attribute on the list item
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

  
  // Get the playlist element
  const playlist = document.getElementById('song-list');
  
  // Function to remove a song from the playlist
  function removeSong(event) {
    // Get the list item that contains the button that was clicked
    const listItem = event.target.closest('li');
  
    // Get the song id from the data attribute
    const songId = listItem.dataset.songId.toString();
  
    // Remove the song from the playlist in the DOM
    playlist.removeChild(listItem);
  
    // Send a DELETE request to the Flask server to remove the song from the database
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
  
  // Add a click event listener to the playlist to handle removing songs
  playlist.addEventListener('click', function(event) {
    const clickedElement = event.target;
  
    // Check if the clicked element or one of its ancestors with the .remove-button class is the button itself
    if (clickedElement.matches('.remove-button') || clickedElement.closest('.remove-button')) {
      removeSong(event);
    }
  });
