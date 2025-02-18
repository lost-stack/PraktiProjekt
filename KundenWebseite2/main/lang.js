var imgElement = document.getElementById("language");

function openLanguageMenu() {
  if (imgElement.src.endsWith("/img/gerFlag.png")) {
    setLanguage("en");
  } else {
    setLanguage("de");
  }
 //updateLangFlag();
 // inhaltAnpassen();
 // bilderAnpassen();
}

function updateLangFlag() {
  if (getLanguage() === "de") {
    imgElement.src = "/img/gerFlag.png"; // Deutsch
  } else {
    imgElement.src = "/img/gerFlag.png"; // Englisch
  }
}

function setLanguage(language) {
  localStorage.setItem("language", language);
}

function getLanguage() {
  return localStorage.getItem("language");
}

// Beim Laden der Seite die Sprache setzen und den Inhalt anpassen
window.onload = function () {
  if (getLanguage() === null) {
    setLanguage("en");
  }

 // updateLangFlag();
 // inhaltAnpassen();
 // bilderAnpassen();
};

// Funktion zum Anpassen des Inhalts
function inhaltAnpassen() {
  var offersHeader = document.getElementById("offers");
  var usHeader = document.getElementById("us");
  var contactHeader = document.getElementById("contact");
  var contactH = document.getElementById("contactH1");
  var homeP1 = document.getElementsById("homeP1");
  var homeP2 = document.getElementById("homeP2");
  // Lade die JSON-Datei mit den Übersetzungen
  fetch('language.json')
    .then(response => response.json())
    .then(data => {
      var language = getLanguage() || "en"; // Wenn keine Sprache gesetzt ist, Standard auf Englisch setzen
      offersHeader.textContent = data[language].offers;
      usHeader.textContent = data[language].us;
      contactHeader.textContent = data[language].contact;
      contactH.textContent = data[language].contactH;
      homeP1.textContent = data[language].homeP1;
      homeP2.innerHTML = data[language].homeP2;
    })
    .catch(error => {
      console.error("Fehler beim Laden der Übersetzungen:", error);
    });
}
// Funktion, um die Bilder je nach Sprache anzupassen
function bilderAnpassen() {
  var easterOffer = document.getElementById("easter");
  if (getLanguage() === "de") {
    easterOffer.src = "/img/osterAngebot.png";
  } else if (getLanguage() === "en") {
    easterOffer.src = "/img/osterAngebotEN.jpg";
  }
}
