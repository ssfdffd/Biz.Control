const images = [
  "https://YOUR_PROJECT_ID.supabase.co/storage/v1/object/public/hero-images/img1.jpg",
  "https://YOUR_PROJECT_ID.supabase.co/storage/v1/object/public/hero-images/img2.jpg",
  "https://YOUR_PROJECT_ID.supabase.co/storage/v1/object/public/hero-images/img3.jpg",
  "https://YOUR_PROJECT_ID.supabase.co/storage/v1/object/public/hero-images/img4.jpg",
];

let index = 0;
const heroImage = document.getElementById("hero-image");

function changeImage() {
  heroImage.style.opacity = 0;

  setTimeout(() => {
    heroImage.src = images[index];
    heroImage.style.opacity = 0.4;
    heroImage.style.transform = "scale(1)";
    index = (index + 1) % images.length;
  }, 600);
}

// Initial load
heroImage.src = images[0];

// Auto change every 5 seconds
setInterval(changeImage, 5000);
