const hiddenList = document.querySelectorAll(".hidden");

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

hiddenList.forEach((hidden) => {
  myObserver.observe(hidden);
});
