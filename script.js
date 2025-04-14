function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


function showPopup(title, description) {
  // Set title and content (preserving HTML formatting)
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalContent').innerHTML = description;
  
  // Show the modal with fade-in effect
  document.getElementById('modalOverlay').classList.add('active');
}

// Close modal when clicking on the close (×) icon
document.getElementById('closeModal').addEventListener('click', function() {
  document.getElementById('modalOverlay').classList.remove('active');
});

// Close modal when clicking on the new "Close" button
document.getElementById('modalCloseBtn').addEventListener('click', function() {
  document.getElementById('modalOverlay').classList.remove('active');
});

// Optional: Close modal when clicking outside the modal content
document.getElementById('modalOverlay').addEventListener('click', function(e) {
  if (e.target === this) {
    document.getElementById('modalOverlay').classList.remove('active');
  }
});