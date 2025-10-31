const infoText = document.getElementById('infoText');
const nearbyList = document.getElementById('nearbyList');

function recognizeImage() {
  // Simulate image recognition (mock)
  infoText.textContent = "Recognizing monument...";
  setTimeout(() => {
    infoText.textContent =
      "Monument identified: Taj Mahal 🕌\nBuilt in 1632 by Mughal Emperor Shah Jahan in memory of Mumtaz Mahal.";
    showNearbyAttractions();
  }, 1500);
}

function translateText() {
  const lang = document.getElementById('languageSelect').value;
  const text = infoText.textContent;

  // Simple demo translation (mock)
  const translations = {
    hi: "स्मारक की पहचान: ताजमहल 🕌, 1632 में शाहजहाँ द्वारा मुमताज़ महल की याद में बनवाया गया।",
    fr: "Monument identifié : Taj Mahal 🕌, construit en 1632 par Shah Jahan à la mémoire de Mumtaz Mahal.",
    es: "Monumento identificado: Taj Mahal 🕌, construido en 1632 por Shah Jahan en memoria de Mumtaz Mahal.",
  };

  
   

  infoText.textContent = translations[lang] || text;
}

function speakText() {
  const text = infoText.textContent;
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = document.getElementById('languageSelect').value;
  speech.rate = 1;
  window.speechSynthesis.speak(speech);
}

function showNearbyAttractions() {
  const places = [
    "Agra Fort",
    "Charminar",
    "Red fort",
    "Indian gate"
  ];
  nearbyList.innerHTML = "";
  places.forEach(p => {
    const li = document.createElement("li");
    li.textContent = p;
    nearbyList.appendChild(li);
  });
}