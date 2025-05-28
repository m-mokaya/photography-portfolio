// Getting hamburguer menu in small screens
const menu = document.getElementById("menu");
const ulMenu = document.getElementById("ulMenu");

function menuToggle() {
  // menu.classList.toggle("h-32"); // Remove this line
  if (menu.classList.contains('h-auto') || (menu.style.height && menu.style.height !== '0px')) {
    menu.style.height = '0px';
    menu.classList.remove('h-auto');
  } else {
    // Temporarily set to auto to calculate the scroll height
    menu.style.height = 'auto';
    const scrollHeight = menu.scrollHeight;
    menu.style.height = '0px'; // Reset to 0 before transitioning
    // Force a reflow, so the transition is applied
    void menu.offsetWidth;
    menu.style.height = scrollHeight + 'px';
    menu.classList.add('h-auto'); // Add a class to indicate it's open
  }
}

// Browser resize listener
window.addEventListener("resize", menuResize);

// Resize menu if user changing the width with responsive menu opened
function menuResize() {
  // First get the size from the window
  const window_size = window.innerWidth || document.body.clientWidth;
  if (window_size > 768) { // Changed from 640 to 768 (md breakpoint)
    // menu.classList.remove("h-32"); // Remove this
    if (menu.classList.contains('h-auto') || (menu.style.height && menu.style.height !== '0px')) {
      menu.style.height = ''; // Reset height for desktop view
      menu.classList.remove('h-auto');
    }
  }
}
