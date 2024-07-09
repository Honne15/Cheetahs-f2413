function searchPage() {
    const input = document.getElementById('input').value.toLowerCase();
    const sections = document.querySelectorAll('section, div, main, footer, header');
    for (let section of sections) {
        if (section.innerText.toLowerCase().includes(input)) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            break;
        }
    }
}

document.getElementById('input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchPage();
    }
});

function startVoiceRecognition() {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.lang = 'es-ES';
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.start();

        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            document.getElementById('input').value = transcript;
            searchPage();
        };

        recognition.onerror = function(event) {
            console.error(event.error);
        };

        recognition.onend = function() {
            console.log('Speech recognition service disconnected');
        };
    } else {
        alert('Your browser does not support speech recognition');
    }
}

document.querySelector('.micButton').addEventListener('click', startVoiceRecognition);
