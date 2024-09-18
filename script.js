function displayDateTime() {
    const now = new Date();

    // Get date components
    const day = now.getDate();
    const month = now.getMonth() +1; // Months are 0-based
    const year = now.getFullYear();

    // Get time components
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format date and time strings
    const dateString = `${day}/${month}/${year}`;
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Update the clock element in the HTML
    document.getElementById("clock").textContent = `${dateString} ${timeString}`;
}

// Call the displayDateTime function initially
displayDateTime();

// Update the clock every second
setInterval(displayDateTime, 1000);