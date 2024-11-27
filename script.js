// Отслеживаем появление секций
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Настраиваем анимацию
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});

// Создаем кнопку и добавляем её в DOM
const scrollTopButton = document.createElement('button');
scrollTopButton.innerText = '𖤂';
scrollTopButton.id = 'scrollTopButton';
document.body.appendChild(scrollTopButton);

// Стилизация кнопки через JavaScript
scrollTopButton.style.position = 'fixed';
scrollTopButton.style.bottom = '20px';
scrollTopButton.style.right = '20px';
scrollTopButton.style.padding = '10px 15px';
scrollTopButton.style.backgroundColor = '#4CAF50';
scrollTopButton.style.color = '#fff';
scrollTopButton.style.border = 'none';
scrollTopButton.style.borderRadius = '5px';
scrollTopButton.style.cursor = 'pointer';
scrollTopButton.style.display = 'none'; // По умолчанию кнопка скрыта

// Показать кнопку при прокрутке
window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
};

// Добавляем функционал "Наверх"
scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавная прокрутка
    });
});

