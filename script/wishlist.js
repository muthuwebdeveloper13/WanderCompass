// -----------------------------------------------------------------------------------------------------------------------------
/* =========================================================
   WANDERCOMPASS WISHLIST SYSTEM
========================================================= */

/* =========================================================
   DESTINATION DATA
========================================================= */

const destinations = [
  {
    id: 1,
    name: "Ooty",
    location: "Tamil Nadu, India",
    category: "Mountain",
    rating: 4.8,
    minPrice: 10000,
    maxPrice: 12000,
    image: "./assets/destinations/ooty-main.jpg",
  },

  {
    id: 2,
    name: "Munnar",
    location: "Kerala, India",
    category: "Nature",
    rating: 4.7,
    minPrice: 12000,
    maxPrice: 15000,
    image: "./assets/destinations/munnar-main.jpg",
  },

  {
    id: 3,
    name: "Goa",
    location: "Goa, India",
    category: "Beach",
    rating: 4.6,
    minPrice: 15000,
    maxPrice: 17000,
    image: "./assets/destinations/goa-main.jpg",
  },

  {
    id: 4,
    name: "Manali",
    location: "Himachal Pradesh, India",
    category: "Mountain",
    rating: 4.7,
    minPrice: 14000,
    maxPrice: 17000,
    image: "./assets/destinations/manali-main.jpg",
  },

  {
    id: 5,
    name: "Kashmir",
    location: "Jammu and Kashmir, India",
    category: "Nature",
    rating: 4.9,
    minPrice: 25000,
    maxPrice: 28000,
    image: "./assets/destinations/Kashmir-main.jpg",
  },

  {
    id: 6,
    name: "Jaipur",
    location: "Rajasthan, India",
    category: "Historical",
    rating: 4.6,
    minPrice: 9000,
    maxPrice: 11000,
    image: "./assets/destinations/Jaipur-main.jpg",
  },

  {
    id: 7,
    name: "Pondicherry",
    location: "Puducherry, India",
    category: "Beach",
    rating: 4.5,
    minPrice: 7000,
    maxPrice: 9000,
    image: "./assets/destinations/Pondicherry-main.jpg",
  },

  {
    id: 8,
    name: "Kerala Backwaters",
    location: "Kerala, India",
    category: "Nature",
    rating: 4.7,
    minPrice: 11000,
    maxPrice: 13000,
    image: "./assets/destinations/Kerala-main.jpg",
  },

  {
    id: 9,
    name: "Bali",
    location: "Indonesia",
    category: "Beach",
    rating: 4.8,
    minPrice: 30000,
    maxPrice: 33000,
    image: "./assets/destinations/Bali-main.jpg",
  },

  {
    id: 10,
    name: "Dubai",
    location: "United Arab Emirates",
    category: "City",
    rating: 4.7,
    minPrice: 45000,
    maxPrice: 48000,
    image: "./assets/destinations/Dubai-main.jpg",
  },

  {
    id: 11,
    name: "Paris",
    location: "France",
    category: "City",
    rating: 4.9,
    minPrice: 60000,
    maxPrice: 63000,
    image: "./assets/destinations/Paris-main.jpg",
  },

  {
    id: 12,
    name: "Switzerland",
    location: "Switzerland",
    category: "Mountain",
    rating: 4.9,
    minPrice: 70000,
    maxPrice: 74000,
    image: "./assets/destinations/Switzerland-main.jpg",
  },
];

/* =========================================================
   LOCAL STORAGE
========================================================= */

const WISHLIST_KEY = "wishlist";

/* =========================================================
   GET WISHLIST
========================================================= */

function getWishlist() {
  const saved = localStorage.getItem(WISHLIST_KEY);

  if (!saved) {
    return [];
  }

  try {
    const wishlist = JSON.parse(saved);

    if (!Array.isArray(wishlist)) {
      return [];
    }

    return wishlist.map(Number);
  } catch (error) {
    console.error("Wishlist storage error:", error);

    return [];
  }
}

/* =========================================================
   SAVE WISHLIST
========================================================= */

function saveWishlist(wishlist) {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}

/* =========================================================
   TOGGLE WISHLIST
========================================================= */

function toggleWishlist(id) {
  id = Number(id);

  let wishlist = getWishlist();

  const index = wishlist.indexOf(id);

  /* ---------------- REMOVE ---------------- */

  if (index !== -1) {
    wishlist.splice(index, 1);
  } else {

  /* ---------------- ADD ---------------- */
    wishlist.push(id);
  }

  saveWishlist(wishlist);

  console.log("Wishlist:", wishlist);

  /* Update destination page */

  updateDestinationHearts();

  /* Update wishlist page */

  renderWishlist();
}

/* =========================================================
   CREATE DESTINATION CARD
========================================================= */

