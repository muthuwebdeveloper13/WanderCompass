/* =========================================================
   DESTINATION DATA
========================================================= */

const destinations = [
  {
    id: 1,

    name: "Ooty",

    location: "Tamil Nadu, India",

    category: "Mountain",

    budget: "Moderate",

    rating: 4.8,

    price: "₹10,000",

    duration: "3–4 Days",

    bestTime: "October–June",

    shortDescription:
      "A peaceful hill destination known for its cool climate and scenic landscapes.",

    longDescription: [
      "Ooty is a beautiful hill destination in Tamil Nadu known for its cool climate, green landscapes, and peaceful surroundings.",

      "The destination offers a relaxing experience with scenic viewpoints, gardens, lakes, and opportunities for sightseeing, trekking, photography, and boating.",
    ],

    attractions: ["Ooty Lake", "Botanical Garden", "Doddabetta Peak"],

    activities: ["Boating", "Sightseeing", "Trekking", "Photography"],

    tips: [
      "Carry light warm clothing.",
      "Check the weather before travelling.",
    ],

    mainImage: "./assets/destinations/ooty-main.jpg",

    gallery: [
      "./assets/gallery/ooty-1.jpg",
      "./assets/gallery/ooty-2.jpg",
      "./assets/gallery/ooty-3.jpg",
      "./assets/gallery/ooty-4.jpg",
      "./assets/gallery/ooty-5.jpg",
      "./assets/gallery/ooty-6.jpg",
    ],

    related: [2, 4, 5],
  },

  {
    id: 2,

    name: "Munnar",

    location: "Kerala, India",

    category: "Nature",

    budget: "Moderate",

    rating: 4.7,

    price: "₹12,000",

    duration: "3–4 Days",

    bestTime: "September–May",

    shortDescription:
      "A scenic hill destination surrounded by tea gardens, misty mountains, and beautiful natural landscapes.",

    longDescription: [
      "Munnar is a beautiful destination in Kerala known for its tea plantations, green hills, and peaceful natural surroundings.",

      "Visitors can enjoy sightseeing, plantation visits, trekking, photography, and relaxing views of the Western Ghats.",
    ],

    attractions: ["Tea Gardens", "Eravikulam National Park", "Mattupetty Dam"],

    activities: [
      "Tea plantation visits",
      "Trekking",
      "Sightseeing",
      "Photography",
    ],

    tips: [
      "Carry comfortable walking shoes.",
      "Check the weather before travelling.",
    ],

    mainImage: "./assets/destinations/munnar-main.jpg",

    gallery: [
      "./assets/gallery/munnar-1.jpg",
      "./assets/gallery/munnar-2.jpg",
      "./assets/gallery/munnar-3.jpg",
      "./assets/gallery/munnar-4.jpg",
      "./assets/gallery/munnar-5.jpg",
      "./assets/gallery/munnar-6.jpg",
    ],

    related: [1, 8, 4],
  },

  {
    id: 3,

    name: "Goa",

    location: "Goa, India",

    category: "Beach",

    budget: "Moderate",

    rating: 4.6,

    price: "₹15,000",

    duration: "3–5 Days",

    bestTime: "November–February",

    shortDescription:
      "A popular beach destination known for its beautiful coastline, relaxed atmosphere, and vibrant experiences.",

    longDescription: [
      "Goa is a popular coastal destination known for its beaches, historical places, and relaxed travel atmosphere.",

      "Visitors can enjoy beach activities, sightseeing, water activities, photography, and exploring local attractions.",
    ],

    attractions: ["Baga Beach", "Calangute Beach", "Fort Aguada"],

    activities: [
      "Beach activities",
      "Sightseeing",
      "Water activities",
      "Photography",
    ],

    tips: ["Use sun protection.", "Plan local transportation in advance."],

    mainImage: "./assets/destinations/goa-main.jpg",

    gallery: [
      "./assets/gallery/goa-1.jpg",
      "./assets/gallery/goa-2.jpg",
      "./assets/gallery/goa-3.jpg",
      "./assets/gallery/goa-4.jpg",
      "./assets/gallery/goa-5.jpg",
      "./assets/gallery/goa-6.jpg",
    ],

    related: [7, 9, 8],
  },

  {
    id: 4,

    name: "Manali",

    location: "Himachal Pradesh, India",

    category: "Mountain",

    budget: "Moderate",

    rating: 4.7,

    price: "₹14,000",

    duration: "4–5 Days",

    bestTime: "October–June",

    shortDescription:
      "A scenic mountain destination known for beautiful valleys, cool weather, and adventure experiences.",

    longDescription: [
      "Manali is a popular mountain destination surrounded by beautiful valleys, forests, and snow-covered landscapes.",

      "It offers opportunities for sightseeing, trekking, photography, and seasonal snow activities.",
    ],

    attractions: ["Solang Valley", "Hadimba Temple", "Rohtang Pass"],

    activities: ["Trekking", "Sightseeing", "Snow activities", "Photography"],

    tips: ["Carry warm clothing.", "Check road and weather conditions."],

    mainImage: "./assets/destinations/manali-main.jpg",

    gallery: [
      "./assets/gallery/manali-1.jpg",
      "./assets/gallery/manali-2.jpg",
      "./assets/gallery/manali-3.jpg",
      "./assets/gallery/manali-4.jpg",
      "./assets/gallery/manali-5.jpg",
      "./assets/gallery/manali-6.jpg",
    ],

    related: [1, 2, 5],
  },

  {
    id: 5,

    name: "Kashmir",

    location: "Jammu and Kashmir, India",

    category: "Nature",

    budget: "Luxury",

    rating: 4.9,

    price: "₹25,000",

    duration: "5–7 Days",

    bestTime: "March–October",

    shortDescription:
      "A beautiful destination known for lakes, mountains, valleys, and scenic natural landscapes.",

    longDescription: [
      "Kashmir is known for its beautiful valleys, lakes, mountains, and peaceful natural surroundings.",

      "Travel experiences include scenic sightseeing, Shikara rides, trekking, and photography.",
    ],

    attractions: ["Dal Lake", "Gulmarg", "Pahalgam"],

    activities: ["Shikara ride", "Sightseeing", "Trekking", "Photography"],

    tips: [
      "Check weather and travel conditions.",
      "Carry suitable seasonal clothing.",
    ],

    mainImage: "./assets/destinations/Kashmir-main.jpg",

    gallery: [
      "./assets/gallery/kashmir-1.jpg",
      "./assets/gallery/kashmir-2.jpg",
      "./assets/gallery/kashmir-3.jpg",
      "./assets/gallery/kashmir-4.jpg",
      "./assets/gallery/kashmir-5.jpg",
      "./assets/gallery/kashmir-6.jpg",
    ],

    related: [4, 1, 12],
  },

  {
    id: 6,

    name: "Jaipur",

    location: "Rajasthan, India",

    category: "Historical",

    budget: "Budget",

    rating: 4.6,

    price: "₹9,000",

    duration: "2–3 Days",

    bestTime: "October–March",

    shortDescription:
      "A historic city known for magnificent forts, palaces, culture, and colourful local markets.",

    longDescription: [
      "Jaipur is a historic destination known for its forts, palaces, architecture, and rich cultural experiences.",

      "Visitors can explore heritage sites, shop in local markets, enjoy local food, and capture beautiful photographs.",
    ],

    attractions: ["Amber Fort", "City Palace", "Hawa Mahal"],

    activities: [
      "Heritage sightseeing",
      "Shopping",
      "Photography",
      "Local food",
    ],

    tips: ["Wear comfortable footwear.", "Start sightseeing early."],

    mainImage: "./assets/destinations/Jaipur-main.jpg",

    gallery: [
      "./assets/gallery/jaipur-1.jpg",
      "./assets/gallery/jaipur-2.jpg",
      "./assets/gallery/jaipur-3.jpg",
      "./assets/gallery/jaipur-4.jpg",
      "./assets/gallery/jaipur-5.jpg",
      "./assets/gallery/jaipur-6.jpg",
    ],

    related: [10, 11, 3],
  },

  {
    id: 7,

    name: "Pondicherry",

    location: "Puducherry, India",

    category: "Beach",

    budget: "Budget",

    rating: 4.5,

    price: "₹7,000",

    duration: "2–3 Days",

    bestTime: "October–March",

    shortDescription:
      "A charming coastal destination known for its beaches, French architecture, and relaxed atmosphere.",

    longDescription: [
      "Pondicherry is known for its coastal scenery, French-inspired architecture, peaceful streets, and cultural experiences.",

      "Visitors can enjoy beach walks, cycling, sightseeing, and exploring cafés and heritage areas.",
    ],

    attractions: ["Promenade Beach", "French Quarter", "Sri Aurobindo Ashram"],

    activities: ["Beach walks", "Cycling", "Sightseeing", "Café visits"],

    tips: ["Use sun protection.", "Explore heritage areas on foot."],

    mainImage: "./assets/destinations/Pondicherry-main.jpg",

    gallery: [
      "./assets/gallery/pondicherry-1.jpg",
      "./assets/gallery/pondicherry-2.jpg",
      "./assets/gallery/pondicherry-3.jpg",
      "./assets/gallery/pondicherry-4.jpg",
      "./assets/gallery/pondicherry-5.jpg",
      "./assets/gallery/pondicherry-6.jpg",
    ],

    related: [3, 8, 9],
  },

  {
    id: 8,

    name: "Kerala Backwaters",

    location: "Kerala, India",

    category: "Nature",

    budget: "Moderate",

    rating: 4.7,

    price: "₹11,000",

    duration: "2–4 Days",

    bestTime: "October–March",

    shortDescription:
      "A peaceful natural destination known for scenic waterways, houseboats, and village landscapes.",

    longDescription: [
      "The Kerala Backwaters offer a peaceful travel experience through interconnected lakes, canals, and waterways.",

      "Visitors can enjoy houseboat cruises, village visits, sightseeing, and photography.",
    ],

    attractions: ["Alleppey Backwaters", "Kumarakom", "Vembanad Lake"],

    activities: [
      "Houseboat cruise",
      "Sightseeing",
      "Photography",
      "Village visits",
    ],

    tips: [
      "Book houseboats in advance.",
      "Check the weather before travelling.",
    ],

    mainImage: "./assets/destinations/Kerala-main.jpg",

    gallery: [
      "./assets/gallery/kerala-backwaters-1.jpg",
      "./assets/gallery/kerala-backwaters-2.jpg",
      "./assets/gallery/kerala-backwaters-3.jpg",
      "./assets/gallery/kerala-backwaters-4.jpg",
      "./assets/gallery/kerala-backwaters-5.jpg",
      "./assets/gallery/kerala-backwaters-6.jpg",
    ],

    related: [2, 7, 3],
  },

  {
    id: 9,

    name: "Bali",

    location: "Indonesia",

    category: "Beach",

    budget: "Luxury",

    rating: 4.8,

    price: "₹30,000",

    duration: "5–7 Days",

    bestTime: "April–October",

    shortDescription:
      "A tropical destination known for beautiful beaches, temples, rice terraces, and cultural experiences.",

    longDescription: [
      "Bali is a popular tropical destination known for its beaches, temples, rice terraces, and cultural attractions.",

      "Visitors can enjoy beach activities, temple visits, sightseeing, and photography.",
    ],

    attractions: ["Uluwatu Temple", "Ubud Rice Terraces", "Seminyak Beach"],

    activities: [
      "Beach activities",
      "Temple visits",
      "Sightseeing",
      "Photography",
    ],

    tips: ["Use sun protection.", "Respect local temple customs."],

    mainImage: "./assets/destinations/Bali-main.jpg",

    gallery: [
      "./assets/gallery/bali-1.jpg",
      "./assets/gallery/bali-2.jpg",
      "./assets/gallery/bali-3.jpg",
      "./assets/gallery/bali-4.jpg",
      "./assets/gallery/bali-5.jpg",
      "./assets/gallery/bali-6.jpg",
    ],

    related: [3, 7, 8],
  },

  {
    id: 10,

    name: "Dubai",

    location: "United Arab Emirates",

    category: "City",

    budget: "Luxury",

    rating: 4.7,

    price: "₹45,000",

    duration: "4–5 Days",

    bestTime: "November–March",

    shortDescription:
      "A modern city destination known for iconic architecture, shopping, entertainment, and desert experiences.",

    longDescription: [
      "Dubai is a modern city destination known for impressive architecture, shopping, entertainment, and desert landscapes.",

      "Visitors can enjoy city sightseeing, shopping, desert safari experiences, and photography.",
    ],

    attractions: ["Burj Khalifa", "Dubai Mall", "Dubai Desert"],

    activities: [
      "City sightseeing",
      "Shopping",
      "Desert safari",
      "Photography",
    ],

    tips: [
      "Plan activities in advance.",
      "Dress appropriately when visiting cultural places.",
    ],

    mainImage: "./assets/destinations/Dubai-main.jpg",

    gallery: [
      "./assets/gallery/dubai-1.jpg",
      "./assets/gallery/dubai-2.jpg",
      "./assets/gallery/dubai-3.jpg",
      "./assets/gallery/dubai-4.jpg",
      "./assets/gallery/dubai-5.jpg",
      "./assets/gallery/dubai-6.jpg",
    ],

    related: [11, 6, 9],
  },

  {
    id: 11,

    name: "Paris",

    location: "France",

    category: "City",

    budget: "Luxury",

    rating: 4.9,

    price: "₹60,000",

    duration: "5–7 Days",

    bestTime: "April–June; September–October",

    shortDescription:
      "A famous European city known for art, architecture, museums, landmarks, and romantic city experiences.",

    longDescription: [
      "Paris is a famous destination known for its architecture, museums, cultural attractions, and iconic landmarks.",

      "Visitors can explore museums, walk through the city, enjoy sightseeing, and capture memorable photographs.",
    ],

    attractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame area"],

    activities: ["Museum visits", "City walks", "Sightseeing", "Photography"],

    tips: [
      "Wear comfortable walking shoes.",
      "Reserve popular attractions in advance.",
    ],

    mainImage: "./assets/destinations/Paris-main.jpg",

    gallery: [
      "./assets/gallery/paris-1.jpg",
      "./assets/gallery/paris-2.jpg",
      "./assets/gallery/paris-3.jpg",
      "./assets/gallery/paris-4.jpg",
      "./assets/gallery/paris-5.jpg",
      "./assets/gallery/paris-6.jpg",
    ],

    related: [10, 12, 6],
  },

  {
    id: 12,

    name: "Switzerland",

    location: "Switzerland",

    category: "Mountain",

    budget: "Luxury",

    rating: 4.9,

    price: "₹70,000",

    duration: "6–8 Days",

    bestTime: "June–September; December–February",

    shortDescription:
      "A scenic mountain destination known for alpine landscapes, lakes, villages, and scenic train journeys.",

    longDescription: [
      "Switzerland is known for its beautiful alpine landscapes, lakes, mountains, and picturesque towns.",

      "Visitors can enjoy mountain sightseeing, scenic train rides, hiking, and photography.",
    ],

    attractions: ["Interlaken", "Zermatt", "Lake Geneva"],

    activities: [
      "Mountain sightseeing",
      "Scenic train rides",
      "Hiking",
      "Photography",
    ],

    tips: [
      "Check seasonal conditions.",
      "Pack clothing suitable for the season.",
    ],

    mainImage: "./assets/destinations/Switzerland-main.jpg",

    gallery: [
      "./assets/gallery/Switzerland-1.jpg",
      "./assets/gallery/switzerland-2.jpg",
      "./assets/gallery/switzerland-3.jpg",
      "./assets/gallery/switzerland-4.jpg",
      "./assets/gallery/switzerland-5.jpg",
      "./assets/gallery/switzerland-6.jpg",
    ],

    related: [5, 4, 11],
  },
];

