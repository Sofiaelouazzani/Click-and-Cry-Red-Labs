function openEmail() {
    document.querySelector('.inbox').style.display = 'none';
    document.getElementById('emailContent').classList.remove('hidden');
  }
  
  function infectSystem() {
    document.getElementById('emailContent').classList.add('hidden');
    document.getElementById('ransomwareScreen').classList.remove('hidden');
  }
  
  function revealLesson() {
    document.getElementById('ransomwareScreen').classList.add('hidden');
    document.getElementById('lesson').classList.remove('hidden');
  }

  function downloadFakeFile() {
  const text = "This is a fake invoice file.\nPlease ignore.";
  const blob = new Blob([text], { type: 'text/plain' });
  const fakeFile = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = fakeFile;
  a.download = "Invoice.docx.exe";
  document.body.appendChild(a);
  a.click();
  a.remove();
  startDownloadTimer();
}

// Durée du compte à rebours en secondes (exemple 48h = 48*3600)
const countdownDuration = 48 * 3600; 
let timeLeft = countdownDuration;

function updateCountdown() {
  const countdownElement = document.getElementById('countdown');

  if (timeLeft <= 0) {
    countdownElement.textContent = currentLang === 'en' ? "Time's up!" : "Temps écoulé !";
    clearInterval(timerInterval);
    return;
  }

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  countdownElement.textContent = (currentLang === 'en' ? "Countdown: " : "Compte à rebours : ") 
    + `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;

  timeLeft--;
}

// Démarre la mise à jour chaque seconde
const timerInterval = setInterval(updateCountdown, 1000);

// Lancer immédiatement la fonction pour ne pas attendre 1s au début
updateCountdown();
