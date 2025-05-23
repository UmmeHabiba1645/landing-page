const brands = [
  { name: "Stylo", image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Stylo_Shoes_logo.png/200px-Stylo_Shoes_logo.png" },
  { name: "Gucci", image: "https://1000logos.net/wp-content/uploads/2017/02/Gucci-Logo.png" },
  { name: "Nishat", image: "https://static-01.daraz.pk/p/50a357a99cba6b51a7ff19ef40406e44.jpg" },
  { name: "Adidas", image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" },
  { name: "Louis Vuitton", image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Louis_Vuitton_logo_and_wordmark.svg" },
  { name: "Nike", image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
  { name: "Outfitters", image: "https://outfitters.com.pk/cdn/shop/files/logo_d03f59e6-5081-4f90-94e5-9b2b446e2768.png" }
];

const categories = [
  "Cleaning Buckets & Tubs", "Sunglasses", "Mobiles", "Dog & Cat Beds", "Tablets",
  "Starter Kits", "Bed Sheets", "Blocks & Building Toys", "Knife Sharpeners & Blocks",
  "Battling Tops", "Microphones", "Zakat", "Shower Caddies & Hangers",
  "Dining Sets", "Injury Support and Braces", "Combo Washer Dryer"
];

function populateBrands() {
  const container = document.getElementById("brandSection");
  brands.forEach(brand => {
    const brandDiv = document.createElement("div");
    brandDiv.innerHTML = `<img src="${brand.image}" alt="${brand.name}" width="100"><p>${brand.name}</p>`;
    container.appendChild(brandDiv);
  });
}o

function populateCategories() {
  const container = document.getElementById("categorySection");
  categories.forEach(category => {
    const catDiv = document.createElement("div");
    catDiv.textContent = category;
    container.appendChild(catDiv);
  });
}

function signup() {
  alert("Thank you for signing up!");
}

function loginHandler() {
  const userType = prompt("Are you a Guest or Member?").toLowerCase();
  switch (userType) {
    case "guest":
      alert("Welcome, Guest! Limited access granted.");
      break;
    case "member":
      alert("Welcome back, Member!");
      break;
    default:
      alert("Invalid input. Please enter 'Guest' or 'Member'.");
  }
}

function initPage() {
  populateBrands();
  populateCategories();
}

window.onload = initPage;
