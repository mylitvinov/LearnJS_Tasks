// find all stars
let stars = findAllStars();
// bind click listener stars
bindClickListener(stars);
// restore saved current value
restorePreviousValue(stars);

function findAllStars() {
  let stars = document.querySelectorAll(".js-stars img");
  return stars;
}

function bindClickListener(stars) {
  stars.forEach((star) => {
    star.addEventListener("click", (e) => {
      //console.log('click')
      let activeStars = document.querySelectorAll(".js-stars img.active");
      activeStars.forEach((star) => star.classList.remove("active"));

      let clickedStar = e.currentTarget;
      let clickedIndex;
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.classList.add("active");
        if (star === clickedStar) {
          clickedIndex = i;
          break;
        }
      }
      localStorage.setItem("rating-value", clickedIndex);
    });
  });
}

function restorePreviousValue(stars) {
  let savedValue = localStorage.getItem("rating-value");
  if (!!savedValue) {
    for (let i = 0; i < stars.length; i++) {
      const star = stars[i];
      star.classList.add("active");
      if (i == savedValue) {
        break;
      }
    }
  }
}
