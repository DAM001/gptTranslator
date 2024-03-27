async function sendMessage() {
    const apiKey = document.getElementById('apiKey').value;
    const userPrompt = "Translate the following text to english: " + document.getElementById('message').value;
    const url = 'https://api.openai.com/v1/chat/completions';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
    };

    // Directly include the current user message in the request body
    const requestBody = {
        messages: [{ role: "user", content: userPrompt }],
        model: "gpt-3.5-turbo",
        temperature: 1,
    };

    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestBody),
    };

    try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();

        if (data.choices && data.choices.length > 0 && data.choices[0].message) {
            let message = data.choices[0].message.content; // Assuming the API response structure fits this path
            console.log(message);

            // Display the received message in the 'answer' paragraph
            document.getElementById('answer').textContent = message;
        }
    } catch (error) {
        console.error('Error:', error);
        // Display the error message in the 'answer' paragraph
        document.getElementById('answer').textContent = "Error making the request. Check the console.";
    }

    saveApiKey();
}