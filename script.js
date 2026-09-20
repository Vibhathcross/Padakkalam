
//Gallary Zoom
var images = document.querySelectorAll(".gallery img");

for (var i = 0; i < images.length; i++) {

    images[i].addEventListener("click", function() {

        this.classList.toggle("zoom");

    });

}




//Schedule page

function loadEvent(filename) {
    try {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "data/" + filename, true);

        xhr.onload = function() {
            if (xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);
                document.getElementById("eventDetails").innerHTML = data.content;
            } else {
                showFallback();
            }
        };

        xhr.onerror = function() {
            showFallback();
        };

        xhr.send();
    } catch (e) {
        showFallback();
    }
}

function showFallback() {
    document.getElementById("eventDetails").innerHTML = "Failed to load details...";
}


// Access buttons (only run if they exist — schedule page)
var pookalam = document.getElementById("pookalamBtn");
var games = document.getElementById("gamesBtn");
var sadhya = document.getElementById("sadhyaBtn");
var cultural = document.getElementById("culturalBtn");

if (pookalam) {
    pookalam.addEventListener("click", function() {
        loadEvent("pookalam.json");
    });
}

if (games) {
    games.addEventListener("click", function() {
        loadEvent("games.json");
    });
}

if (sadhya) {
    sadhya.addEventListener("click", function() {
        loadEvent("sadhya.json");
    });
}

if (cultural) {
    cultural.addEventListener("click", function() {
        loadEvent("cultural.json");
    });
}


// Random Onam quote in footer
var randomTextEl = document.getElementById("randomText");

if (randomTextEl) {
    var texts = [
        "May the colours of Pookalam fill your life with happiness and prosperity.",

        "Let the spirit of Onam bring love, peace, and togetherness to every heart.",

        "May this Onam remind us that happiness grows when we share it with others.",

        "May the warmth of Onam brighten every home and create beautiful memories.",

        "Celebrate the joy of Onam with laughter, friendship, tradition, and love.",

        "May the spirit of King Mahabali's kindness and equality live in our hearts forever.",

        "From Pookalam to Sadhya, may every moment of Onam be filled with joy.",

        "Onam is not just a festival; it is a celebration of togetherness and happiness.",

        "May your heart bloom like a Pookalam and your days shine with happiness.",

        "Wishing you an Onam filled with unforgettable moments, cherished friendships, and endless smiles."
    ];

    var random = Math.floor(Math.random() * texts.length);

    randomTextEl.innerHTML = texts[random];
}
