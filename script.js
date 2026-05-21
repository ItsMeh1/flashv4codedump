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
const browserFrame = document.getElementById("browserFrame")
const gamesFrame = document.getElementById("gamesFrame")
const moviesFrame = document.getElementById("moviesFrame")
const moviesIFRAME = document.getElementById("moviesiFrame") // this is the actual iframe for settings changes
const homeIFRAME = document.getElementById("homeIFRAME")
const settingsFrame = document.getElementById("settingsFrame")
const errorFrame = document.getElementById("errorFrame")
const errorIFRAME = document.getElementById("errorIFRAME")
const creditsFrame = document.getElementById("creditsFrame")
const musicFrame = document.getElementById("musicFrame")
const aiFrame = document.getElementById("aiFrame")
const socialFrame = document.getElementById("socialFrame")

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
  browserFrame.style.display = "none";
  creditsFrame.style.display = "none";
  musicFrame.style.display = "none";
  aiFrame.style.display = "none";
  socialFrame.style.display = "none";

  if (panel === "games") {
    gamesFrame.style.display = "block"
  } else if (panel === "home") {
    homeFrame.style.display = "block"
    homeIFRAME.src = "home.html"
  } else if (panel === "movies") {
    moviesFrame.style.display = "block"
  } else if (panel === "settings") {
    settingsFrame.style.display = "block"
  } else  if (panel === "browser") {
    browserFrame.style.display = "block"
  } else  if (panel === "credits") {
    creditsFrame.style.display = "block"
  } else  if (panel === "music") {
    musicFrame.style.display = "block"
  } else  if (panel === "ai") {
    aiFrame.style.display = "block"
  } else  if (panel === "social") {
    socialFrame.style.display = "block"
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

function applySavedSource() {
    // 1. Check if a source is saved in localStorage
    const savedUrl = localStorage.getItem('selectedMovieSource');

    // 2. If it exists, apply it to the iframe
    if (savedUrl && moviesIFRAME) {
        moviesIFRAME.src = savedUrl;
        console.log("Saved source found and applied: " + savedUrl);
    }
}

// Run this function immediately when the page loads
window.addEventListener('DOMContentLoaded', applySavedSource);

/* --- HOME FRAME EASTER EGG SCRIPT --- */
document.addEventListener("DOMContentLoaded", () => {
    const phrases = [
        "﷽",
        "Blue is the fastest frequency",
        "Now with zero carbon footprint lmao",
        "It just works. Usually.",
        "The magic of v4",
        "Designed in Cupertino. Sort of.",
        "Did some1 say movies?",
        "ok lets play games",
        "so no one saw v3 but that doesn't mean it doesn't exist because you haven't seen it so there isn't any proof against it...",
        "Made by Server",
        "PLEASE stop the wars"
    ];

    let index = 0;
    const textEl = document.getElementById('easter-egg');

    function rotateText() {
        if (!textEl) return;
        textEl.classList.add('fade');
        
        setTimeout(() => {
            index = (index + 1) % phrases.length;
            textEl.innerText = phrases[index];
            textEl.classList.remove('fade');
        }, 500);
    }

    // Only run the interval if the easter egg element exists on the page
    if (textEl) {
        setInterval(null, 4000)
        setInterval(rotateText, 4000);
        textEl.innerText = phrases[Math.floor(Math.random() * phrases.length)];
    }
});

/* --- BROWSER ENGINE --- */
let tabCounterID = 0;
let activeTabID = null;

function createNewTab() {
    tabCounterID++;
    const currentID = tabCounterID;
    const tabList = document.getElementById('tab-list');
    const frameContainer = document.getElementById('frame-container');

    const newTab = document.createElement('div');
    newTab.className = 'tab';
    newTab.id = `tab-${currentID}`;
    newTab.innerHTML = `
        <i class="fa-solid fa-bolt"></i>
        <span>New Tab</span>
        <i class="fa-solid fa-xmark close" onclick="closeTab(${currentID}, event)"></i>
    `;
    newTab.onclick = () => switchTab(currentID);

    tabList.insertBefore(newTab, tabList.lastElementChild);

    const newFrame = document.createElement('iframe');
    newFrame.className = 'browser-frame';
    newFrame.id = `frame-${currentID}`;
    newFrame.src = "about:blank";

    frameContainer.appendChild(newFrame);
    switchTab(currentID);
}

function switchTab(id) {
    activeTabID = id;
    const ntp = document.getElementById('ntp');
    const urlInput = document.getElementById('url-input');

    document.querySelectorAll('.browser-frame').forEach(frame => frame.style.display = 'none');
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));

    const targetTab = document.getElementById(`tab-${id}`);
    if (targetTab) targetTab.classList.add('active');

    const targetFrame = document.getElementById(`frame-${id}`);
    if (targetFrame.src === "about:blank" || targetFrame.src === window.location.href) {
        ntp.style.display = 'flex';
        urlInput.value = "";
    } else {
        ntp.style.display = 'none';
        targetFrame.style.display = 'block';
        urlInput.value = targetFrame.src;
    }
}

function navigate(query) {
    if (!activeTabID || !query) return;
    const ntp = document.getElementById('ntp');
    const urlInput = document.getElementById('url-input');
    let finalUrl = query;

    if (!query.includes('.') || query.includes(' ')) {
        finalUrl = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
    } else if (!query.startsWith('http')) {
        finalUrl = `https://${query}`;
    }

    // NOTE: Many sites block iframes. If pages don't load, you may need to 
    // re-add the proxy base: https://cherrion.top/scramjet/
    
    ntp.style.display = 'none';
    const frame = document.getElementById(`frame-${activeTabID}`);
    frame.style.display = 'block';
    frame.src = finalUrl;
    urlInput.value = finalUrl;
    
    const tabText = document.querySelector(`#tab-${activeTabID} span`);
    if(tabText) tabText.innerText = query.substring(0, 15) + (query.length > 15 ? '...' : '');
}

function closeTab(id, event) {
    event.stopPropagation();
    document.getElementById(`tab-${id}`).remove();
    document.getElementById(`frame-${id}`).remove();
    if (activeTabID === id) {
        const remainingTabs = document.querySelectorAll('.tab');
        if (remainingTabs.length > 0) {
            switchTab(remainingTabs[0].id.split('-')[1]);
        } else {
            createNewTab();
        }
    }
}

// Global listeners for the browser section
document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('url-input');
    const mainSearch = document.getElementById('main-search');
    if(urlInput) urlInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') navigate(urlInput.value); });
    if(mainSearch) mainSearch.addEventListener('keydown', (e) => { if (e.key === 'Enter') navigate(mainSearch.value); });
    
    // Open initial tab
    createNewTab();
});

function launchAboutBlank() {
    // 1. Open the new blank window
    const win = window.open('about:blank', '_blank');
    
    if (!win) {
        alert("Pop-up blocked! Please allow pop-ups to launch Flash v4 in stealth mode.");
        return;
    }

    // 2. Get the entire HTML content of your current page
    const content = document.documentElement.outerHTML;

    // 3. Set the new window's document content
    win.document.open();
    win.document.write(content);
    win.document.close();

    // 4. Optional: Redirect the original page to Google or close it
    // window.location.replace("https://www.google.com");
}

// init (keep thy section last)
openPanel("home") // to reset all views cause ykyk
applySavedSource()
