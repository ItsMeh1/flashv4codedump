// Initialize Icons
lucide.createIcons();

// Handle Active State (Click)
const navItems = document.querySelectorAll('.nav-item');
        
navItems.forEach(item => {
  item.addEventListener('click', () => {
// Remove active class from all items
   navItems.forEach(nav => nav.classList.remove('active'));
// Add active class to clicked item
  item.classList.add('active');
  });
});

// EVERYTHING ELSE!!!
// declerations
  // Declarations of buttons via sidebar
const homeBtn = document.getElementById("homeBtn")
const gamesBtn = document.getElementById("gamesBtn")
const browserBtn = document.getElementById("browserBtn")
const videoBtn = document.getElementById("moviesBtn")
const musicBtn = document.getElementById("musicBtn")
const aiButton = document.getElementById("aiBtn")
const chatroomBtn = document.getElementById("chatroomBtn")
// We might either keep a button for either user via Flash itself, mobify, or just an info/credits page.
const settingsBtn = document.getElementById("settingsBtn")

  // Declarations of views
const homeFrame = document.getElementById("homeFrame")
const gamesFrame = document.getElementById("gamesFrame")
const moviesFrame = document.getElementById("moviesFrame")
const moviesIFRAME = document.getElementById("moviesiFrame") // this is the actual iframe for settings changes
const homeIFRAME = document.getElementById("homeIFRAME")
const settingsFrame = document.getElementById("settingsFrame")
const errorFrame = document.getElementById("errorFrame")
const errorIFRAME = document.getElementById("errorIFRAME")

// functions

function openPanel(p) { // function to open a specific view (view being block since block is og css display)
  let panel = p.toString()
  panel = panel.toLowerCase()

  // hide everything

  homeFrame.style.display = "none";
  gamesFrame.style.display = "none";
  moviesFrame.style.display = "none";
  settingsFrame.style.display = "none";
  errorFrame.style.display = "none";

  if (panel === "games") {
    gamesFrame.style.display = "block"
  } else if (panel === "home") {
    homeFrame.style.display = "block"
    homeIFRAME.src = "home.html"
  } else if (panel === "movies") {
    moviesFrame.style.display = "block"
  } else if (panel === "settings") {
    settingsFrame.style.display = "block"
  } else {
    errorFrame.style.display = "block"
    errorIFRAME.src = "error.html"
  }
}

function setStreamingSource(element, url) {
    // 1. Reset all buttons in this specific grid
    const container = document.getElementById('movie-provider-list');
    container.querySelectorAll('.provider-btn').forEach(btn => btn.classList.remove('active'));

    // 2. Highlight the clicked button
    element.classList.add('active');

    // 3. Update the movie iframe instantly
    if (moviesIFRAME) {
        moviesIFRAME.src = url;
    }

    // 4. Save to memory
    localStorage.setItem('selectedMovieSource', url);
    console.log("Source updated to: " + url);
}

// init (keep thy section last)
openPanel("home") // to reset all views cause ykyk