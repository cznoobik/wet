// Najdeme všechny obrázky v galerii
const galleryItems = document.querySelectorAll('.gallery-item');

function toggleMenu() {
    const dropdown = document.querySelector(".dropdown-menu");
    dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
}


// Najdeme nebo vytvoříme fullscreen wrapper
let fullscreenWrapper = document.querySelector('.fullscreen-img-wrapper');
if (!fullscreenWrapper) {
    fullscreenWrapper = document.createElement('div');
    fullscreenWrapper.classList.add('fullscreen-img-wrapper');
    document.body.appendChild(fullscreenWrapper);
}

// Přidání event listeneru na každý obrázek
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        const text = item.querySelector('.hidden-text').textContent;

        // Vyčištění fullscreen wrapperu
        fullscreenWrapper.innerHTML = '';

        // Vytvoření obrázku
        const fullscreenImage = document.createElement('img');
        fullscreenImage.src = imgSrc;

        // Vytvoření textu
        const fullscreenText = document.createElement('div');
        fullscreenText.classList.add('fullscreen-text');
        fullscreenText.textContent = text;

        // Přidání prvků do wrapperu
        fullscreenWrapper.appendChild(fullscreenImage);
        fullscreenWrapper.appendChild(fullscreenText);

        // Zobrazení fullscreen wrapperu
        fullscreenWrapper.classList.add('active');
        fullscreenWrapper.style.display = 'flex'; // Zajistí, že se objeví

        // Zavření fullscreen po kliknutí na něj
        fullscreenWrapper.addEventListener('click', () => {
            fullscreenWrapper.classList.remove('active');
            fullscreenWrapper.style.display = 'none';
        });
    });
});



//experimental

// Funkce pro získání jména z inputu a uložit do localStorage
const nameInput = document.getElementById('nameInput');
const userNameSpan = document.getElementById('userName');
const greeting = document.getElementById('greeting');

// Načti uložené jméno z localStorage
const savedName = localStorage.getItem('name');
if (savedName) {
    userNameSpan.textContent = savedName;
}

// Ulož jméno do localStorage, když uživatel napíše
nameInput.addEventListener('input', () => {
    const name = nameInput.value;
    userNameSpan.textContent = name;
    localStorage.setItem('name', name);
});

// Funkce pro zobrazení aktuálního data a času
function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString('cs-CZ');
    const time = now.toLocaleTimeString('cs-CZ');
    document.getElementById('datetime').textContent = `Datum: ${date} | Čas: ${time}`;
}
setInterval(updateDateTime, 1000);

// Funkce pro zobrazení mapy
const locationButton = document.getElementById('locationButton');
const mapContainer = document.getElementById('mapContainer');

locationButton.addEventListener('click', () => {
    locationButton.disabled = true;
    getLocation();
});

// Funkce pro získání geografických souřadnic
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        mapContainer.innerHTML = "Geolokace není podporována tímto prohlížečem.";
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "300px";  
    
    mapContainer.innerHTML = ""; // Vyčistí předchozí obsah
    mapContainer.appendChild(iframe);
    mapContainer.classList.remove('hidden');
}


function showError(error) {
    mapContainer.innerHTML = "Došlo k chybě při získávání vaší polohy.";
}

// Funkce pro restart webu
const restartButton = document.getElementById('restartButton');

restartButton.addEventListener('click', () => {
    const elements = document.querySelectorAll('body > *');
    elements.forEach(element => {
        element.classList.add('destroyed');
    });
    setTimeout(() => {
        document.body.innerHTML = '';
    }, 2000);
});

// EXPERIMENTAL P5EKLIK BAREV

function changeMode(mode) {
    // Najdeme nebo vytvoříme <link> pro změnu stylu
    let linkElement = document.getElementById("mode-stylesheet");

    // Pokud <link> ještě neexistuje, vytvoříme nový
    if (!linkElement) {
        linkElement = document.createElement("link");
        linkElement.id = "mode-stylesheet";
        linkElement.rel = "stylesheet";
        document.head.appendChild(linkElement);
    }

    // Změníme href atribut podle hodnoty mode
    if (mode === "dark") {
        linkElement.href = "Style/DarkMode.css";
    } else if (mode === "light") {
        linkElement.href = "Style/LightMode.css";
    } else if (mode === "true") {
        linkElement.href = "Style/TrueMode.css";
    } else {
        console.log("Neplatný mód");
    }
}