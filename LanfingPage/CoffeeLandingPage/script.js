document.addEventListener('DOMContentLoaded', function() {
    const changeColorBtn = document.getElementById('changeColorBtn');
    const footer = document.querySelector('footer');
    let isDarkCoffee = true;

    changeColorBtn.addEventListener('click', function() {
        if (isDarkCoffee) {
            footer.style.backgroundColor = '#6B4F4F'; // Medium coffee color
            footer.style.color = '#F1E3D3'; // Cream color
            isDarkCoffee = false;
        } else {
            footer.style.backgroundColor = '#3C2A21'; // Dark coffee color
            footer.style.color = '#F1E3D3'; // Cream color
            isDarkCoffee = true;
        }
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
});
