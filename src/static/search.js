// const searchInput = document.getElementById('search-input');
// const searchBtn = document.getElementById('search-btn');
// const searchResults = document.getElementById('search-results');

// searchBtn.addEventListener('click', function(e) {
//   e.preventDefault();
//   const searchTerm = searchInput.value.trim();
//   if (searchTerm === '') {
//     searchResults.innerHTML = 'Please enter a search term.';
//     return;
//   }
//   const url = `https://itunes.apple.com/search?term=${searchTerm}&limit=10`;
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       if (data.resultCount === 0) {
//         searchResults.innerHTML = 'No results found.';
//         return;
//       }
//       let html = '';
//       html +=`<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>`
//       data.results.forEach(result => {
//         const trackName = result.trackName;
//         const artistName = result.artistName;
//         const artworkUrl = result.artworkUrl100;
//         const previewUrl = result.previewUrl;
//         if (previewUrl) { 
//           html += `
//           <div style="display: flex;">
//           <img src="${artworkUrl}" style="border-radius: 15px; flex: 1; margin-right: 30px; margin-bottom: 30px; border: 5px solid #555" alt="${trackName} - ${artistName}">
//           <div style="flex: 1;">
//           <br><br><br><br>
//             <div style="color: white; font-weight: bold;text-decoration: underline;">${trackName}</div>
//             <div style="color: white; font-weight: bold;text-decoration: underline;">${artistName}</div>
//             <audio src="${previewUrl}" controls></audio>  
//           </div>
//         </div>        
//           `;
//         } else {
//           html += `
//             <div>
//               <img src="${artworkUrl}" style="border-radius: 15px; flex: 1;" alt="${trackName} - ${artistName}">
//               <div>${trackName}</div>
//               <div>${artistName}</div>
//               <div>No preview available</div>
//             </div>
//           `;
//         }
//       });
//       searchResults.innerHTML = html;
//     })
//     .catch(error => {
//       searchResults.innerHTML = 'An error occurred. Please try again later.';
//       console.error(error);
//     });
// });


// const searchInput = document.getElementById('search-input');
// const searchBtn = document.getElementById('search-btn');
// const searchResults = document.getElementById('search-results');

// searchBtn.addEventListener('click', function(e) {
//   e.preventDefault();
//   const searchTerm = searchInput.value.trim();
//   if (searchTerm === '') {
//     searchResults.innerHTML = 'Please enter a search term.';
//     return;
//   }
//   url = `https://itunes.apple.com/search?term=${searchTerm}&entity=musicTrack&limit=10`;
//   searchResults.innerHTML = ''
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       if (data.resultCount === 0) {
//         searchResults.innerHTML = 'No results found.';
//         return;
//       }
//       let html = '';
//       data.results.forEach(result => {
//         const trackName = result.trackName;
//         const artistName = result.artistName;
//         const artworkUrl = result.artworkUrl100;
//         const previewUrl = result.previewUrl;
//         if (previewUrl) { 
//           html += `
//           <div style="display: flex; align-items: center; margin-bottom: 30px; margin-left:720px">
//           <img src="${artworkUrl}" style="border-radius: 15px; margin-right: 30px; border: 3px solid #555; width: 250px; height: 250px;" alt="${trackName} - ${artistName}">
//           <div style="color: white; flex: 1;">
//             <div style="font-weight: bold; font-size: 25px; margin-bottom: 10px; color: yellow">${trackName}</div>
//             <div style="font-weight: bold; font-size: 25px; margin-bottom: 15px; color: yellow"">${artistName}</div>
//             <audio src="${previewUrl}" controls></audio> 
//           </div>
//         </div>
             
//           `;
//         } else {
//           html += `
//           <div style="display: flex; align-items: center; margin-bottom: 30px; margin-left:720px">
//             <img src="${artworkUrl}" style="border-radius: 15px; margin-right: 30px; border: 3px solid #555; width: 250px; height: 250px;" alt="${trackName} - ${artistName}">
//             <div style="color: white; flex: 1;">
//             <div style="font-weight: bold; font-size: 25px; margin-bottom: 10px;  ">${trackName}</div>
//             <div style="font-weight: bold; font-size: 25px; margin-bottom: 15px;">${artistName}</div>
//             <div><h2 style="color: red">No preview available<h2></div> 
//             </div>
//           `;
//         }
//       });
//       searchResults.innerHTML += html;
//     })
//     .catch(error => {
//       searchResults.innerHTML = 'An error occurred. Please try again later.';
//       console.error(error);
//     });
// });



const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchResults = document.getElementById('search-results');
const explicitSelect = document.getElementById('explicit-filter');
const durationSelect = document.getElementById('duration-filter');
const clearBtn = document.getElementById('clear-btn');
const applyBtn = document.getElementById('filter-btn');


let clear = 1;

clearBtn.addEventListener('click', function() {
  clear = 1;
});

applyBtn.addEventListener('click', function() {
  clear = 0;
});

searchBtn.addEventListener('click', function(e) {
  e.preventDefault();
  const searchTerm = searchInput.value.trim();
  if (searchTerm === '') {
    searchResults.innerHTML = '<span style="font-size: 50px; color: white; display: flex; align-items: center; justify-content: center; margin-bottom: 40px;">Please Enter A Search Term.</span>';
    return;
  }
  // const url = `https://itunes.apple.com/search?term=${searchTerm}&entity=musicTrack&explicit=no&limit=10`;
  let url = `https://itunes.apple.com/search?term=${searchTerm}&entity=musicTrack&limit=10`;
  selectedValue = explicitSelect.value;
  selectedDuraction = durationSelect.value;

  if(clear == 1)
  {
    selectedValue = "all";
    selectedDuraction = 15;
  }

  // if (selectedValue === 'explicit' || clear==1) {
  //   url += '&explicit=yes';
  // } else if (selectedValue === 'cleaned') {
  //   url += '&explicit=no';
  // }

    searchResults.innerHTML = '' 
    
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data.results);
      tracks=[];
      tracks = data.results;
      if (data.resultCount === 0) {
        searchResults.innerHTML = 'No results found.';
        return;
      }
      let html = '';
      var count = 0;
      var enter = 0;
      for (let i = 0; i < 10; i++) {
        const result = data.results[i];

        // console.log(tracks[count].trackTimeMillis)
        if((tracks[i].trackTimeMillis < selectedDuraction*60*1000) && ((selectedValue === 'all') || ((selectedValue === 'explicit') && (tracks[i].trackExplicitness === "explicit")) || ((selectedValue === 'cleaned') && (tracks[i].trackExplicitness === 
          "notExplicit" || tracks[i].trackExplicitness === "cleaned"))))
        {
        count++;
        enter = 1;
        const trackName = result.trackName;
        const artistName = result.artistName;
        const artworkUrl = result.artworkUrl100;
        const previewUrl = result.previewUrl;
        if (previewUrl) { 
          html += `
          <div style="display: flex; align-items: center; margin-left: 500px; margin-right: 500px; margin-bottom: 30px; background-color: hsla(9, 21%, 5%, 0.5); padding-left: 150px; padding-top: 20px; padding-bottom: 20px; padding-right: 350px;">
          <img src="${artworkUrl}" style="border-radius: 15px; margin-right: 30px; border: 3px solid #555; width: 250px; height: 250px;" alt="${trackName} - ${artistName}">
          <div style="color: white; flex: 1;">
          <div style="font-weight: bold; font-size: 25px; margin-bottom: 10px; color: yellow;">${trackName}</div>
          <br>
          <div style="font-weight: bold; font-size: 25px; margin-bottom: 15px; color: yellow; ">Artist/Album : ${artistName}</div>
          <br>
          <audio src="${previewUrl}" controls ></audio>
          </div>
        </div>
             
          `;
        } else {
          html += `
          <div style="display: flex; align-items: center; margin-bottom: 30px; margin-left:720px">
            <img src="${artworkUrl}" style="border-radius: 15px; margin-right: 30px; border: 3px solid #555; width: 250px; height: 250px;" alt="${trackName} - ${artistName}">
            <div style="color: white; flex: 1;">
            <div style="font-weight: bold; font-size: 25px; margin-bottom: 10px;  ">${trackName}</div>
            <div style="font-weight: bold; font-size: 25px; margin-bottom: 15px;">${artistName}</div>
            <div><h2 style="color: red">No preview available<h2></div> 
            </div>
          `;
        }
        // if (count == 10)
        //   break; 
      }
      ;
    }
      searchResults.innerHTML += html;
      if(enter == 0)
      {
        searchResults.innerHTML = '<span style="font-size: 50px; color: red; display: flex; align-items: center; justify-content: center; margin-bottom: 40px;">No Results found.</span>';
        // searchResults.innerHTML = 'No Results found'; 
      }
    })
    .catch(error => {
      searchResults.innerHTML = '<span style="font-size: 50px; color: red; display: flex; align-items: center; justify-content: center; margin-bottom: 40px;">No Results found.</span>';
      console.error(error);
    });
});
