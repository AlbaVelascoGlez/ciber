document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('../data/news.json');
        const data = await response.json();
        displayNews(data.news);
    } catch (error) {
        console.error('Error al cargar las noticias:', error);
    }
});

function displayNews(noticias) {
    const mainContent = document.querySelector('.main-content');
    const newsContainer = document.createElement('section');
    newsContainer.className = 'news-container';

    noticias.forEach(noticia => {
        const newsCard = document.createElement('article');
        newsCard.className = 'news-card';
        newsCard.innerHTML = `
            <div class="news-image">
                <img src="${noticia.image}" alt="${noticia.title}">
            </div>
            <div class="news-content">
                <span class="news-category">${noticia.category}</span>
                <h2 class="news-title">${noticia.title}</h2>
                <p class="news-date">${formatDate(noticia.date)}</p>
                <p class="news-summary">${noticia.description}</p>
                <a href="#" class="read-more">Leer más</a>
            </div>
        `;
        newsContainer.appendChild(newsCard);
    });

    mainContent.appendChild(newsContainer);
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
}