function createDestinationCard(destination) {
  const wishlist = getWishlist();

  const isSaved = wishlist.includes(Number(destination.id));

  const card = document.createElement("div");

  card.className = "dest-card";

  card.dataset.id = destination.id;

  card.innerHTML = `

        <div class="dest-card-img">

            <img
                src="${destination.image}"
                alt="${destination.name}">

        </div>


        <div class="dest-card-head">

            <p>
                ${destination.name}
            </p>


            <i
                class="
                    fa-heart
                    wishlist-heart
                    ${isSaved ? "fa-solid wishlist-active" : "fa-regular"}
                "
                aria-label="Add ${destination.name} to wishlist"
                title="Wishlist">
            </i>

        </div>


        <div class="dest-card-location">

            <p>
                ${destination.location}
            </p>

        </div>


        <div class="dest-card-catogory">

            <span>
                ${destination.category}
            </span>


            <span>

                <i class="fa-solid fa-star"></i>

                ${destination.rating}

            </span>

        </div>


        <div class="dest-card-budget">

            <p>

                <i class="fa-solid fa-indian-rupee-sign"></i>

                ${destination.minPrice}

                -

                <i class="fa-solid fa-indian-rupee-sign"></i>

                ${destination.maxPrice}

            </p>

        </div>


        <div class="dest-card-btn">

            <button
                type="button"
                class="view-details-btn">

                View Details

            </button>

        </div>

    `;

  const detailsButton = card.querySelector(".view-details-btn");

  detailsButton.addEventListener("click", function () {
    window.location.href = `destination-details.html?id=${destination.id}`;
  });

  return card;
}

/* =========================================================
   RENDER DESTINATIONS
========================================================= */

function renderDestinations(list = destinations) {
  const container = document.getElementById("destinationCards");

  /* Not destination page */

  if (!container) {
    return;
  }

  container.innerHTML = "";

  list.forEach((destination) => {
    const card = createDestinationCard(destination);

    container.appendChild(card);
  });

  setupWishlistButtons();

  updateDestinationHearts();
}

/* =========================================================
   UPDATE HEART ICONS
========================================================= */

function updateDestinationHearts() {
  const wishlist = getWishlist();

  document.querySelectorAll(".dest-card").forEach((card) => {
    const id = Number(card.dataset.id);

    const heart = card.querySelector(".wishlist-heart");

    if (!heart) {
      return;
    }

    if (wishlist.includes(id)) {
      /* RED FILLED HEART */

      heart.classList.remove("fa-regular");

      heart.classList.add("fa-solid");

      heart.classList.add("wishlist-active");
    } else {
      /* DEFAULT HEART */

      heart.classList.remove("fa-solid");

      heart.classList.remove("wishlist-active");

      heart.classList.add("fa-regular");
    }
  });
}

/* =========================================================
   SETUP HEART CLICK
========================================================= */

function setupWishlistButtons() {
  document.querySelectorAll(".wishlist-heart").forEach((heart) => {
    /* Prevent duplicate listeners */

    if (heart.dataset.wishlistReady === "true") {
      return;
    }

    heart.dataset.wishlistReady = "true";

    heart.addEventListener("click", function (event) {
      event.preventDefault();

      event.stopPropagation();

      const card = this.closest(".dest-card");

      if (!card) {
        return;
      }

      const id = Number(card.dataset.id);

      toggleWishlist(id);
    });
  });
}

/* =========================================================
   CREATE WISHLIST CARD
========================================================= */

function createWishlistCard(destination) {
  const card = document.createElement("div");

  card.className = "dest-card";

  card.dataset.id = destination.id;

  card.innerHTML = `

        <div class="dest-card-img">

            <img
                src="${destination.image}"
                alt="${destination.name}">

        </div>


        <div class="dest-card-head">

            <p>
                ${destination.name}
            </p>


            <i
                class="
                    fa-solid
                    fa-heart
                    wishlist-heart
                    wishlist-active
                "
                title="Remove from wishlist"
                aria-label="Remove ${destination.name} from wishlist">
            </i>

        </div>


        <div class="dest-card-location">

            <p>
                ${destination.location}
            </p>

        </div>


        <div class="dest-card-catogory">

            <span>
                ${destination.category}
            </span>


            <span>

                <i class="fa-solid fa-star"></i>

                ${destination.rating}

            </span>

        </div>


        <div class="dest-card-budget">

            <p>

                <i class="fa-solid fa-indian-rupee-sign"></i>

                ${destination.minPrice}

                -

                <i class="fa-solid fa-indian-rupee-sign"></i>

                ${destination.maxPrice}

            </p>

        </div>


        <div class="dest-card-btn">

            <button
                type="button"
                class="view-details-btn">

                View Details

            </button>

        </div>

    `;

  const detailsButton = card.querySelector(".view-details-btn");

  detailsButton.addEventListener("click", function () {
    window.location.href = `destination-details.html?id=${destination.id}`;
  });

  return card;
}

/* =========================================================
   RENDER WISHLIST
========================================================= */

