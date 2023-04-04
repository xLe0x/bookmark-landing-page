// Menues
const simpleMenu = document.querySelector(".menu-simple");
const speedyMenu = document.querySelector(".menu-speedy");
const easyMenu = document.querySelector(".menu-easy");

// Get the content of the menues
const headerMenu = document.querySelector(".header-menu");
const textMenu = document.querySelector(".text-menu");
const imageMenu = document.querySelector(".image-menu");

// ONCLICK FUNCTION
simpleMenu.addEventListener("click", () => {
  headerMenu.innerHTML = "Bookmark in one click";
  textMenu.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ex mollitia aspernatur illum corporis voluptatum quidem aliquam.";
  imageMenu.setAttribute("src", "../images/illustration-features-tab-1.svg");
});

speedyMenu.addEventListener("click", () => {
  headerMenu.textContent = "Intelligent search";
  textMenu.textContent =
    "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
  imageMenu.setAttribute("src", "../images/illustration-features-tab-2.svg");
});

easyMenu.addEventListener("click", () => {
  headerMenu.textContent = "Share your bookmarks";
  textMenu.textContent =
    "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
  imageMenu.setAttribute("src", "../images/illustration-features-tab-3.svg");
});

// Questions

const question1 = document.querySelector(".question-1");
const answer1 = document.querySelector(".answer-1");
const question2 = document.querySelector(".question-2");
const answer2 = document.querySelector(".answer-2");

question1.addEventListener("click", () => {
  answer1.classList.toggle("hidden");
});

question2.addEventListener("click", () => {
  answer2.classList.toggle("hidden");
});
