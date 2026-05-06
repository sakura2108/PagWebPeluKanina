// Formulario de contacto
function handleSubmit(e) {
  e.preventDefault();
  const msg = document.getElementById('form-msg');
  msg.textContent = '✅ ¡Solicitud enviada! Te contactamos pronto.';
  msg.style.color = '#4a7c59';
  e.target.reset();
  setTimeout(() => { msg.textContent = ''; }, 5000);
}

// Animación de entrada al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .testimonio, .gallery-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
