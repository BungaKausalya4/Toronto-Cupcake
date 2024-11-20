/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (passId, eyeId) => {
   const input = document.getElementById(passId),
         iconEye = document.getElementById(eyeId);

   iconEye.addEventListener('click', () => {
      // Toggle between password and text input type
      if (input.type === 'password') {
         input.type = 'text';
         iconEye.classList.add('ri-eye-line');
         iconEye.classList.remove('ri-eye-off-line');
      } else {
         input.type = 'password';
         iconEye.classList.remove('ri-eye-line');
         iconEye.classList.add('ri-eye-off-line');
      }
   });
}
// Get the login form element
const loginForm = document.querySelector('.login__form');

// Add submit event listener to the form
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Redirect to landingpage.html
    window.location.href = 'landingpage.html';
});

// Apply show/hide password functionality for login and register pages
showHiddenPass('login-pass', 'login-eye');       // For login page
showHiddenPass('register-pass', 'register-eye'); // For register page (password field)
showHiddenPass('confirm-pass', 'confirm-eye');   // For register page (confirm password field)

/*=============== PASSWORD MATCH VALIDATION ===============*/
document.getElementById('register-form').addEventListener('submit', function(e) {
   const password = document.getElementById('register-pass').value;
   const confirmPassword = document.getElementById('confirm-pass').value;

   // Check if password and confirm password match
   if (password !== confirmPassword) {
      e.preventDefault(); // Prevent form submission
      alert('Passwords do not match!'); // Display alert message
   }
});

/*=============== NAVIGATE TO LANDING PAGE ===============*/
document.getElementById('register-form').addEventListener('submit', function(e) {
   const password = document.getElementById('register-pass').value;
   const confirmPassword = document.getElementById('confirm-pass').value;

   // Check if password and confirm password match
   if (password === confirmPassword) {
      e.preventDefault(); // Prevent default form submission
      window.location.href = "landingpage.html"; // Redirect to landing page
   }
});

document.addEventListener('DOMContentLoaded', () => {
   const image = document.querySelector('.why-choose__image');
 
   // Fungsi untuk memeriksa apakah elemen ada di viewport
   function isInViewport(el) {
     const rect = el.getBoundingClientRect();
     return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
   }
 
   // Event scroll untuk menambahkan kelas 'show' jika gambar terlihat
   window.addEventListener('scroll', () => {
     if (isInViewport(image)) {
       image.classList.add('show');
     }
   });
});

/*=============== CHANGE NAVBAR COLOR ON SCROLL ===============*/
// Menambahkan event listener untuk scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  
  // Tambahkan atau hapus kelas berdasarkan posisi scroll
  if (window.scrollY > 50) { // Jika posisi scroll lebih dari 50px
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

/*=============== SHOW CARDS ON SCROLL ===============*/
document.addEventListener('DOMContentLoaded', () => {
   const cards = document.querySelectorAll('.why-choose-card');
   
   // Fungsi untuk memeriksa apakah elemen ada di viewport
   function isInViewport(el) {
     const rect = el.getBoundingClientRect();
     return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
   }

   // Fungsi untuk menambahkan kelas 'show' jika elemen terlihat di viewport
   function showCardsOnScroll() {
     cards.forEach(card => {
       if (isInViewport(card)) {
         card.classList.add('show');
       }
     });
   }

   // Tambahkan event listener untuk scroll
   window.addEventListener('scroll', showCardsOnScroll);
   
   // Panggil fungsi untuk pertama kali memeriksa saat halaman dimuat
   showCardsOnScroll();
});

