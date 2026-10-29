// Database of 6 Featured Hotels with 4 rooms each
const featuredHotels = [
    {
        id: 1,
        name: "Serena Inn & Resort",
        destination: "Hunza Valley",
        category: "luxury",
        categoryTag: "Luxury Tier",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        rating: "5.0 ★",
        location: "Karimabad, Hunza",
        description: "Heritage luxury nestled beneath Rakaposhi peak with premium dining and royal suites."
    },
    {
        id: 2,
        name: "Shangrila Resort Skardu",
        destination: "Skardu",
        category: "luxury",
        categoryTag: "Luxury Tier",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
        rating: "4.9 ★",
        location: "Kachura Lake, Skardu",
        description: "Iconic lakefront villas surrounded by high peaks and manicured gardens."
    },
    {
        id: 3,
        name: "Malam Jabba Ski Resort",
        destination: "Swat Valley",
        category: "premium",
        categoryTag: "Premium Tier",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
        rating: "4.8 ★",
        location: "Malam Jabba, Swat",
        description: "Modern alpine resort offering direct ski slopes, luxury lounge, and outdoor fire pits."
    },
    {
        id: 4,
        name: "Deosai Luxury Glamping",
        destination: "Skardu",
        category: "premium",
        categoryTag: "Premium Tier",
        image: "https://i.pinimg.com/1200x/b4/05/0f/b4050f5cbc21ed8acda3f017b99d8699.jpg",
        rating: "4.9 ★",
        location: "Deosai Plains",
        description: "High-altitude heated luxury glamps with private starlit viewing decks."
    },
    {
        id: 5,
        name: "Fairy Meadows Alpine Cottages",
        destination: "Fairy Meadows",
        category: "standard",
        categoryTag: "Standard Tier",
        image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80",
        rating: "4.7 ★",
        location: "Fairy Meadows Base",
        description: "Cozy wooden cabins offering warm hospitality and direct views of Nanga Parbat."
    },
    {
        id: 6,
        name: "Eagle's Nest Hotel",
        destination: "Hunza Valley",
        category: "standard",
        categoryTag: "Standard Tier",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
        rating: "4.6 ★",
        location: "Duikar, Hunza",
        description: "Famous viewpoint lodge with clean standard rooms and panoramic sunrise vistas."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Check if URL has a destination parameter (e.g. ?destination=Hunza Valley)
    const urlParams = new URLSearchParams(window.location.search);
    const destParam = urlParams.get('destination');

    if (destParam) {
        const destSelect = document.getElementById('filterDestination');
        if (destSelect) {
            destSelect.value = destParam; // Set dropdown to match clicked destination
        }
    }

    filterHotels(); // Run filter on page load
});

// Display & Filter Hotels logic
function filterHotels() {
    const destSelect = document.getElementById('filterDestination');
    const catSelect = document.getElementById('filterCategory');

    const selectedDest = destSelect ? destSelect.value : 'all';
    const selectedCat = catSelect ? catSelect.value : 'all';

    const filtered = featuredHotels.filter(hotel => {
        const matchesDest = (selectedDest === 'all' || hotel.destination === selectedDest);
        const matchesCat = (selectedCat === 'all' || hotel.category === selectedCat);
        return matchesDest && matchesCat;
    });

    displayHotels(filtered);
}

function displayHotels(hotelsArray) {
    const luxuryGrid = document.getElementById('luxuryHotels');
    const premiumGrid = document.getElementById('premiumHotels');
    const standardGrid = document.getElementById('standardHotels');

    const luxurySec = document.getElementById('luxurySection');
    const premiumSec = document.getElementById('premiumSection');
    const standardSec = document.getElementById('standardSection');

    if (!luxuryGrid || !premiumGrid || !standardGrid) return;

    // Check if a decor parameter was passed in URL from the home page
    const urlParams = new URLSearchParams(window.location.search);
    const decorParam = urlParams.get('decor');
    const decorQuery = decorParam ? `&decor=${encodeURIComponent(decorParam)}` : '';

    luxuryGrid.innerHTML = '';
    premiumGrid.innerHTML = '';
    standardGrid.innerHTML = '';

    let hasLuxury = false;
    let hasPremium = false;
    let hasStandard = false;

    hotelsArray.forEach(hotel => {
        const cardHtml = `
            <div class="card">
                <img src="${hotel.image}" alt="${hotel.name}" class="card-img">
                <div class="card-body">
                    <span class="card-tag">${hotel.categoryTag}</span>
                    <h3>${hotel.name}</h3>
                    <p style="margin-bottom: 8px;"><i class="fa-solid fa-star" style="color: #ffc107;"></i> ${hotel.rating} &bull; ${hotel.location}</p>
                    <p style="font-size: 0.85rem; color: #6c757d; margin-bottom: 15px;">${hotel.description}</p>
                    <div class="card-meta">
                        <span><i class="fa-solid fa-map-pin"></i> ${hotel.destination}</span>
                        <a href="room-details.html?id=${hotel.id}${decorQuery}" class="link-btn">Book This Hotel <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        `;

        if (hotel.category === 'luxury') {
            luxuryGrid.insertAdjacentHTML('beforeend', cardHtml);
            hasLuxury = true;
        } else if (hotel.category === 'premium') {
            premiumGrid.insertAdjacentHTML('beforeend', cardHtml);
            hasPremium = true;
        } else if (hotel.category === 'standard') {
            standardGrid.insertAdjacentHTML('beforeend', cardHtml);
            hasStandard = true;
        }
    });

    if (luxurySec) luxurySec.style.display = hasLuxury ? 'block' : 'none';
    if (premiumSec) premiumSec.style.display = hasPremium ? 'block' : 'none';
    if (standardSec) standardSec.style.display = hasStandard ? 'block' : 'none';
}