async function fetchNews() {
    try {
        const response = await fetch('http://localhost:3000/api/news');
        const data = await response.json();
        return newsList;
    } catch (error) {
        console.error('Error fetching news', error);
    }
};

async function displayNews() {
    const newsList = await fetchNews();
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';
    newsList.forEach((news) => {
        const titleElement = document.createElement('h2');
        titleElement.textContent = news.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = news.content;

        const imageElement = document.createElement('img');
        imageElement.src = news.imageUrl;
        imageElement.alt = news.title;

        newsContainer.appendChild(titleElement);
        newsContainer.appendChild(descriptionElement);
        newsContainer.appendChild(imageElement);
    });
};

window.addEventListener('DOMContentLoaded', displayNews);