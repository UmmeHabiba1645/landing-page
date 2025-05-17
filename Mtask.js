
const brands = ["Stylo", "Gucci", "Nishat", "Adidas", "Louis Vuitton", "Nike", "Outfitters"];
const categories = [
  "Cleaning Buckets & Tubs", "Sunglasses", "Mobiles", "Dog & Cat Beds", "Tablets",
  "Starter Kits", "Bed Sheets", "Blocks & Building Toys", "Knife Sharpeners & Blocks",
  "Battling Tops", "Microphones", "Zakat", "Shower Caddies & Hangers",
  "Dining Sets", "Injury Support and Braces", "Combo Washer Dryer"
];


function populateBrands() {
  const container = document.getElementById("brandSection");
  for (let i = 0; i < brands.length; i++) {
    const brandDiv = document.createElement("div");
    brandDiv.textContent = brands[i];
    container.appendChild(brandDiv);
  }
}


function populateCategories() {
  const container = document.getElementById("categorySection");
  let i = 0;
  while (i < categories.length) {
    const catDiv = document.createElement("div");
    catDiv.textContent = categories[i];
    container.appendChild(catDiv);
    i++;
  }
}


function signup() {
  let tries = 0;
  let done = false;
  do {
    alert("Thank you for signing up!");
    done = true;
    tries++;
  } while (!done && tries < 1);
}

// Login handler using switch
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