function renderWishlist() {
  const container = document.getElementById("wishlistCards");

  /* We are not on wishlist page */

  if (!container) {
    return;
  }

  const countElement = document.getElementById("wishlistCount");

  const emptyMessage = document.getElementById("wishlistEmpty");

  const wishlistSection = document.getElementById("wishlistSection");

  const wishlist = getWishlist();

  /* ---------------- COUNT ---------------- */

  if (countElement) {
    countElement.textContent = wishlist.length;
  }

  /* Clear cards */

  container.innerHTML = "";

  /* =====================================================
       EMPTY WISHLIST
    ===================================================== */

  if (wishlist.length === 0) {
    if (wishlistSection) {
      wishlistSection.style.display = "none";
    }

    if (emptyMessage) {
      emptyMessage.style.display = "block";
    }

    return;
  }

  /* =====================================================
       HAS WISHLIST ITEMS
    ===================================================== */

  if (wishlistSection) {
    wishlistSection.style.display = "block";
  }

  if (emptyMessage) {
    emptyMessage.style.display = "none";
  }

  /* Create cards */

  wishlist.forEach((id) => {
    const destination = destinations.find(
      (item) => Number(item.id) === Number(id),
    );

    if (!destination) {
      return;
    }

    const card = createWishlistCard(destination);

    container.appendChild(card);
  });

  /* Setup remove buttons */

  setupWishlistButtons();
}

/* =========================================================
   SEARCH
========================================================= */

function setupSearch() {
  const searchInput = document.getElementById("searchInput");

  if (!searchInput) {
    return;
  }

  searchInput.addEventListener("input", applyFilters);
}

/* =========================================================
   FILTERS
========================================================= */

function setupFilters() {
  const category = document.getElementById("categoryFilter");

  const budget = document.getElementById("budgetFilter");

  const sort = document.getElementById("sortFilter");

  if (category) {
    category.addEventListener("change", applyFilters);
  }

  if (budget) {
    budget.addEventListener("change", applyFilters);
  }

  if (sort) {
    sort.addEventListener("change", applyFilters);
  }
}

/* =========================================================
   APPLY SEARCH + FILTER
========================================================= */

function applyFilters() {
  const searchInput = document.getElementById("searchInput");

  const categoryFilter = document.getElementById("categoryFilter");

  const budgetFilter = document.getElementById("budgetFilter");

  const sortFilter = document.getElementById("sortFilter");

  const searchValue = searchInput ? searchInput.value.toLowerCase().trim() : "";

  const categoryValue = categoryFilter ? categoryFilter.value : "";

  const budgetValue = budgetFilter ? budgetFilter.value : "";

  const sortValue = sortFilter ? sortFilter.value : "";

  let filtered = destinations.filter((destination) => {
    /* Search */

    const matchesSearch =
      destination.name.toLowerCase().includes(searchValue) ||
      destination.location.toLowerCase().includes(searchValue) ||
      destination.category.toLowerCase().includes(searchValue);

    if (!matchesSearch) {
      return false;
    }

    /* Category */

    if (categoryValue && destination.category !== categoryValue) {
      return false;
    }

    /* Budget */

    if (budgetValue) {
      const price = destination.minPrice;

      if (budgetValue === "Budget" && price > 10000) {
        return false;
      }

      if (budgetValue === "Moderate" && (price < 10000 || price > 30000)) {
        return false;
      }

      if (budgetValue === "Luxury" && price < 30000) {
        return false;
      }
    }

    return true;
  });

  /* =====================================================
       SORT
    ===================================================== */

  if (sortValue === "rating-high") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (sortValue === "rating-low") {
    filtered.sort((a, b) => a.rating - b.rating);
  }

  if (sortValue === "price-low") {
    filtered.sort((a, b) => a.minPrice - b.minPrice);
  }

  if (sortValue === "price-high") {
    filtered.sort((a, b) => b.minPrice - a.minPrice);
  }

  if (sortValue === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  /* Render */

  renderDestinations(filtered);

  /* No results */

  const noResults = document.getElementById("noResults");

  const heading = document.getElementById("destinationHeading");

  if (filtered.length === 0) {
    if (noResults) {
      noResults.style.display = "block";
    }

    if (heading) {
      heading.style.display = "none";
    }
  } else {
    if (noResults) {
      noResults.style.display = "none";
    }

    if (heading) {
      heading.style.display = "block";
    }
  }
}

/* =========================================================
   CLEAR FILTERS
========================================================= */

function setupClearFilters() {
  const button = document.getElementById("clearFilters");

  if (!button) {
    return;
  }

  button.addEventListener("click", function () {
    const search = document.getElementById("searchInput");

    const category = document.getElementById("categoryFilter");

    const budget = document.getElementById("budgetFilter");

    const sort = document.getElementById("sortFilter");

    if (search) {
      search.value = "";
    }

    if (category) {
      category.value = "";
    }

    if (budget) {
      budget.value = "";
    }

    if (sort) {
      sort.value = "";
    }

    renderDestinations();

    const noResults = document.getElementById("noResults");

    if (noResults) {
      noResults.style.display = "none";
    }
  });
}

/* =========================================================
   PAGE LOAD
========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  console.log("Wishlist loaded:", getWishlist());

  /* Destination page */

  if (document.getElementById("destinationCards")) {
    renderDestinations();

    setupSearch();

    setupFilters();

    setupClearFilters();
  }

  /* Wishlist page */

  if (document.getElementById("wishlistCards")) {
    renderWishlist();
  }

  /* Always update hearts */

  updateDestinationHearts();
});
