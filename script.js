
const cars = [
    {
        name: "Car Amarelo",
        year: 2024,
        price: "R$ 189.000",
        description: "Potência e design arrojado. O carro dos seus sonhos!",
        image: "./img/caramarelo.png",
        features: ["Turbo", "Câmbio Automático", "Teto Solar"]
    },
    {
        name: "Car Branco",
        year: 2023,
        price: "R$ 98.500",
        description: "Perfeito para a cidade, econômico e tecnológico.",
        image: "./img/carbranco.png",
        features: ["Econômico", "Câmera de Ré", "Multimídia"]
    },
    {
        name: "Car preto",
        year: 1985,
        price: "R$ 150.000",
        description: "Um clássico restaurado com o motor V8 original.",
        image: "./img/carpreto.png",
        features: ["Motor V8", "Restaurado", "Colecionável"]
    }
];


const specialOffers = [
    {
        title: "OFERTA RELÂMPAGO",
        description: "Car Amarelo com 15% de desconto esta semana!",
        discount: "15%",
        oldPrice: "R$ 189.000",
        newPrice: "R$ 160.650",
        endDate: "30/08/2023",
        image: "./img/caramarelo.png"
    },
    {
        title: "FINANCIAMENTO ESPECIAL",
        description: "Car Branco com entrada zero e parcelas reduzidas",
        highlight: "ENTRADA ZERO",
        price: "R$ 98.500",
        monthly: "R$ 1.299/mês",
        image: "./img/carbranco.png"
    }
];


function renderCars() {
    
    const carContainer = document.getElementById('car-container');
    

    carContainer.innerHTML = ''; 


    cars.forEach(car => {
     
        const featuresHTML = car.features.map(feature => 
            `<span class="feature-tag"><i class="fas fa-check-circle"></i> ${feature}</span>`
        ).join('');
        
        const carHTML = `
            <div class="car-card">
                <div class="car-badge">DESTAQUE</div>
                <img src="${car.image}" alt="${car.name}">
                <div class="car-info">
                    <h3>${car.name} <span class="year-tag">${car.year}</span></h3>
                    <p>${car.description}</p>
                    <div class="features-container">
                        ${featuresHTML}
                    </div>
                    <p class="price">${car.price}</p>
                    <div class="button-group">
                        <button class="detail-btn" onclick="highlightCar(this, '${car.name}')">
                            <i class="fas fa-info-circle"></i> Ver Detalhes
                        </button>
                        <button class="test-drive-btn">
                            <i class="fas fa-car"></i> Test Drive
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        carContainer.innerHTML += carHTML;
    });
}


function renderSpecialOffers() {
    const offersContainer = document.getElementById('special-offers-container');
    
    if (!offersContainer) return;
    
    offersContainer.innerHTML = '';
    
    specialOffers.forEach(offer => {
        let offerHTML = '';
        
        if (offer.discount) {
         
            offerHTML = `
                <div class="offer-card discount-offer">
                    <div class="offer-badge">${offer.title}</div>
                    <img src="${offer.image}" alt="Oferta Especial">
                    <div class="offer-content">
                        <h3>${offer.description}</h3>
                        <div class="discount-info">
                            <span class="discount-badge">${offer.discount} OFF</span>
                            <div class="price-comparison">
                                <span class="old-price">${offer.oldPrice}</span>
                                <span class="new-price">${offer.newPrice}</span>
                            </div>
                        </div>
                        <p class="offer-deadline">Oferta válida até ${offer.endDate}</p>
                        <button class="offer-btn">Aproveitar Agora</button>
                    </div>
                </div>
            `;
        } else {
           
            offerHTML = `
                <div class="offer-card finance-offer">
                    <div class="offer-badge">${offer.title}</div>
                    <img src="${offer.image}" alt="Oferta Especial">
                    <div class="offer-content">
                        <h3>${offer.description}</h3>
                        <div class="finance-highlight">${offer.highlight}</div>
                        <div class="finance-info">
                            <span class="total-price">${offer.price}</span>
                            <span class="monthly-price">${offer.monthly}</span>
                        </div>
                        <button class="offer-btn">Simular Financiamento</button>
                    </div>
                </div>
            `;
        }
        
        offersContainer.innerHTML += offerHTML;
    });
}

function highlightCar(buttonElement, carName) {
    buttonElement.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Carregando...`;
    buttonElement.style.backgroundColor = '#ff9800';
    buttonElement.style.color = 'white';
    
    setTimeout(() => {
        buttonElement.innerHTML = `<i class="fas fa-info-circle"></i> Ver Detalhes`;
        buttonElement.style.backgroundColor = '';
        buttonElement.style.color = '';
      
        alert(`Você selecionou o ${carName}! Em breve teremos mais detalhes.`);
    }, 1000);
}


document.addEventListener('DOMContentLoaded', function() {
    renderCars();
    renderSpecialOffers();
    
 
    animateOnScroll();
});


function animateOnScroll() {
    const elements = document.querySelectorAll('.car-card, .offer-card, .section-title');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}