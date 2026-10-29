// Database of hotels with 4 rooms each, specific background images, and descriptions
const hotelRoomsData = {
    1: { // Serena Inn & Resort
        name: "Serena Inn & Resort",
        destination: "Hunza Valley",
        categoryTag: "Luxury Tier",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80",
        rooms: [
            {
                type: "Executive Valley View Suite",
                capacity: "2 Guests (1 King Bed)",
                image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
                description: "Spacious luxury suite with a private balcony looking directly out onto Rakaposhi and Ladyfinger Peak.",
                features: ["Private Balcony", "Free Wi-Fi", "Heated Flooring", "Complimentary Breakfast", "24/7 Room Service"]
            },
            {
                type: "Royal Heritage Deluxe Room",
                capacity: "3 Guests (1 King + 1 Single)",
                image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
                description: "Traditional Hunzai woodwork infused with contemporary comfort, perfect for families.",
                features: ["Mountain View", "Traditional Decor", "Smart TV", "Mini Fridge", "En-suite Marble Bath"]
            },
            {
                type: "Rakaposhi Honeymoon Chalet",
                capacity: "2 Guests (1 Super King)",
                image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
                description: "Romantic private chalet designed specifically for couples seeking secluded luxury and stunning sunset views.",
                features: ["Rose Petal Decor", "Jacuzzi Tub", "Fireplace", "Private Dining", "Balcony Telescope"]
            },
            {
                type: "Imperial Presidential Suite",
                capacity: "4 Guests (2 King Beds)",
                image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
                description: "Our finest top-tier accommodation featuring an expansive living lounge, premium bar setup, and double panoramic terrace.",
                features: ["Dual Balcony", "Private Lounge", "Butler Service", "Complimentary Spa Pass", "Welcome Fruit Basket"]
            }
        ]
    },
    2: { // Shangrila Resort Skardu
        name: "Shangrila Resort Skardu",
        destination: "Skardu",
        categoryTag: "Luxury Tier",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=80",
        rooms: [
            {
                type: "Lakefront VIP Cottage",
                capacity: "2 Guests (1 King Bed)",
                image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
                description: "Private Swiss-style wooden cottage directly adjacent to Lower Kachura Lake with serene water views.",
                features: ["Direct Lake Access", "Private Deck", "Fireplace", "Breakfast Included", "Boating Access"]
            },
            {
                type: "Standard Alpine Villa Room",
                capacity: "4 Guests (2 Double Beds)",
                image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
                description: "Cozy villa accommodation surrounded by lush fruit orchards and towering alpine trees.",
                features: ["Garden View", "Space Heater", "Tea/Coffee Maker", "Free Parking", "Satellite TV"]
            },
            {
                type: "Kachura Panorama Suite",
                capacity: "3 Guests (1 Queen + 1 Twin)",
                image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
                description: "Elevated room layout offering gorgeous aerial views of the resort's heart-shaped lake.",
                features: ["High-Floor View", "Seating Lounge", "Mini Bar", "Wi-Fi", "Room Heater"]
            },
            {
                type: "Garden Family Cottage",
                capacity: "5 Guests (3 Beds)",
                image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
                description: "Spacious multi-room cottage nestled inside the resort's private apple and apricot gardens.",
                features: ["Private Lawn Access", "Family Dining Table", "Extra Storage", "Heated Bathroom", "Kitchenette"]
            }
        ]
    },
    3: { // Malam Jabba Ski Resort
        name: "Malam Jabba Ski Resort",
        destination: "Swat Valley",
        categoryTag: "Premium Tier",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80",
        rooms: [
            {
                type: "Ski-In Ski-Out Deluxe Room",
                capacity: "2 Guests (1 Queen Bed)",
                image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
                description: "Direct view of the ski slopes with central climate control and cozy floor carpets.",
                features: ["Ski Gear Locker", "Slope View", "Heating", "Wi-Fi", "Hot Shower"]
            },
            {
                type: "Pine Valley Family Suite",
                capacity: "4 Guests (2 King Beds)",
                image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
                description: "Two-bedroom inter-connected suite ideal for family ski trips and group stays.",
                features: ["2 Bedrooms", "Lounge Area", "Mountain View", "Breakfast Included"]
            },
            {
                type: "Snowfall Loft Studio",
                capacity: "2 Guests (1 King Bed)",
                image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
                description: "Cozy top-floor slanted roof studio with large glass windows to watch snow falling over Swat pine forests.",
                features: ["Slanted Skylight Windows", "Electric Blanket", "Coffee Station", "Sofa Chair"]
            },
            {
                type: "Swat Alpine Chalet",
                capacity: "5 Guests (3 Beds)",
                image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
                description: "Private wooden chalet complete with a stone fireplace and direct pathway to the winter chairlifts.",
                features: ["Stone Fireplace", "Private Entrance", "Gear Drying Rack", "Kitchenette", "Balcony"]
            }
        ]
    },
    4: { // Deosai Glamping
        name: "Deosai Luxury Glamping Tents",
        destination: "Skardu",
        categoryTag: "Premium Tier",
        image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1920&q=80",
        rooms: [
            {
                type: "Starlit Dome Glamping Tent",
                capacity: "2 Guests (1 Plush Bed)",
                image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
                description: "Insulated clear-roof dome tent offering uninterrupted views of the night sky over Deosai plains.",
                features: ["Transparent Stargazing Roof", "Solar Heating", "Attached Bath", "Private Deck"]
            },
            {
                type: "Sheosar Lake View Safari Tent",
                capacity: "2 Guests (1 Queen Bed)",
                image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
                description: "Luxury safari-style canvas tent pitched near the plateau wetlands with comfortable insulated flooring.",
                features: ["Wetland View", "Gas Heater", "Plush Armchairs", "En-suite Washroom"]
            },
            {
                type: "Deosai Explorer Twin Tent",
                capacity: "2 Guests (2 Twin Beds)",
                image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
                description: "Twin-bed camping setup tailored for photography and wildlife expedition groups exploring the plateau.",
                features: ["Twin Beds", "Power Charging Station", "Camp Lanterns", "Luggage Racks"]
            },
            {
                type: "Royal Plateau VIP Yurt",
                capacity: "4 Guests (1 King + 2 Singles)",
                image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
                description: "Extra-large traditional Central Asian style yurt equipped with luxury carpets, heating, and living space.",
                features: ["Traditional Wool Carpets", "Wood Stove", "Lounge Table", "Extra Warm Blankets"]
            }
        ]
    },
    5: { // Fairy Meadows Cottages
        name: "Fairy Meadows Alpine Cottages",
        destination: "Fairy Meadows",
        categoryTag: "Standard Tier",
        image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1920&q=80",
        rooms: [
            {
                type: "Nanga Parbat View Wooden Log Cabin",
                capacity: "2 Guests (1 Double Bed)",
                image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
                description: "Rustic handcrafted log cabin situated on the grassy meadow facing the mighty Killer Mountain.",
                features: ["Direct Peak View", "Wood Stove", "Traditional Bedding", "Fresh Meals Available"]
            },
            {
                type: "Raikot Glacier Backpacker Cabin",
                capacity: "3 Guests (3 Single Beds)",
                image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
                description: "Affordable and cozy cabin style stay for trekking groups and mountaineers heading up to base camp.",
                features: ["Budget Friendly", "Mountain Vibe", "Hot Water Flasks", "Common Bonfire Area"]
            },
            {
                type: "Pine Forest Eco Hut",
                capacity: "2 Guests (1 Queen Bed)",
                image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
                description: "Secluded eco-hut surrounded by pine trees away from the main camp for total peace and quiet.",
                features: ["Forest Isolation", "Private Veranda", "Solar Light", "Bird Watching View"]
            },
            {
                type: "Meadow Family Lodge",
                capacity: "4 Guests (2 Double Beds)",
                image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
                description: "Larger wooden lodge built for families wanting to experience the magic of Fairy Meadows together.",
                features: ["Extra Space", "Family Seating", "Warm Blankets", "Mountain Window View"]
            }
        ]
    },
    6: { // Eagle's Nest
        name: "Eagle's Nest Hotel",
        destination: "Hunza Valley",
        categoryTag: "Standard Tier",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1920&q=80",
        rooms: [
            {
                type: "Panoramic Sunrise Room",
                capacity: "2 Guests (1 Double Bed)",
                image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
                description: "Perched high above Duikar village, offering famous golden sunrise views over the entire Hunza valley.",
                features: ["360 Mountain View", "En-suite Bath", "Rooftop Access", "Free Wi-Fi"]
            },
            {
                type: "Duikar Valley View Deluxe",
                capacity: "3 Guests (1 Queen + 1 Single)",
                image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
                description: "Comfortable room facing the historic Altit and Baltit forts down in the valley basin.",
                features: ["Fort Sightline", "Work Desk", "Room Heater", "Electric Kettle"]
            },
            {
                type: "Stargazer Rooftop Balcony Room",
                capacity: "2 Guests (1 King Bed)",
                image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
                description: "Room featuring a private outer stone patio positioned perfectly for night astrophotography.",
                features: ["Private Stone Patio", "Tripod Friendly", "Clear Sky Angle", "Cozy Lighting"]
            },
            {
                type: "Eagle Family Suite",
                capacity: "4 Guests (2 Double Beds)",
                image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
                description: "Spacious family suite ensuring everyone gets a front-row seat to the breathtaking mountain horizons.",
                features: ["Double Windows", "Spacious Wardrobe", "Tea Station", "Heated Bathroom"]
            }
        ]
    }
};