/* =========================================================
   GET DESTINATION ID FROM URL
========================================================= */

const urlParams = new URLSearchParams(window.location.search);

const destinationId = Number(urlParams.get("id"));

/* =========================================================
   FIND DESTINATION
========================================================= */

const destination = destinations.find(function (item) {
  return item.id === destinationId;
});

/* =========================================================
   CHECK DESTINATION
========================================================= */

if (!destination) {
  document.querySelector("main").innerHTML = `
        <section class="section">
            <div class="container">
                <div class="section-heading">
                    <h2>Destination Not Found</h2>
                </div>

                <p>
                    Sorry, the destination you are looking for
                    could not be found.
                </p>

                <br>

                <a href="destinations.html"
                   class="related-btn">
                    ← Back to Destinations
                </a>
            </div>
        </section>
    `;
} else {
  displayDestination(destination);
}

/* =========================================================
   DISPLAY DESTINATION
========================================================= */

function displayDestination(destination) {
  /* -------------------------
       Basic information
    ------------------------- */

  document.title = `${destination.name} | WanderCompass`;

  document.getElementById("mainImage").src = destination.mainImage;

  document.getElementById("mainImage").alt = destination.name;

  document.getElementById("destinationName").textContent = destination.name;

  document.getElementById("location").textContent = destination.location;

  document.getElementById("rating").textContent = destination.rating;

  document.getElementById("category").textContent = destination.category;

  document.getElementById("budget").textContent = destination.budget;

  document.getElementById("shortDescription").textContent =
    destination.shortDescription;

  document.getElementById("price").textContent = destination.price;

  document.getElementById("duration").textContent = destination.duration;

  /* -------------------------
       Quick information
    ------------------------- */

  document.getElementById("quickCategory").textContent = destination.category;

  document.getElementById("quickBudget").textContent = destination.budget;

  document.getElementById("quickDuration").textContent = destination.duration;

  document.getElementById("bestTime").textContent = destination.bestTime;

  /* -------------------------
       About
    ------------------------- */

  document.getElementById("aboutName").textContent = destination.name;

  const longDescription = document.getElementById("longDescription");

  longDescription.innerHTML = "";

  destination.longDescription.forEach(function (paragraph) {
    const p = document.createElement("p");

    p.textContent = paragraph;

    longDescription.appendChild(p);
  });

  /* -------------------------
       Attractions
    ------------------------- */

  const attractionsContainer = document.getElementById("attractionsContainer");

  attractionsContainer.innerHTML = "";

  destination.attractions.forEach(function (attraction) {
    const card = document.createElement("div");

    card.className = "attraction-card";

    card.innerHTML = `
            <i class="fa-solid fa-location-dot"></i>

            <h3>
                ${attraction}
            </h3>
        `;

    attractionsContainer.appendChild(card);
  });

  /* -------------------------
       Activities
    ------------------------- */

  const activitiesContainer = document.getElementById("activitiesContainer");

  activitiesContainer.innerHTML = "";

  destination.activities.forEach(function (activity) {
    const item = document.createElement("div");

    item.className = "activity-item";

    item.innerHTML = `
            <i class="fa-solid fa-check"></i>

            <span>
                ${activity}
            </span>
        `;

    activitiesContainer.appendChild(item);
  });

  /* -------------------------
       Gallery
    ------------------------- */

  const galleryContainer = document.getElementById("galleryContainer");

  galleryContainer.innerHTML = "";

  destination.gallery.forEach(function (image, index) {
    const galleryItem = document.createElement("div");

    galleryItem.className = "gallery-item";

    galleryItem.innerHTML = `
            <img
                src="${image}"
                alt="${destination.name} gallery image ${index + 1}"
                onerror="this.onerror=null; this.src='${destination.mainImage}';"
            >
        `;

    galleryContainer.appendChild(galleryItem);
  });

  /* -------------------------
       Travel Tips
    ------------------------- */

  const tipsContainer = document.getElementById("tipsContainer");

  tipsContainer.innerHTML = "";

  destination.tips.forEach(function (tip) {
    const tipItem = document.createElement("div");

    tipItem.className = "tip-item";

    tipItem.innerHTML = `
            <i class="fa-solid fa-check"></i>

            <span>
                ${tip}
            </span>
        `;

    tipsContainer.appendChild(tipItem);
  });

  /* -------------------------
       Related Destinations
    ------------------------- */

  displayRelatedDestinations(destination.related);

  /* -------------------------
       Wishlist
    ------------------------- */

  updateWishlistButton();
}

