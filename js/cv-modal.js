/* ---------------------------------
CV MODAL FUNCTIONALITY
--------------------------------- */

function openCVModal() {
   document.getElementById("cvModal").classList.add("active");
}

function closeCVModal() {
   document.getElementById("cvModal").classList.remove("active");
   // Reset maximized state when closing
   document.querySelector(".cv-modal-content").classList.remove("maximized");
}

function toggleMaximize() {
   document.querySelector(".cv-modal-content").classList.toggle("maximized");
}

// Close modal when clicking outside of it
window.onclick = function(event) {
   var modal = document.getElementById("cvModal");
   if (event.target == modal) {
      closeCVModal();
   }
}

// Event listeners for buttons
document.addEventListener("DOMContentLoaded", function() {
   document.querySelector(".cv-close").addEventListener("click", closeCVModal);
   document.querySelector(".cv-maximize").addEventListener("click", toggleMaximize);
});