let selectedHotelObj = null;

document.addEventListener('DOMContentLoaded', () => {
    // Read ?id= from URL parameters, fallback to 1 if missing so it never shows "Loading Hotel..."
    const urlParams = new URLSearchParams(window.location.search);
    const hotelId = urlParams.get('id') || '1'; 

    selectedHotelObj = hotelRoomsData[hotelId] || hotelRoomsData[1];

    renderHotelHeader();
    renderRooms();
    setupRoomFormHandler();
});

// Render Hero Header & Background Image properly
function renderHotelHeader() {
    document.getElementById('hotelTitle').innerText = selectedHotelObj.name;
    document.getElementById('hotelSubtitle').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${selectedHotelObj.destination} &bull; ${selectedHotelObj.categoryTag}`;
    document.getElementById('hotelCategoryTag').innerText = selectedHotelObj.categoryTag;
    
    // Dynamically change the hero background image to match the selected hotel
    const heroElem = document.getElementById('hotelHero');
    if (heroElem) {
        heroElem.style.background = `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url('${selectedHotelObj.image}') center/cover no-repeat`;
    }
}

// Render Room List Cards (4 rooms per hotel)
function renderRooms() {
    const container = document.getElementById('roomsContainer');
    if (!container) return;
    container.innerHTML = '';

    selectedHotelObj.rooms.forEach((room) => {
        const featuresList = room.features.map(f => `<li><i class="fa-solid fa-check" style="color: #0b4f3a;"></i> ${f}</li>`).join('');

        const roomCardHtml = `
            <div style="display: flex; flex-wrap: wrap; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.06); border: 1px solid #e0e0e0;">
                <div style="flex: 1 1 350px; min-height: 250px;">
                    <img src="${room.image}" alt="${room.type}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div style="flex: 2 1 400px; padding: 25px; display: flex; flex-direction: column; justify-content: space-between;">
                    <div>
                        <span style="background: #eaf4f0; color: #0b4f3a; font-size: 0.75rem; font-weight: 700; padding: 4px 12px; border-radius: 20px; text-transform: uppercase;">
                            ${room.capacity}
                        </span>
                        <h3 style="font-size: 1.5rem; color: #0b4f3a; margin: 10px 0 8px 0;">${room.type}</h3>
                        <p style="color: #6c757d; font-size: 0.95rem; margin-bottom: 15px;">${room.description}</p>
                        
                        <h4 style="font-size: 0.9rem; margin-bottom: 8px;">Room Highlights & Amenities:</h4>
                        <ul style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 8px; font-size: 0.85rem; color: #333; margin-bottom: 20px;">
                            ${featuresList}
                        </ul>
                    </div>

                    <button onclick="openRoomModal('${room.type}')" class="btn btn-primary" style="width: fit-content;">
                        <i class="fa-solid fa-bed"></i> Book This Room
                    </button>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', roomCardHtml);
    });
}

