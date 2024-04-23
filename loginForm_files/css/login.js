/* ログイン */
async function doGet() {
    try {
        const WebAppUrl = 'https://script.google.com/macros/s/AKfycbwuY3rui2stn9OvG4aVYSuZqQMQYa9TrAfHVJX1byXFSfhwWU3uclpYFQ37jsPzpdM/exec';
        const response = await fetch(WebAppUrl + '?userId=' + userId + '&password=' + password);
        const data = await response.json();
        // Process data
    } catch (error) {
        // Handle errors
    }
}