const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const clearButton = document.getElementById("clearButton");
const cards = document.querySelectorAll(".recommendation-card");
const noResults = document.getElementById("noResults");

function searchRecommendations() {
  const searchTerm = searchInput.value.toLowerCase().trim();

  let visibleCount = 0;

  cards.forEach((card) => {
    const category = card.dataset.category.toLowerCase();
    const text = card.innerText.toLowerCase();

    if (
      searchTerm === "" ||
      category.includes(searchTerm) ||
      text.includes(searchTerm)
    ) {
      card.style.display = "block";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  noResults.style.display = visibleCount === 0 ? "block" : "none";
}

searchButton.addEventListener("click", searchRecommendations);

searchInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    searchRecommendations();
  }
});

clearButton.addEventListener("click", () => {
  searchInput.value = "";

  cards.forEach((card) => {
    card.style.display = "block";
  });

  noResults.style.display = "none";
});
