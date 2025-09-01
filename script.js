const flower = document.querySelector('.flower');
const message = document.querySelector('.message');

flower.addEventListener('click', () => {
  flower.style.transform = 'scale(1.2) rotate(360deg)';
  message.textContent = 'te amo demais maria clara da silva  meu amor meu primeiro projeto fiz especialmente para vc! 💖';
  message.style.opacity = '1';
  setTimeout(() => {
    flower.style.transform = 'scale(1)';
  }, 1000);
});
