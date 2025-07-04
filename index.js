import { countries } from "./countries.js";

// Элементы DOM
const mainPage = document.getElementById('main-page');
const continentPage = document.getElementById('continent-page');
const countryModal = document.getElementById('country-modal');
const searchInput = document.getElementById('search-input');
const continentCards = document.querySelectorAll('.continent-card');
const backBtn = document.getElementById('back-btn');
const continentTitle = document.getElementById('continent-title');
const countriesGrid = document.getElementById('countries-grid');
const countrySearch = document.getElementById('country-search');
const closeModal = document.getElementById('close-modal');

let currentContinent = '';
let currentCountries = [];

function fadeIn(element, duration = 500) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
    
    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, 10);
}

function fadeOut(element, duration = 300) {
    return new Promise(resolve => {
        element.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
        element.style.opacity = '0';
        element.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            element.classList.add('hidden');
            resolve();
        }, duration);
    });
}

function animateCards() {
    continentCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.9)';
        card.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }, 100 * index);
    });
}

continentCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.05)';
        card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
    });
});


continentCards.forEach(card => {
    card.addEventListener('click', () => {
        const continent = card.dataset.continent;
        showContinent(continent);
    });
});


async function showContinent(continent) {
    currentContinent = continent;
    currentCountries = countries[continent] || [];
    

    await fadeOut(mainPage);
    

    const continentNames = {
        'north-america': 'Северная Америка',
        'europe': 'Европа',
        'asia': 'Азия',
        'south-america': 'Южная Америка',
        'africa': 'Африка',
        'oceania': 'Океания'
    };
    
    continentTitle.textContent = continentNames[continent];
    

    continentPage.classList.remove('hidden');
    fadeIn(continentPage);
    
    updateContinentStats();
    
    renderCountries(currentCountries);
}

function updateContinentStats() {
    const countriesCount = currentCountries.length;
    const totalPopulation = currentCountries.reduce((sum, country) => {
        const pop = parseFloat(country.population.replace(/[^\d.]/g, ''));
        return sum + (isNaN(pop) ? 0 : pop);
    }, 0);
    
    const totalArea = currentCountries.reduce((sum, country) => {
        const area = parseFloat(country.area.replace(/[^\d.]/g, ''));
        return sum + (isNaN(area) ? 0 : area);
    }, 0);
    
    animateNumber(document.getElementById('countries-count'), 0, countriesCount, 1000);
    animateNumber(document.getElementById('total-population'), 0, totalPopulation, 1000, 'млн');
    animateNumber(document.getElementById('total-area'), 0, totalArea, 1000, 'км²');
}

function animateNumber(element, start, end, duration, suffix = '') {
    const startTime = Date.now();
    
    function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(start + (end - start) * easeOutCubic(progress));
        
        element.textContent = current.toLocaleString() + (suffix ? ` ${suffix}` : '');
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    update();
}

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

function renderCountries(countries) {
    countriesGrid.innerHTML = '';
    
    countries.forEach((country, index) => {
        const countryCard = createCountryCard(country);
        countriesGrid.appendChild(countryCard);
        
        setTimeout(() => {
            fadeIn(countryCard, 400);
        }, index * 50);
    });
}

function initializeModal() {
    countryModal.classList.add('hidden');
    countryModal.style.display = 'none';
}

function createCountryCard(country) {
    const card = document.createElement('div');
    card.className = 'country-card bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 cursor-pointer transform transition-all duration-300 hover:bg-opacity-20 hover:scale-105';
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    card.innerHTML = `
        <div class="flex items-center space-x-4 mb-4">
            <div class="country-flag w-12 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded flex items-center justify-center text-white font-bold">
                ${country.code || country.name.substring(0, 2)}
            </div>
            <h3 class="text-xl font-bold text-white">${country.name}</h3>
        </div>
        <div class="space-y-2 text-sm">
            <div class="flex justify-between">
                <span class="text-blue-200">Столица:</span>
                <span class="text-white font-semibold">${country.capital}</span>
            </div>
            <div class="flex justify-between">
                <span class="text-blue-200">Население:</span>
                <span class="text-white font-semibold">${country.population}</span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => {
        showCountryModal(country);
    });
    
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '';
    });
    
    return card;
}

function showCountryModal(country) {
    if (!countryModal) return;
    
    document.getElementById('modal-country-name').textContent = country.name;
    document.getElementById('modal-country-flag').innerHTML = `
        <div class="w-16 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded flex items-center justify-center text-white font-bold text-lg">
            ${country.code || country.name.substring(0, 2)}
        </div>
    `;

    const infoContainer = document.getElementById('modal-country-info');
    infoContainer.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="info-item">
                <h4 class="text-blue-200 text-sm font-semibold mb-2">СТОЛИЦА</h4>
                <p class="text-2xl font-bold">${country.capital}</p>
            </div>
            <div class="info-item">
                <h4 class="text-blue-200 text-sm font-semibold mb-2">НАСЕЛЕНИЕ</h4>
                <p class="text-2xl font-bold">${country.population}</p>
            </div>
            <div class="info-item">
                <h4 class="text-blue-200 text-sm font-semibold mb-2">ПЛОЩАДЬ</h4>
                <p class="text-2xl font-bold">${country.area}</p>
            </div>
            <div class="info-item">
                <h4 class="text-blue-200 text-sm font-semibold mb-2">ЯЗЫКИ</h4>
                <p class="text-2xl font-bold">${country.languages}</p>
            </div>
            <div class="info-item">
                <h4 class="text-blue-200 text-sm font-semibold mb-2">ВАЛЮТА</h4>
                <p class="text-2xl font-bold">${country.currency}</p>
            </div>
        </div>
    `;

    countryModal.style.display = 'flex';
    countryModal.classList.remove('hidden');
    
    requestAnimationFrame(() => {
        countryModal.style.opacity = '1';
        countryModal.style.transform = 'scale(1)';
    });
}

