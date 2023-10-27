console.log("hello world MD");

const myName = "Minghao";
console.log(myName);

const h1 = document.querySelector(".heading-primary");
console.log(h1);

// function click_test() {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// }

// h1.addEventListener("click", click_test);

// set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//////////////////// make mobil nav///////////////////
const btnNavEl = document.querySelector(".btn-mobil-nav");
const headerEl = document.querySelector("header");
function openMenu() {
  headerEl.classList.toggle("nav-open");
}
btnNavEl.addEventListener("click", openMenu);

const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);
allLinks.forEach(function (l) {
  l.addEventListener("click", function (e) {
    if (l.classList.contains("main-nav-link"))
      headerEl.classList.remove("nav-open");
  });
});
///////////////////////////////////////////////////////////

//////////////////// smooth scroll///////////////////
// const allLinks = document.querySelectorAll("a:link");
// console.log(allLinks);
// allLinks.forEach(function (l) {
//   l.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = l.getAttribute("href");
//     // console.log(href);
//     if (href == "#") {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     }

//     if (href != "#" && href.startsWith("#")) {
//       // console.log(href);
//       const sectionEl = document.querySelectorAll(href);
//       // console.log(sectionEl);
//       sectionEl.scrollIntoView({ behavior: "smooth" });
//     }
//   });
// });
///////////////////////////////////////////////////////////

///////////////////////sticky nav////////////////////////////////////
// const sectionHeroEl = document.querySelector(".section-hero");
// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];

//     if (ent.isIntersecting === false) {
//       document.querySelector(".header").classList.add("sticky");
//     }
//   },
//   {
//     root: null,
//     threshold: 0,
//   }
// );
// obs.observe(sectionHeroEl);
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
