// Countdown Timer
const releaseDate = new Date("June 30, 2023 00:00:00").getTime();
const countdown = document.getElementById("countdown");

const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = releaseDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(timer);
    countdown.innerHTML = "RELEASED!";
  }
}, 1000);

// Reviews
let reviews = [];

function submitReview() {
  const name = document.getElementById("name").value;
  const rating = document.querySelector('input[name="rating"]:checked').value;
  const review = document.getElementById("review").value;

  const reviewObject = {
    name: name,
    rating: rating,
    review: review
  };

  reviews.push(reviewObject);
  document.getElementById("review_form").reset();
  displayReviews();
}

function displayReviews() {
  const reviewsBody = document.getElementById("reviews-body");
  reviewsBody.innerHTML = "";

  reviews.forEach(review => {
    const row = reviewsBody.insertRow();

    const nameCell = row.insertCell();
    nameCell.innerHTML = review.name;

    const ratingCell = row.insertCell();
    ratingCell.innerHTML = review.rating;

    const reviewCell = row.insertCell();
    reviewCell.innerHTML = review.review;
  });
}
