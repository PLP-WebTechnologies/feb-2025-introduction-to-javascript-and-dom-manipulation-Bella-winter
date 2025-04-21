// script.js
// This script handles the functionality of the buttons in the HTML file
// and manipulates the DOM elements accordingly.
// Change Text
document.getElementById("changeTextBtn").addEventListener("click", function () {
    const text = document.getElementById("text");
    text.textContent = "  Code magic in action!!";
  });
  
  // Toggle Style
  document.getElementById("toggleStyleBtn").addEventListener("click", function () {
    const text = document.getElementById("text");
  });
  
  // Add Element
  document.getElementById("addElementBtn").addEventListener("click", function () {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "Another thought pops in!";
    newParagraph.classList.add("new-item");
    document.getElementById("content").appendChild(newParagraph);
  });
  
  // Remove Element
  document.getElementById("removeElementBtn").addEventListener("click", function () {
    const newItems = document.querySelectorAll(".new-item");
    if (newItems.length > 0) {
      newItems[newItems.length - 1].remove();
    } else {
      alert("No new elements to remove.");
    }
  });
  

  
  