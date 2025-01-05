// script.js
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche le rechargement de la page
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const status = document.getElementById('status');
  
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      status.textContent = 'Veuillez remplir tous les champs.';
      status.style.color = 'red';
      return;
    }
  
    // Simule l'envoi des données
    status.textContent = 'Merci pour votre message, ' + name + ' ! Nous vous répondrons bientôt.';
    status.style.color = 'green';
  
    // Réinitialiser le formulaire
    document.getElementById('contactForm').reset();
  });
  