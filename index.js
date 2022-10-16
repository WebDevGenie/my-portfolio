const projects = document.querySelector(".projects-section");

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
};
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const myObserver = new IntersectionObserver(callback, options);
myObserver.observe(projects);
