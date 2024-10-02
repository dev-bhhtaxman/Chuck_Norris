const paragraphOutput = document.getElementById('output');


async function makeApiCall() {
    const url = 'https://api.chucknorris.io/jokes/random'; // Replace with your API URL

    try {
        const response = await fetch(url, {
            method: 'GET', // Use 'POST', 'PUT', 'DELETE', etc. for other requests
            headers: {
                'Content-Type': 'application/json'
                // Add other headers here if needed
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json(); // Parse JSON response
        console.log(data); // Log the response data
        paragraphOutput.innerHTML = data.value
    } catch (error) {
        console.error('Error during API call:', error);
        alert('API call failed');
    }
}