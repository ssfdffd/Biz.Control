const images = [
  "https://slpeohltmdfkuaotjyta.supabase.co/storage/v1/object/sign/hero-images/bus.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jYzk2MzM1NS03NGU0LTQyODUtYjgwNi1kZjlmZDA0OTZkNzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJoZXJvLWltYWdlcy9idXMuanBnIiwiaWF0IjoxNzY2NDc1MDc1LCJleHAiOjE5MjQxNTUwNzV9.NTWk5N5Jf8u0sGuNAWEQAgi4QEzXLXcMi0RrcNmQWnE",
  "https://slpeohltmdfkuaotjyta.supabase.co/storage/v1/object/sign/hero-images/bus2.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jYzk2MzM1NS03NGU0LTQyODUtYjgwNi1kZjlmZDA0OTZkNzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJoZXJvLWltYWdlcy9idXMyLmpwZyIsImlhdCI6MTc2NjQ3NTIwMywiZXhwIjoxODYxMDgzMjAzfQ.RGoaKh0g5N2xRFLpKu4ZkLtLAHxdeoKt_BjMwjfaljY",
  "https://slpeohltmdfkuaotjyta.supabase.co/storage/v1/object/sign/hero-images/bus3.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jYzk2MzM1NS03NGU0LTQyODUtYjgwNi1kZjlmZDA0OTZkNzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJoZXJvLWltYWdlcy9idXMzLmpwZyIsImlhdCI6MTc2NjQ3NTI1MCwiZXhwIjoxOTI0MTU1MjUwfQ.z_HJkM72WnAYclFPATOij1tRpOQTIcne6CevJqbGDDE",
  "https://slpeohltmdfkuaotjyta.supabase.co/storage/v1/object/sign/hero-images/bus5.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jYzk2MzM1NS03NGU0LTQyODUtYjgwNi1kZjlmZDA0OTZkNzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJoZXJvLWltYWdlcy9idXM1LmpwZyIsImlhdCI6MTc2NjQ3NTM1NywiZXhwIjoxOTI0MTU1MzU3fQ.-y4rw7oMLNBDb7RhxQVdfHaaC8GUwfFy3y3lIjHQcXc"
  "https://slpeohltmdfkuaotjyta.supabase.co/storage/v1/object/sign/hero-images/bus4.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jYzk2MzM1NS03NGU0LTQyODUtYjgwNi1kZjlmZDA0OTZkNzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJoZXJvLWltYWdlcy9idXM0LmpwZyIsImlhdCI6MTc2NjQ3NTMwNCwiZXhwIjoxOTI0MTU1MzA0fQ.5I21V_f_cRd8KUbluCfyzHriI-kyE-M4FnOE9w-3iY8",
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
