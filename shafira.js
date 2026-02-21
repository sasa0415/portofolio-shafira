// 1. Efek Mengetik (Typing Effect) untuk Sub-header
const textElement = document.querySelector('header p');
const text = "Junior Game Developer | Student at SMKN 1 Nganjuk";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        textElement.innerHTML = text.substring(0, index + 1) + '<span class="cursor">|</span>';
        index++;
        setTimeout(typeEffect, 100);
    } else {
        document.querySelector('.cursor').style.display = 'none';
    }
}

// 2. Smooth Scroll untuk Navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Offset agar tidak tertutup header
                behavior: 'smooth'
            });
        }
    });
});

// 3. Animasi Muncul saat Scroll (Reveal Animation)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Jalankan fungsi saat window dimuat
window.onload = () => {
    typeEffect();
    
    // Siapkan elemen untuk animasi scroll
    const sections = document.querySelectorAll('section, .project');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });
};