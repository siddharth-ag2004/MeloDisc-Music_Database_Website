const buttons = document.querySelectorAll('li button');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        const listItem = this.parentNode; 
        const title = listItem.querySelector('h3').textContent.trim(); 
        const duration = listItem.querySelector('p').textContent.trim(); 
        const songId = this.getAttribute('id'); 

        const data = {
            title: title,
            duration: duration,
            id: songId
        };

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