/* =========================================================
   DISPLAY RELATED DESTINATIONS
========================================================= */

function displayRelatedDestinations(relatedIds) {
  const relatedContainer = document.getElementById("relatedContainer");

  relatedContainer.innerHTML = "";

  relatedIds.forEach(function (id) {
    const related = destinations.find(function (item) {
      return item.id === id;
    });

    if (!related) {
      return;
    }

    const card = document.createElement("div");

    card.className = "related-card";

    card.innerHTML = `

            <div class="related-card-image">

                <img
                    src="${related.mainImage}"
                    alt="${related.name}"
                >

            </div>


            <div class="related-card-content">

                <h3>
                    ${related.name}
                </h3>

                <p class="related-location">

                    <i class="fa-solid fa-location-dot"></i>

                    ${related.location}

                </p>

                <a
                    href="destination-details.html?id=${related.id}"
                    class="related-btn"
                >
                    View Details →
                </a>

            </div>

        `;

    relatedContainer.appendChild(card);
  });
}

/* =========================================================
   WISHLIST
========================================================= */

const wishlistBtn = document.getElementById("wishlistBtn");

wishlistBtn.addEventListener("click", function () {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const index = wishlist.indexOf(destinationId);

  if (index === -1) {
    wishlist.push(destinationId);
  } else {
    wishlist.splice(index, 1);
  }

  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  updateWishlistButton();
});

/* =========================================================
   UPDATE WISHLIST BUTTON
========================================================= */

function updateWishlistButton() {
  const wishlistBtn = document.getElementById("wishlistBtn");

  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const icon = wishlistBtn.querySelector("i");

  const text = wishlistBtn.querySelector("span");

  if (wishlist.includes(destinationId)) {
    wishlistBtn.classList.add("saved");

    icon.className = "fa-solid fa-heart";

    text.textContent = "Remove from Wishlist";
  } else {
    wishlistBtn.classList.remove("saved");

    icon.className = "fa-regular fa-heart";

    text.textContent = "Add to Wishlist";
  }
}

/* =========================================================
   MOBILE NAVBAR
========================================================= */

const menuBtn = document.getElementById("menuBtn");

const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", function () {
  navMenu.classList.toggle("show");
});
