// Function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// On page load, try to set the API key input field from the cookie
window.onload = function() {
    const savedApiKey = getCookie('apiKey');
    if (savedApiKey) {
        document.getElementById('apiKey').value = savedApiKey;
    }
};

// Save
function saveApiKey() {
    let apiKey = document.getElementById('apiKey').value;

    // If the API key input is empty, try retrieving the saved API key from cookies
    if (!apiKey) {
        apiKey = getCookie('apiKey');
    } else {
        // Save the API key into cookies for 30 days if it's not empty
        setCookie('apiKey', apiKey, 30);
    }
}