const buttons = document.querySelectorAll('li button');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        const listItem = this.parentNode; // Get the parent list item
        const title = listItem.querySelector('h3').textContent.trim(); // Get the title text
        const duration = listItem.querySelector('p').textContent.trim(); // Get the duration text
        const songId = this.getAttribute('id'); // Get the song ID

        // Create an object with the data to be sent
        const data = {
            title: title,
            duration: duration,
            id: songId
        };

        // Make a POST request to the Flask server with the data in the body
        fetch('/endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    console.log('Data sent successfully');
                } else {
                    console.log('Error sending data');
                }
            })
            .catch(error => {
                console.log('Error sending data:', error);
            });
    });
});
