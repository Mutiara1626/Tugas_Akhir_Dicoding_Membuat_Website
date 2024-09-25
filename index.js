document.addEventListener('DOMContentLoaded', function() {
    // Dropdown menu
    const dropdownBtn = document.createElement('button');
    dropdownBtn.textContent = 'Menu';
    dropdownBtn.id = 'dropdownBtn';
    
    //KIKI
    const nav = document.querySelector('nav');
    nav.insertBefore(dropdownBtn, nav.firstChild);

    dropdownBtn.addEventListener('click', function() {
        const ul = nav.querySelector('ul');
        ul.style.display = ul.style.display === 'none' || ul.style.display === '' ? 'block' : 'none';
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Efek fade in untuk artikel
    const articles = document.querySelectorAll('article');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    articles.forEach(article => {
        article.style.opacity = 0;
        article.style.transform = 'translateY(20px)';
        article.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(article);
    });
});