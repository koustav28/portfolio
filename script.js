// SET NAV MENU HIGHLIGHT
// variables for html elements that we are targeting
const home = document.getElementById("home-btn");
const about = document.getElementById("about-btn");
const portfolio = document.getElementById("portfolio-btn");
const contact = document.getElementById("contact-btn");

// controllers that set the menu items to be either be active or inactive when clicked
const homeController = () => {
    home.className = "active menu-item";
    about.className = "inactive menu-item";
    portfolio.className = "inactive menu-item";
};

const aboutController = () => {
    home.className = "inactive menu-item";
    about.className = "active menu-item";
    portfolio.className = "inactive menu-item";
};

const portfolioController = () => {
    home.className = "inactive menu-item";
    about.className = "inactive menu-item";
    portfolio.className = "active menu-item";
};

const contactController = () => {
    home.className = "inactive menu-item";
    about.className = "inactive menu-item";
    portfolio.className = "inactive menu-item";
};

// event listners to fire the controllers when the elements are clicked
home.addEventListener("click", homeController);
about.addEventListener("click", aboutController);
portfolio.addEventListener("click", portfolioController);
contact.addEventListener("click", contactController);

// HAMBURGER MENU FUNCTIONALITY
// variables for html elements that we are targeting
const hamburger = document.querySelector(".hamburger");
const navMenu = document.getElementById("header-menu");

// toggle on the menu and trigger the bars to turn into an X
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("on");
    navMenu.classList.toggle("on");
});

// close the menu when a menu item is selected
document.querySelectorAll(".hamburger-item").forEach((n) => 
    n.addEventListener("click", () => {
        hamburger.classList.remove("on");
        navMenu.classList.remove("on");
    })
);