function closeCountryModal() {
    if (!countryModal) return;
    
    countryModal.style.opacity = '0';
    countryModal.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        countryModal.classList.add('hidden');
        countryModal.style.display = 'none';
    }, 300);
}

function searchCountries(query) {
    const filtered = currentCountries.filter(country => 
        country.name.toLowerCase().includes(query.toLowerCase()) ||
        country.capital.toLowerCase().includes(query.toLowerCase())
    );
    
    renderCountries(filtered);
}

function globalSearch(query) {
    const results = [];
    
    Object.entries(countries).forEach(([continent, countriesList]) => {
        const matches = countriesList.filter(country => 
            country.name.toLowerCase().includes(query.toLowerCase()) ||
            country.capital.toLowerCase().includes(query.toLowerCase())
        );
        
        if (matches.length > 0) {
            results.push({ continent, countries: matches });
        }
    });
    
    if (results.length > 0 && query.length > 0) {
        showSearchResults(results);
    } else {
        hideSearchResults();
    }
}

function showSearchResults(results) {
    let searchResults = document.getElementById('search-results');
    
    if (!searchResults) {
        searchResults = document.createElement('div');
        searchResults.id = 'search-results';
        searchResults.className = 'absolute top-full left-0 right-0 rounded-xl mt-2 p-4 max-h-60 overflow-y-auto z-50';
        searchResults.style.cssText = `
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        `;
        searchInput.parentElement.appendChild(searchResults);
    }
    
    searchResults.innerHTML = '';
    
    results.forEach(({ continent, countries }) => {
        const continentNames = {
            'north-america': 'Северная Америка',
            'europe': 'Европа',
            'asia': 'Азия',
            'south-america': 'Южная Америка',
            'africa': 'Африка',
            'oceania': 'Океания'
        };
        
        const section = document.createElement('div');
        section.className = 'mb-4 last:mb-0';
        
        section.innerHTML = `
            <h4 class="text-blue-200 text-sm font-semibold mb-2">${continentNames[continent]}</h4>
            ${countries.map(country => `
                <div class="search-result-item flex items-center space-x-3 p-2 rounded-lg hover:bg-black hover:bg-opacity-10 cursor-pointer" 
                     data-continent="${continent}" data-country="${country.name}">
                    <div class="w-6 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded text-xs text-white flex items-center justify-center">
                        ${country.code || country.name.substring(0, 2)}
                    </div>
                    <div>
                        <div class="text-white text-sm font-semibold">${country.name}</div>
                        <div class="text-blue-200 text-xs">${country.capital}</div>
                    </div>
                </div>
            `).join('')}
        `;
        
        searchResults.appendChild(section);
    });
    
    // Добавить обработчики кликов
    searchResults.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
            const continent = item.dataset.continent;
            const countryName = item.dataset.country;
            searchInput.value = '';
            hideSearchResults();
            showContinent(continent);
            
            // Подождать загрузки континента и показать модальное окно
            setTimeout(() => {
                const country = countries[continent].find(c => c.name === countryName);
                if (country) {
                    showCountryModal(country);
                }
            }, 500);
        });
    });
    
    searchResults.style.display = 'block';
    fadeIn(searchResults, 200);
}

// Скрыть результаты поиска
function hideSearchResults() {
    const searchResults = document.getElementById('search-results');
    if (searchResults) {
        searchResults.style.display = 'none';
    }
}

// Обработчики событий
backBtn.addEventListener('click', async () => {
    await fadeOut(continentPage);
    mainPage.classList.remove('hidden');
    fadeIn(mainPage);
    animateCards();
});

closeModal.addEventListener('click', closeCountryModal);

// Закрыть модальное окно при клике на фон
countryModal.addEventListener('click', (e) => {
    if (e.target === countryModal) {
        closeCountryModal();
    }
});

// Поиск в реальном времени
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    globalSearch(query);
});

// Поиск стран на странице континента
countrySearch.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    searchCountries(query);
});

// Скрыть результаты поиска при клике вне их
document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !document.getElementById('search-results')?.contains(e.target)) {
        hideSearchResults();
    }
});

// Обработка клавиши Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (!countryModal.classList.contains('hidden')) {
            closeCountryModal();
        } else {
            hideSearchResults();
        }
    }
});

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    // Инициализация
    initializeModal();
    
    // Обработчики для закрытия модального окна
    if (closeModal) {
        closeModal.addEventListener('click', closeCountryModal);
    }
    
    // Закрытие по клику на фон
    if (countryModal) {
        countryModal.addEventListener('click', (e) => {
            if (e.target === countryModal) {
                closeCountryModal();
            }
        });
    }
    
    // Начальная анимация
    setTimeout(() => {
        animateCards();
    }, 200);
});
// Плавная прокрутка для лучшего UX
document.documentElement.style.scrollBehavior = 'smooth';

// Intersection Observer для анимации элементов при прокрутке
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Наблюдать за элементами при загрузке
document.addEventListener('DOMContentLoaded', () => {
    const elementsToObserve = document.querySelectorAll('.continent-card, .country-card');
    elementsToObserve.forEach(el => observer.observe(el));
});