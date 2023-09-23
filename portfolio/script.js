// typing loop homepage
const textGold = document.getElementById('textgold');
const textToType = 'Jr Full Stack Web Developer.';
const typingSpeed = 50;

function typeText() {
    let charIndex = 0;
    textGold.textContent = '';

    function addCharacter() {
        if (charIndex < textToType.length) {
            textGold.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(addCharacter, typingSpeed);
        } else {
            setTimeout(typeText, 1000);
        }
    }

    addCharacter();
}

window.addEventListener('load', () => {
    typeText();
});


// gallery
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("gallery-item")) {
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        var myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();

    }
})

// email button
document.getElementById('openMailTo1').addEventListener('click', function (e) {
    e.preventDefault();
    window.open('mailto:davidelopez7@gmail.com', '_blank');
});

document.getElementById('openMailTo2').addEventListener('click', function (e) {
    e.preventDefault();
    window.open('mailto:davidelopez7@gmail.com', '_blank');
});



// autoscroll up at refresh
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}


//   IMAGE DESCRIPTION
// Seleziona tutti i pulsanti "Show Details"
const showMoreButtons = document.querySelectorAll(".btn.btn-warning");

// Aggiungi un event listener a ciascun pulsante
showMoreButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        // Trova il div nascosto associato al pulsante cliccato
        const hiddenContent = this.nextElementSibling;

        // Verifica se il div è attualmente nascosto
        if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
            // Mostra il div
            hiddenContent.style.display = "block";
            // Cambia il testo del pulsante in "Hide Text"
            this.textContent = "Hide Text";
        } else {
            // Nascondi il div
            hiddenContent.style.display = "none";
            // Cambia il testo del pulsante in "Show Details"
            this.textContent = "Show Details";
        }
    });
});

// TRANSLATE ABOUT ME

const textToTranslate = document.getElementById("textToTranslate");
const secondTextToTranslate = document.getElementById("secondTextToTranslate");
const translateButton = document.getElementById("translateButton");
let isTranslated = false;
let originalText = "";
let originalSecondText = "";

translateButton.addEventListener("click", function () {
    if (isTranslated) {
        // Ripristina il testo originale
        textToTranslate.innerHTML = originalText;
        secondTextToTranslate.innerHTML = originalSecondText;
        translateButton.textContent = "Translate to Italian";
        isTranslated = false;
    } else {
        // Salva il testo originale prima di tradurlo
        originalText = textToTranslate.innerHTML;
        originalSecondText = secondTextToTranslate.innerHTML;
        // Sostituisci il testo con la tua traduzione personalizzata in italiano
        textToTranslate.innerHTML = `Ciao! Mi chiamo Davide! Piacere di conoscerti. Sono nato nel 1990 e attualmente vivo a Roma. Sono sempre stato appassionato di computer, sin da giovane quando ho iniziato a smontare e configurare i miei primi computer. Crescendo, ho continuato a imparare sempre di più, diventando alla fine per amici e familiari: "Colui che risolve i problemi!" Ho avuto vari lavori durante la mia vita, ma qualche tempo fa ho cominciato a chiedermi come funzioni tutto quello che c'è dietro internet. Poi ho deciso di lasciare i miei vecchi lavori e entrare nel mondo della programmazione e dello sviluppo web. Ho frequentato la Boolean Academy online, un corso intensivo della durata di 6 mesi composto da lezioni in classe al mattino e compiti nel pomeriggio con l'assistenza di tutor professionisti. Durante questi mesi di studio ho imparato <span
            class="skills"> HTML,
            CSS, Bootstrap, Javascript, VUE.js, MySQL, PHP, e Laravel.</span> Alla fine delle lezioni ho conseguito il certificato come Sviluppatore Web Full Stack. per conto mio ho continuato a studiare lo sviluppo front-end, che è diventato una fonte di divertimento per me. Ho creato questa pagina interamente utilizzando HTML, CSS, Javascript e Framework CSS. Nel mio tempo libero realizzo Portfolio personalizzati per persone che ne necessitano uno. Se sei interessato, fai clic su uno dei pulsanti in alto e contattami!`;
        secondTextToTranslate.innerHTML = "Oppure, puoi dare un'occhiata ai miei lavori ed esercizi continuando a scorrere.";
        translateButton.textContent = "Revert to English";
        isTranslated = true;
        // Reimposta lo stile per la classe "skills"
        const skillsElement = textToTranslate.querySelector(".skills");
        if (skillsElement) {
            skillsElement.style.fontWeight = "bold";
            skillsElement.style.color = "blue";
        }
    }
});



    // Seleziona l'elemento dell'icona
    const scrollToTopButton = document.getElementById('scroll-to-top');

    // Aggiungi un evento click all'elemento dell'icona
    scrollToTopButton.addEventListener('click', function () {
        // Scrolla la pagina verso l'alto
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
