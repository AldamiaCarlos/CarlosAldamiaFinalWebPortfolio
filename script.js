/* ===== Loading Screen Logic ===== */
const loader = document.getElementById('loader');
const loaderBar = document.getElementById('loaderProgress');
const loaderText = document.getElementById('loaderText');

let loadProgress = 0;

// Fake smooth loading (real loading is inconsistent)
const loadingInterval = setInterval(() => {
  if (loadProgress < 90) {
    loadProgress += Math.random() * 8;
    loadProgress = Math.min(loadProgress, 90);
    loaderBar.style.width = loadProgress + '%';
    loaderText.textContent = `Loading ${Math.floor(loadProgress)}%`;
  }
}, 200);

// When everything is ready
window.addEventListener('load', () => {
  clearInterval(loadingInterval);
  loaderBar.style.width = '100%';
  loaderText.textContent = 'Loading 100%';

  setTimeout(() => {
    loader.classList.add('hide');
    setTimeout(() => loader.remove(), 600);
  }, 400);
});


/* Back-to-Top Button */
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backTop.classList.add('show');
  } else {
    backTop.classList.remove('show');
  }
});

/* Theme Toggle */
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const initialImage = document.getElementById('initialImage');

const initialImageDark = 'https://github.com/AldamiaCarlos/image-src-carlos/blob/main/tug1.jpg?raw=true';
const initialImageLight = 'https://github.com/AldamiaCarlos/image-src-carlos/blob/main/carlos1.jpg?raw=true';

function updateInitialImage() {
  if (html.getAttribute('data-theme') === 'dark') {
    initialImage.src = initialImageDark;
  } else {
    initialImage.src = initialImageLight;
  }
}

// Set the initial theme based on local storage or default to dark
if (localStorage.getItem('theme') === 'light') {
  html.setAttribute('data-theme', 'light');
  updateInitialImage();
} else {
  html.setAttribute('data-theme', 'dark');
  updateInitialImage();
}

// Add event listener to toggle theme
themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', nextTheme);
  localStorage.setItem('theme', nextTheme);
  updateInitialImage();
});




/* Console Easter Egg */
console.log("%c🎆🎇🎆 Happy New Year, Sir! 🎆🎇🎆", "color:#ff0040;font-size:20px;font-weight:bold;text-shadow: 2px 2px 5px #fff, -2px -2px 5px #fff;");
for (let i = 0; i < 5; i++) {
  console.log("%c🎆🎇🎆🎇🎆", `color:hsl(${Math.random() * 360}, 100%, 50%); font-size:${12 + Math.random() * 12}px`);
}