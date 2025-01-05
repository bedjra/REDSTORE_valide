// Sélectionner tous les éléments de menu
const menuItems = document.querySelectorAll('.menu li');

// Ajouter un événement de clic à chaque élément de menu
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Supprimer la classe 'active' de tous les éléments
        menuItems.forEach(el => el.classList.remove('active'));
        // Ajouter la classe 'active' à l'élément cliqué
        item.classList.add('active');
    });
});
