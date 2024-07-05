function sendMessage() {
    var userInput = document.getElementById("userInput").value;
    var responseElement = document.getElementById("response");

    // Create a new response element
    var newResponse = document.createElement("div");
    newResponse.classList.add("response-message");
    newResponse.textContent = userInput;

    // Append the new response to the response container
    responseElement.appendChild(newResponse);

    // Show the response with animation
    newResponse.style.display = "block";

    // Clear the input field
    document.getElementById("userInput").value = "";

    // Scroll to the bottom of response container
    responseElement.scrollTop = responseElement.scrollHeight;
}
