
const countdown = document.getElementById("countdown");
const targetDate = new Date("Oct 10, 2025 20:00:00").getTime();

const interval = setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    clearInterval(interval);
    countdown.innerText = "¡La fiesta ha comenzado!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  countdown.innerText = `⏳ Faltan ${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
