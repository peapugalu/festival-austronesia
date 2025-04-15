document.addEventListener("DOMContentLoaded", () => {

  // ========== Smooth Scrolling for Navbar Links ==========
  const scrollLinks = document.querySelectorAll('.nav-links a');
  
  scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for sticky navbar
        behavior: 'smooth', // Smooth scroll effect
      });
    });
  });

  // ========== Dynamic Event Schedule ==========
  const events = [
    { date: '10 Mei', title: 'Pembukaan & Tarian Tradisional', description: 'Acara pembukaan dengan pertunjukan tari dari berbagai daerah.' },
    { date: '11 Mei', title: 'Lokakarya Musik & Pameran Budaya', description: 'Workshop dan pameran musik tradisional dari berbagai daerah.' },
    { date: '12 Mei', title: 'Festival Kuliner & Penutupan', description: 'Festival kuliner khas Austronesia dan penutupan acara.' },
  ];

  const eventList = document.querySelector('.schedule');

  // Loop through events array and create HTML dynamically
  events.forEach(event => {
    const eventItem = document.createElement('li');
    eventItem.innerHTML = `<strong>${event.date}:</strong> ${event.title}<p>${event.description}</p>`;
    eventList.appendChild(eventItem);
  });

  // ========== Lightbox for Gallery Images ==========
  const galleryImages = document.querySelectorAll('.gallery-grid img');
  const lightbox = document.createElement('div');
  lightbox.classList.add('lightbox');
  document.body.appendChild(lightbox);

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'block';
      lightbox.innerHTML = `<img src="${img.src}" alt="${img.alt}" class="lightbox-img">`;
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  // ========== Form Validation ==========
  const contactForm = document.querySelector('.contact-form');

  contactForm.addEventListener('submit', (event) => {
    const name = contactForm.querySelector('input[type="text"]');
    const email = contactForm.querySelector('input[type="email"]');
    const message = contactForm.querySelector('textarea');
    
    let valid = true;

    // Validate Name
    if (name.value.trim() === '') {
      valid = false;
      alert('Nama tidak boleh kosong');
    }

    // Validate Email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value)) {
      valid = false;
      alert('Email tidak valid');
    }

    // Validate Message
    if (message.value.trim() === '') {
      valid = false;
      alert('Pesan tidak boleh kosong');
    }

    if (!valid) {
      event.preventDefault();  // Prevent form submission if invalid
    }
  });

  // ========== Navbar Toggle for Mobile View ==========
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navLinks = document.querySelector('.nav-links');

  navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

});
