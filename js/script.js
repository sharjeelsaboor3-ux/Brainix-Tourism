// Sample Hotel Data (Without prices displayed as per project requirements)
const hotelsData = [
    {
        id: 1,
        name: "Serena Inn & Resort",
        destination: "Hunza Valley",
        category: "premium",
        categoryTag: "Premium / Luxury",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        rating: "5.0 ★",
        location: "Karimabad, Hunza"
    },
    {
        id: 2,
        name: "Shangrila Resort Skardu",
        destination: "Skardu",
        category: "resort",
        categoryTag: "Alpine Resort",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
        rating: "4.9 ★",
        location: "Kachura Lake, Skardu"
    },
    {
        id: 3,
        name: "Fairy Meadows Alpine Cottages",
        destination: "Fairy Meadows",
        category: "standard",
        categoryTag: "Standard / Cozy",
        image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80",
        rating: "4.7 ★",
        location: "Fairy Meadows Base"
    },
    {
        id: 4,
        name: "Malam Jabba Ski Resort",
        destination: "Swat Valley",
        category: "premium",
        categoryTag: "Premium / Luxury",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
        rating: "4.8 ★",
        location: "Malam Jabba, Swat"
    },
    {
        id: 5,
        name: "Eagle's Nest Hotel",
        destination: "Hunza Valley",
        category: "standard",
        categoryTag: "Standard / Viewpoint",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
        rating: "4.6 ★",
        location: "Duikar, Hunza"
    },
    {
        id: 6,
        name: "Deosai Luxury Glamping",
        destination: "Skardu",
        category: "resort",
        categoryTag: "Alpine Glamping",
        image: "https://i.pinimg.com/1200x/b4/05/0f/b4050f5cbc21ed8acda3f017b99d8699.jpg",
        rating: "4.9 ★",
        location: "Deosai Plains"
    }
];

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    renderTrendingHotels();
});

// Render All Trending Hotels directly with links to room-details.html
function renderTrendingHotels() {
    const grid = document.getElementById('hotelsGrid');
    if (!grid) return;

    grid.innerHTML = '';

    hotelsData.forEach(hotel => {
        const cardHtml = `
            <div class="card">
                <img src="${hotel.image}" alt="${hotel.name}" class="card-img">
                <div class="card-body">
                    <span class="card-tag">${hotel.categoryTag}</span>
                    <h3>${hotel.name}</h3>
                    <p><i class="fa-solid fa-star" style="color: #ffc107;"></i> ${hotel.rating} &bull; ${hotel.location}</p>
                    <div class="card-meta">
                        <span><i class="fa-solid fa-map-pin"></i> ${hotel.destination}</span>
                        <a href="room-details.html?id=${hotel.id}" class="link-btn">Book Stay <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        `;
        grid.insertAdjacentHTML('beforeend', cardHtml);
    });
}