// Modal Handlers
function openRoomModal(roomType) {
    document.getElementById('modalHotelName').value = selectedHotelObj.name;
    document.getElementById('modalRoomType').value = roomType;

    // Grab decor from the current URL query string
    const urlParams = new URLSearchParams(window.location.search);
    const decorParam = urlParams.get('decor');

    if (decorParam) {
        const decorSelect = document.getElementById('roomDecor');
        if (decorSelect) {
            // Loop through options to find a match (ignoring case differences)
            let matched = false;
            for (let i = 0; i < decorSelect.options.length; i++) {
                const optVal = decorSelect.options[i].value.toLowerCase();
                const target = decorParam.toLowerCase();
                if (optVal.includes(target) || target.includes(optVal)) {
                    decorSelect.selectedIndex = i;
                    matched = true;
                    break;
                }
            }
            // Fallback: if no option matches, create one dynamically so it shows up!
            if (!matched) {
                const newOption = document.createElement('option');
                newOption.value = decorParam;
                newOption.textContent = decorParam;
                decorSelect.appendChild(newOption);
                decorSelect.value = decorParam;
            }
        }
    }

    const today = new Date().toISOString().split('T')[0];
    document.getElementById('roomCheckin').setAttribute('min', today);
    document.getElementById('roomCheckout').setAttribute('min', today);

    document.getElementById('roomModal').style.display = 'flex';
}

function closeRoomModal() {
    document.getElementById('roomModal').style.display = 'none';
}

// WhatsApp Booking Submission
// WhatsApp Booking Submission
function setupRoomFormHandler() {
    const form = document.getElementById('quickRoomForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('guestName').value;
        const phone = document.getElementById('guestPhone').value;
        const checkin = document.getElementById('roomCheckin').value;
        const checkout = document.getElementById('roomCheckout').value;
        const decor = document.getElementById('roomDecor').value;
        const roomType = document.getElementById('modalRoomType').value;

        // Clean message using bullet points instead of emojis/diamonds
        const messageText = `*New Room Booking Request - BRAINIXTOURISM*\n\n` +
            `• *Hotel:* ${selectedHotelObj.name}\n` +
            `• *Room Type:* ${roomType}\n` +
            `• *Destination:* ${selectedHotelObj.destination}\n` +
            `• *Guest Name:* ${name}\n` +
            `• *Phone:* ${phone}\n` +
            `• *Check-In:* ${checkin}\n` +
            `• *Check-Out:* ${checkout}\n` +
            `• *Decor Setup:* ${decor}`;
// enter whatsapp number 
        const businessWhatsAppNumber = "923234357362";
        const encodedMessage = encodeURIComponent(messageText);
        window.open(`https://wa.me/${businessWhatsAppNumber}?text=${encodedMessage}`, '_blank');

        closeRoomModal();
    });
}