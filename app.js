// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hiddenLeft");
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElementsRight = document.querySelectorAll(".hiddenRight");
hiddenElementsRight.forEach((el) => observer.observe(el));

const hiddenElementsDown = document.querySelectorAll(".hiddenDown");
hiddenElementsDown.forEach((el) => observer.observe(el));

let projects = [
  {
    title: "Grid Glowing website",
    description: "This is a description",
  },
];
