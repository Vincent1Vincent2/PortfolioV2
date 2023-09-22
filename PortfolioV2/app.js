// let innerCursor = document.querySelector(".innerCursor");
// let outerCursor = document.querySelector(".outerCursor");

// document.addEventListener("mousemove", moveCursor);

// function moveCursor(e) {
//   let x = e.clientX;
//   let y = e.clientY;
//   innerCursor.style.left = `${x}px`;
//   innerCursor.style.top = `${y}px`;

//   setTimeout(() => {
//     outerCursor.style.left = `${x}px`;
//     outerCursor.style.top = `${y}px`;
//   }, 190);
// }

// const navToggle = document.querySelector(".mobileNavToggle");
// const primaryNav = document.querySelector(".navItems");

// navToggle.add.addEventListener("click", () => {
//   primaryNav.classList.toggle("opened");
// });

const menu = document.querySelector(".navItems");
const menuItems = document.querySelectorAll(".navItems");
const hamburger = document.querySelector(".mobileNavToggle");
const closeIcon = document.querySelector(".hamburgerClosed");
const menuIcon = document.querySelector(".hamburgerOpen");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}
hamburger.addEventListener("click", toggleMenu);

const darkMode = document.querySelector(".darkModeSwitch");
const lightMode = document.querySelector(".lightModeSwitch");
const theme = document.querySelector(".theme-switch");

const innerCursor = document.querySelector(".innerCursor");
const outerCursor = document.querySelector(".outerCursor");

window.onpointermove = (event) => {
  const { clientX, clientY } = event;

  innerCursor.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 300, fill: "forwards" }
  );
  outerCursor.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 1500, fill: "forwards" }
  );
};

let links = Array.from(document.querySelectorAll("a"));

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    outerCursor.classList.add("grow");
  });
});

links.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    outerCursor.classList.remove("grow");
  });
});

links.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("fade");
  });
});

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    innerCursor.classList.add("fade");
  });
});

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
